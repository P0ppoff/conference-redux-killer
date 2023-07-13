import { useAppSelector } from "../store/store-hooks";

export const useReduxDeathStar = () => {
  const isDeathStarActivated = useAppSelector(
    (state) => state.isDeathStarActivated
  );
  const deathStarInterval = useAppSelector((state) => state.deathStarInterval);

  return {
    isDeathStarActivated,
    deathStarInterval,
  };
};
