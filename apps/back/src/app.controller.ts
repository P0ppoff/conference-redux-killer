import { Controller, Get, Param } from "@nestjs/common";
import { AllPlanetsDto, PlanetDto } from "@redux-killer/dtos/planet.dto";
import { AppService } from "./app.service";

@Controller("/api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/planets/:planetId')
  async getPlanetById(@Param("planetId") planetId: string): Promise<PlanetDto> {
    return this.appService.getPlanetById(planetId);
  }

  @Get('/planets')
  async getAllPlanets(): Promise<PlanetDto[]> {
    return this.appService.getAllPlanets();
  }
}
