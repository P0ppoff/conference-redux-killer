import { FC } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { PlanetDto } from "@redux-killer/dtos/planet.dto";
import { PlanetEcosystemPage } from "../../pages/planet/PlanetEcosystemPage";
import { keys } from "../../utils/keys";

export const TanStackPlanetEcosystemRoute: FC = () => {
  const { planetId } = useParams() as {
    planetId: string;
  };

  const { data: planet } = useQuery<PlanetDto>(keys.planetById(planetId));

  return <PlanetEcosystemPage planet={planet} />;
};
