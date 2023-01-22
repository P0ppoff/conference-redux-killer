import { FC } from "react";
import { PlanetDto } from "@redux-killer/dtos/planet.dto";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { HttpClient } from "../httpClient";
import { PlanetPage } from "../pages/PlanetPage";
import { Paths } from "./paths";

export const TanStackPlanetRoute: FC = () => {
  const { planetId } = useParams() as {
    planetId: string;
  };

  const { data: planet, isLoading } = useQuery<PlanetDto>(
    ["planets", planetId],
    () => HttpClient.get(`/api/planets/${planetId}`)
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
