import { FC, useState } from "react";
import { PlanetDto } from "@redux-killer/dtos/planet.dto";
import { useQuery } from "@tanstack/react-query";
import { Anchor, Divider, List, Loader, Title } from "@mantine/core";
import { IconPlanet } from "@tabler/icons";
import { generatePath, Link } from "react-router-dom";
import { FilmsFilter } from "../components/FilmsFilter";
import { PlanetsFilters } from "../types/filters.types";
import { RegisterNewPlanet } from "../components/RegisterNewPlanet";
import { ScrollToTop } from "../components/ScrollToTop";

export const PlanetsPage: FC = () => {
  const { data: planets, isLoading } = useQuery<PlanetDto[]>(["planets"], () =>
    fetch("/api/planets").then((response) => response.json())
  );

  const [filters, setFilters] = useState<PlanetsFilters | null>(null);
  const onSubmit = (filtersFrom: PlanetsFilters | null) => {
    setFilters(filtersFrom);
  };

  return (
    <section>
      <Title order={2} pb={"md"}>
        Planets
      </Title>

      <FilmsFilter onSubmit={onSubmit} />

      <Divider my="sm" />

      <RegisterNewPlanet />

      {isLoading && <Loader color={"cyan"} mt={"md"} />}

      <List mt={"md"} icon={<IconPlanet />}>
        {planets
          ?.filter(
            (planet) =>
              filters == null ||
              planet.films.some((film) => film === filters.filmsFilter)
          )
          .map((planet) => (
            <List.Item key={planet.url}>
              <Anchor
                color={"yellow"}
                component={Link}
                to={generatePath("/planet/:planetId/ecosystem", {
                  planetId: planet.id,
                })}
              >
                {planet.name}
              </Anchor>
            </List.Item>
          ))}
      </List>

      <ScrollToTop />
    </section>
  );
};
