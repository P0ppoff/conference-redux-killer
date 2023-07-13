import { FC } from "react";
import { PlanetDto } from "@redux-killer/dtos/planet.dto";
import { useQuery } from "@tanstack/react-query";
import { PlanetsPage } from "../pages/PlanetsPage";
import { Paths } from "./paths";
import { keys } from "../utils/keys";
import { apiBuilder } from "../utils/apiBuilder";
import { useNewPlanetMutation } from "../hooks/useNewPlanetMutation";
import { HttpClient } from "../httpClient";
import { DeathStarButton } from "../components/DeathStarButton";
import { useTanStackDeathStarMutation } from "../hooks/useTanStackDeathStarMutation";

export const TanStackPlanetsRoute: FC = () => {
  const { data: planets, isLoading } = useQuery<PlanetDto[]>(
    keys.planets(),
    () => HttpClient.get(apiBuilder.allPlanets()),
    { refetchIntervalInBackground: true, refetchInterval: 3_000 }
  );

  const { onSubmitNewPlanet } = useNewPlanetMutation();

  const { onClickDeathStar } = useTanStackDeathStarMutation();

  return (
    <PlanetsPage
      planets={planets}
      isLoading={isLoading}
      planetPath={Paths.TAN_STACK_PLANET_ECOSYSTEM}
      onSubmitNewPlanet={onSubmitNewPlanet}
      deathStarAffix={<DeathStarButton onClick={onClickDeathStar} />}
    />
  );
};
