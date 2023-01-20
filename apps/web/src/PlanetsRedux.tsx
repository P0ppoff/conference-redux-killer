import { FC, useEffect } from "react";
import { List, Paper, Title } from "@mantine/core";
import { IconPlanet } from "@tabler/icons";
import { fetchPlanets, RootState } from "./store";
import { PlanetDto } from "@redux-killer/dtos/planet.dto";
import { useAppDispatch, useAppSelector } from "./store-hooks";

export const PlanetsRedux: FC = () => {
  const planets = useAppSelector((state: RootState) => state.list);
  const isLoading = useAppSelector((state: RootState) => state.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPlanets());
  }, []);

  return (
    <section>
      <Title order={2} pb={"md"}>
        Planets
      </Title>

      {isLoading && <Paper>🔄</Paper>}

      <List mt={"md"} icon={<IconPlanet />}>
        {planets?.map((planet: PlanetDto) => (
          <List.Item key={planet.url}>{planet.name}</List.Item>
        ))}
      </List>
    </section>
  );
};
