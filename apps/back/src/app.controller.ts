import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import {
  NewPlanetDto,
  PlanetDto,
  ToggleDeathStarDto,
} from '@redux-killer/dtos/planet.dto';
import { AppService } from './app.service';
import { DelayInterceptor } from './delay.interceptor';

@Controller('/api')
@UseInterceptors(DelayInterceptor)
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
  @HttpCode(HttpStatus.CREATED)
  async savePlanet(@Body() planet: NewPlanetDto): Promise<PlanetDto[]> {
    return this.appService.savePlanet(planet);
  }

  @Post('/death-star')
  @HttpCode(HttpStatus.ACCEPTED)
  async toggleDeathStar(
    @Body() toggle: ToggleDeathStarDto,
  ): Promise<ToggleDeathStarDto> {
    return this.appService.toggleDeathStar(toggle.enabled);
  }
}
