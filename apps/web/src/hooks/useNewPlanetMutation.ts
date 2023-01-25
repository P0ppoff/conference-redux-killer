import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HttpClient } from "../httpClient";
import { closeAllModals } from "@mantine/modals";
import { useId } from "react";
import { NewPlanetDto, PlanetDto } from "@redux-killer/dtos/planet.dto";
import { apiBuilder } from "../utils/apiBuilder";
import { keys } from "../utils/keys";

export const useNewPlanetMutation = () => {
  const queryClient = useQueryClient();

  const id = useId();

  const { mutateAsync } = useMutation(
    (data: NewPlanetDto) =>
      HttpClient.post(apiBuilder.newPlanet(), {
        body: JSON.stringify(data),
      }),
    {
      onMutate: async (planet) => {
        await queryClient.cancelQueries(keys.planets());
        queryClient.setQueryData(keys.planets(), (oldPlanets?: PlanetDto[]) => {
          if (oldPlanets == null) {
            return oldPlanets;
          }
          const futurePlanet: PlanetDto = {
            id,
            diameter: "unknown",
            edited: new Date(),
            created: new Date(),
            terrain: planet.terrain.join(", "),
            rotation_period: String(planet.rotationPeriod),
            url: id,
            surface_water: "unknown",
            orbital_period: "unknown",
            films: planet.films,
            residents: [],
            name: planet.name,
            gravity: String(planet.gravity),
            population: String(planet.population),
            climate: planet.climate.join(", "),
          };
          return [futurePlanet, ...oldPlanets];
        });
      },
      onSuccess: (allPlanets: PlanetDto[]) => {
        queryClient.setQueryData(keys.planets(), () => allPlanets);
      },
    }
  );

  const onSubmitNewPlanet = async (data: NewPlanetDto) => {
    await mutateAsync(data);
    closeAllModals();
  };

  return {
    onSubmitNewPlanet,
  };
};
