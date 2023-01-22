import { FC } from "react";
import { PlanetDto } from "@redux-killer/dtos/planet.dto";
import { useQuery } from "@tanstack/react-query";
import { PlanetsPage } from "../pages/PlanetsPage";
import { Paths } from "./paths";

export const TanStackPlanetsRoute: FC = () => {
  const { data: planets, isLoading } = useQuery<PlanetDto[]>(["planets"], () =>
    fetch("/api/planets").then((response) => response.json())
  );

  return (
    <PlanetsPage
      planets={planets}
      isLoading={isLoading}
      planetPath={Paths.TAN_STACK_PLANET_ECOSYSTEM}
    />
  );
};
