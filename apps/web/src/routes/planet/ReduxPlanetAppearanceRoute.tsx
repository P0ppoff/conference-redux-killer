import { FC } from "react";
import { PlanetAppearancePage } from "../../pages/planet/PlanetAppearancePage";
import { useAppSelector } from "../../store/store-hooks";

export const ReduxPlanetAppearanceRoute: FC = () => {
  const planet = useAppSelector((state) => state.planet);

  return <PlanetAppearancePage planet={planet} />;
};
