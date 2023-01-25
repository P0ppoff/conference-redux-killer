export const apiBuilder = {
  allPlanets: () => "/api/planets",
  newPlanet: () => "/api/planets/new",
  planetById: (planetId: string) => `/api/planets/${planetId}`,
};
