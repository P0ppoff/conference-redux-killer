import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { PlanetDto } from "@redux-killer/dtos/planet.dto";
import { PlanetAppearancePage } from "../../pages/planet/PlanetAppearancePage";

export const TanStackPlanetAppearanceRoute: FC = () => {
  const { planetId } = useParams() as {
    planetId: string;
  };

  const { data: planet } = useQuery<PlanetDto>(["planets", planetId]);

  return <PlanetAppearancePage planet={planet} />;
};
