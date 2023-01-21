import { FC, useState } from "react";
import { PlanetDto } from "@redux-killer/dtos/planet.dto";
import { useQuery } from "@tanstack/react-query";
import {
  Affix,
  Anchor,
  Button,
  Divider,
  List,
  Paper,
  Title,
  Transition,
} from "@mantine/core";
import { IconArrowUp, IconPlanet } from "@tabler/icons";
import { generatePath, Link } from "react-router-dom";
import { useWindowScroll } from "@mantine/hooks";
import { FilmsFilter } from "../components/FilmsFilter";
import { PlanetsFilters } from "../types/filters.types";

export const PlanetsPage: FC = () => {
  const [scroll, scrollTo] = useWindowScroll();

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

      {isLoading && <Paper mt={"md"}>🔄</Paper>}

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

      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<IconArrowUp size={16} />}
              style={transitionStyles}
              color={"yellow"}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </section>
  );
};
