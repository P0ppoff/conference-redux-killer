import { Injectable } from "@nestjs/common";
import { AllPlanetsDto, PlanetDto } from "@redux-killer/dtos/planet.dto";
import axios from "axios";

@Injectable()
export class AppService {
  private readonly apiBaseUrl = "https://swapi.dev/api";

  getPlanetById(planetId: string) {
    return this.getData<PlanetDto>(`/planets/${planetId}/`);
  }

  async getAllPlanets(): Promise<PlanetDto[]> {
    const planets: PlanetDto[] = [];

    let planetsPaged = await this.getData<AllPlanetsDto>(`/planets`);
    planets.push(...planetsPaged.results);

    while (planetsPaged.next != null) {
      planetsPaged = await this.getHttpClient(planetsPaged.next);
      planets.push(...planetsPaged.results);
    }
    return planets;
  }

  private getHttpClient<T>(url: string) {
    return axios.get<T>(url).then(({ data }) => data);
  }

  private getData<T>(endpoint: string) {
    return this.getHttpClient<T>(this.apiBaseUrl + endpoint);
  }
}
