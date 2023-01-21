import { FC } from "react";
import { PlanetDto } from "@redux-killer/dtos/planet.dto";
import { useQuery } from "@tanstack/react-query";
import { List, Paper, Title } from "@mantine/core";
import { IconPlanet } from "@tabler/icons";
import { CreatePlanetForm } from "../components/CreatePlanetForm";
import { generatePath, Link } from "react-router-dom";

export const PlanetsPage: FC = () => {
  const { data: planets, isLoading } = useQuery<PlanetDto[]>(["planets"], () =>
    fetch("/api/planets").then((response) => response.json())
  );

  return (
    <section>
      <Title order={2} pb={"md"}>
        Planets
      </Title>

      <CreatePlanetForm />

      {isLoading && <Paper mt={"md"}>🔄</Paper>}

      <List mt={"md"} icon={<IconPlanet />}>
        {planets?.map((planet) => (
          <List.Item key={planet.url}>
            <Link
              to={generatePath("/planet/:planetId/ecosystem", {
                planetId: planet.id,
              })}
            >
              {planet.name}
            </Link>
          </List.Item>
        ))}
      </List>
    </section>
  );
};
