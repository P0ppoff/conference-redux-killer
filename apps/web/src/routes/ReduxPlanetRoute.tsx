import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PlanetPage } from "../pages/PlanetPage";
import { Paths } from "./paths";
import { useAppDispatch, useAppSelector } from "../store/store-hooks";
import { fetchPlanet } from "../store/store";

export const ReduxPlanetRoute: FC = () => {
  const { planetId } = useParams() as {
    planetId: string;
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPlanet(planetId));
  }, [dispatch, fetchPlanet, planetId]);

  const isLoading = useAppSelector((state) => state.isPlanetLoading);
  const planet = useAppSelector((state) => state.planet);

  return (
    <PlanetPage
      planetId={planetId}
      planet={planet}
      isLoading={isLoading}
      planetEcosystemPath={Paths.REDUX_PLANET_ECOSYSTEM}
      planetAppearancePath={Paths.REDUX_PLANET_APPEARANCE}
    />
  );
};
