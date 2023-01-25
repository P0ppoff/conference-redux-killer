import { FC } from "react";
import { PlanetDto } from "@redux-killer/dtos/planet.dto";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { HttpClient } from "../httpClient";
import { PlanetPage } from "../pages/PlanetPage";
import { Paths } from "./paths";
import { apiBuilder } from "../utils/apiBuilder";
import { keys } from "../utils/keys";

export const TanStackPlanetRoute: FC = () => {
  const { planetId } = useParams() as {
    planetId: string;
  };

  const { data: planet, isLoading } = useQuery<PlanetDto>(
    keys.planetById(planetId),
    () => HttpClient.get(apiBuilder.planetById(planetId))
  );

  return (
    <PlanetPage
      planetId={planetId}
      planet={planet}
      isLoading={isLoading}
      planetEcosystemPath={Paths.TAN_STACK_PLANET_ECOSYSTEM}
      planetAppearancePath={Paths.TAN_STACK_PLANET_APPEARANCE}
    />
  );
};
