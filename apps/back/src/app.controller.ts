import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import axios from "axios";

@Controller("/api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  async getHello(): Promise<string> {
    return (await axios.get("https://swapi.dev/api/planets/3/")).data;
  }
}
