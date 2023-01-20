import { FC } from "react";
import { PlanetDto } from "@redux-killer/dtos/planet.dto";
import { useQuery } from "@tanstack/react-query";
import { List, Paper, Title } from "@mantine/core";
import { IconPlanet } from "@tabler/icons";
import { Layout } from "./Layout";
import { CreatePlanetForm } from "./CreatePlanetForm";

export const App: FC = () => {
  const { data: planets, isLoading } = useQuery<PlanetDto[]>(
    ["planets"],
    () =>
      fetch("/api/planets")
        .then((response) => response.json())
  );

  return (
    <Layout>
      <section>
        <Title order={2} pb={"md"}>Planets</Title>

        <CreatePlanetForm />

        {isLoading && (<Paper mt={"md"}>🔄</Paper>)}

        <List mt={"md"} icon={<IconPlanet />}>
          {planets?.map((planet) => (
            <List.Item key={planet.url}>
              {planet.name}
            </List.Item>
          ))}
        </List>
      </section>
    </Layout>
  );
};
