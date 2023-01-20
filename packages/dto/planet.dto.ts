export interface AllPlanetsDto {
  count: number
  next: string | null
  previous: string | null
  results: PlanetDto[]
}

export interface PlanetDto {
  climate: string //"temperate, tropical";
  diameter: string //"10200";
  films: string[] //["https://swapi.dev/api/films/1/"];
  gravity: string //"1 standard";
  name: string //"Yavin IV";
  orbital_period: string //"4818";
  population: string //"1000";
  residents: [];
  rotation_period: string //"24";
  surface_water: string //"8";
  terrain: string //"jungle, rainforests";
  created: Date //"2014-12-10T11:37:19.144000Z";
  edited: Date; //"2014-12-20T20:58:18.421000Z";
  url: string //"https://swapi.dev/api/planets/3/";
}
