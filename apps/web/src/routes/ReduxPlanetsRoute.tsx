import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store-hooks";
import { createNewPlanet, fetchPlanets } from "../store/store";
import { PlanetsPage } from "../pages/PlanetsPage";
import { Paths } from "./paths";
import { NewPlanetDto } from "@redux-killer/dtos/planet.dto";
import { closeAllModals } from "@mantine/modals";

export const ReduxPlanetsRoute: FC = () => {
  const planets = useAppSelector((state) => state.list);
  const isLoading = useAppSelector((state) => state.isLoading);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPlanets());
  }, []);

  const onSubmitNewPlanet = (data: NewPlanetDto) => {
    dispatch(createNewPlanet(data));
    closeAllModals();
  };

  return (
    <PlanetsPage
      planets={planets}
      isLoading={isLoading}
      planetPath={Paths.REDUX_PLANET_ECOSYSTEM}
      onSubmitNewPlanet={onSubmitNewPlanet}
    />
  );
};
