import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store-hooks";
import { createNewPlanet, fetchPlanets, toggleDeathStar } from "../store/store";
import { PlanetsPage } from "../pages/PlanetsPage";
import { Paths } from "./paths";
import { NewPlanetDto } from "@redux-killer/dtos/planet.dto";
import { closeAllModals } from "@mantine/modals";
import { DeathStarButton } from "../components/DeathStarButton";
import { useReduxDeathStar } from "../hooks/useReduxDeathStar";

export const ReduxPlanetsRoute: FC = () => {
  const planets = useAppSelector((state) => state.list);
  const isLoading = useAppSelector((state) => state.isLoading);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPlanets());
  }, [dispatch, fetchPlanets]);

  const onSubmitNewPlanet = (data: NewPlanetDto) => {
    dispatch(createNewPlanet(data));
    closeAllModals();
  };

  const { deathStarInterval, isDeathStarActivated } = useReduxDeathStar();

  return (
    <PlanetsPage
      planets={planets}
      isLoading={isLoading}
      planetPath={Paths.REDUX_PLANET_ECOSYSTEM}
      onSubmitNewPlanet={onSubmitNewPlanet}
      deathStarAffix={
        <DeathStarButton
          onClick={() =>
            dispatch(
              toggleDeathStar({
                deathStarInterval,
                isDeathStarActivated: !isDeathStarActivated,
              })
            )
          }
        />
      }
    />
  );
};
