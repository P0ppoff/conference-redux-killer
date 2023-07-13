import { Injectable } from '@nestjs/common';
import {
  AllPlanetsApi,
  NewPlanetDto,
  PlanetApi,
  PlanetDto,
} from '@redux-killer/dtos/planet.dto';
import { httpClient } from './httpClient';

@Injectable()
export class AppService {
  private readonly apiBaseUrl = 'https://swapi.dev/api';
  private id = 100;

  private newPlanets: PlanetDto[] = [];
  private deathStarInterval: NodeJS.Timer;
  private currentDeathPlanetIndex = 0;

  getPlanetById(planetId: string): Promise<PlanetDto> {
    return this.getData<PlanetApi>(`/planets/${planetId}/`).then((planet) => ({
      ...planet,
      id: planetId,
    }));
  }

  savePlanet(planet: NewPlanetDto): Promise<PlanetDto[]> {
    const planetToSave: PlanetDto = {
      id: String(this.id++),
      diameter: 'unknown',
      edited: new Date(),
      created: new Date(),
      terrain: planet.terrain.join(', '),
      rotation_period: String(planet.rotationPeriod),
      url: 'unknown',
      surface_water: 'unknown',
      orbital_period: 'unknown',
      films: planet.films,
      residents: [],
      name: planet.name,
      gravity: String(planet.gravity),
      population: String(planet.population),
      climate: planet.climate.join(', '),
    };
    this.newPlanets.push(planetToSave);
    return this.getAllPlanets();
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

    return this.newPlanets.concat(planets).splice(this.currentDeathPlanetIndex);
  }

  async toggleDeathStar(enabled: boolean) {
    if (enabled === false) {
      clearInterval(this.deathStarInterval);
    } else {
      this.currentDeathPlanetIndex = 0;
      this.deathStarInterval = setInterval(() => {
        this.currentDeathPlanetIndex++;
      }, 4_000);
    }
    return { enabled };
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
