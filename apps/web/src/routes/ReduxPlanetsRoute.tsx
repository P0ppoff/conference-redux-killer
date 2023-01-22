import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store-hooks";
import { fetchPlanets } from "../store/store";
import { PlanetsPage } from "../pages/PlanetsPage";
import { Paths } from "./paths";

export const ReduxPlanetsRoute: FC = () => {
  const dispatch = useAppDispatch();
  const planets = useAppSelector((state) => state.list);
  const isLoading = useAppSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(fetchPlanets());
  }, []);

  return (
    <PlanetsPage
      planets={planets}
      isLoading={isLoading}
      planetPath={Paths.REDUX_PLANET_ECOSYSTEM}
    />
  );
};
