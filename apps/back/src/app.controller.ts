import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { NewPlanetDto, PlanetDto } from '@redux-killer/dtos/planet.dto';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/planets/:planetId')
  async getPlanetById(@Param('planetId') planetId: string): Promise<PlanetDto> {
    return this.appService.getPlanetById(planetId);
  }

  @Get('/planets')
  async getAllPlanets(): Promise<PlanetDto[]> {
    return this.appService.getAllPlanets();
  }

  @Post('/planets/new')
  @HttpCode(201)
  async savePlanet(@Body() planet: NewPlanetDto): Promise<PlanetDto[]> {
    return this.appService.savePlanet(planet);
  }
}
