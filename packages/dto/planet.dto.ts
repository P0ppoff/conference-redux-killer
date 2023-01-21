export interface AllPlanetsApi {
  count: number;
  next: string | null;
  previous: string | null;
  results: PlanetApi[];
}

export type PlanetApi = Omit<PlanetDto, "id">;

export interface PlanetDto {
  id: string;
  name: string; //"Yavin IV";
  climate: string; //"temperate, tropical";
  gravity: string; //"1 standard";
  diameter: string; //"10200";
  rotation_period: string; //"24";
  surface_water: string; //"8";
  terrain: string; //"jungle, rainforests";
  orbital_period: string; //"4818";
  population: string; //"1000";
  films: string[]; //["https://swapi.dev/api/films/1/"];
  residents: string[];
  created: Date; //"2014-12-10T11:37:19.144000Z";
  edited: Date; //"2014-12-20T20:58:18.421000Z";
  url: string; //"https://swapi.dev/api/planets/3/";
}

export interface NewPlanetDto {
  name: string;
  climate: string[];
  population: number;
  gravity: number;
  terrain: string[];
  rotationPeriod: number;
  films: string[];
}
