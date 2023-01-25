import { FC } from "react";
import { PlanetDto } from "@redux-killer/dtos/planet.dto";
import { useQuery } from "@tanstack/react-query";
import { PlanetsPage } from "../pages/PlanetsPage";
import { Paths } from "./paths";
import { keys } from "../utils/keys";
import { apiBuilder } from "../utils/apiBuilder";
import { useNewPlanetMutation } from "../hooks/useNewPlanetMutation";
import { HttpClient } from "../httpClient";

export const TanStackPlanetsRoute: FC = () => {
  const { data: planets, isLoading } = useQuery<PlanetDto[]>(
    keys.planets(),
    () => HttpClient.get(apiBuilder.allPlanets())
  );

  const { onSubmitNewPlanet } = useNewPlanetMutation();

  return (
    <PlanetsPage
      planets={planets}
      isLoading={isLoading}
      planetPath={Paths.TAN_STACK_PLANET_ECOSYSTEM}
      onSubmitNewPlanet={onSubmitNewPlanet}
    />
  );
};
