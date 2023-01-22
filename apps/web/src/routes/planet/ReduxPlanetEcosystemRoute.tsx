import { FC } from "react";
import { PlanetEcosystemPage } from "../../pages/planet/PlanetEcosystemPage";
import { useAppSelector } from "../../store/store-hooks";

export const ReduxPlanetEcosystemRoute: FC = () => {
  const planet = useAppSelector((state) => state.planet);

  return <PlanetEcosystemPage planet={planet} />;
};
