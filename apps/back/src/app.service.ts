import { Injectable } from '@nestjs/common';
import {
  AllPlanetsApi,
  PlanetApi,
  PlanetDto,
} from '@redux-killer/dtos/planet.dto';
import { httpClient } from './httpClient';

@Injectable()
export class AppService {
  private readonly apiBaseUrl = 'https://swapi.dev/api';

  getPlanetById(planetId: string): Promise<PlanetDto> {
    return this.getData<PlanetApi>(`/planets/${planetId}/`).then((planet) => ({
      ...planet,
      id: planetId,
    }));
  }

  async getAllPlanets(): Promise<PlanetDto[]> {
    const planets: PlanetDto[] = [];

    let planetsPaged: AllPlanetsApi = await this.getData<AllPlanetsApi>(
      `/planets`,
    );
    planets.push(
      ...planetsPaged.results.map((planet) => ({
        ...planet,
        id: this.extractPlanetId(planet.url),
      })),
    );

    while (planetsPaged.next != null) {
      planetsPaged = await this.getHttpClient<AllPlanetsApi>(planetsPaged.next);
      planets.push(
        ...planetsPaged.results.map((planet) => ({
          ...planet,
          id: this.extractPlanetId(planet.url),
        })),
      );
    }
    return planets;
  }

  private extractPlanetId(url: string) {
    return url.split('/').at(-2);
  }

  private getData<T>(endpoint: string): Promise<T> {
    return this.getHttpClient<T>(this.apiBaseUrl + endpoint);
  }

  private getHttpClient<T>(url: string): Promise<T> {
    return httpClient.get<T>(url).then(({ data }) => data);
  }
}
