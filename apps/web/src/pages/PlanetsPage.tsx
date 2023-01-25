import { FC, useState } from "react";
import { NewPlanetDto, PlanetDto } from "@redux-killer/dtos/planet.dto";
import { Anchor, Divider, List, Loader, Title } from "@mantine/core";
import { IconPlanet } from "@tabler/icons";
import { generatePath, Link } from "react-router-dom";
import { FilmsFilter } from "../components/FilmsFilter";
import { PlanetsFilters } from "../types/filters.types";
import { RegisterNewPlanet } from "../components/RegisterNewPlanet";
import { ScrollToTop } from "../components/ScrollToTop";
import { Paths } from "../routes/paths";

export const PlanetsPage: FC<{
  planets: undefined | PlanetDto[];
  isLoading: boolean;
  planetPath:
    | typeof Paths.TAN_STACK_PLANET_ECOSYSTEM
    | typeof Paths.REDUX_PLANET_ECOSYSTEM;
  onSubmitNewPlanet: (data: NewPlanetDto) => void;
}> = ({ planets, isLoading, planetPath, onSubmitNewPlanet }) => {
  const [filters, setFilters] = useState<PlanetsFilters | null>(null);
  const onSubmitFilters = (filtersFrom: PlanetsFilters | null) => {
    setFilters(filtersFrom);
  };

  return (
    <section>
      <Title order={2} pb={"md"}>
        Planets
      </Title>

      <FilmsFilter onSubmit={onSubmitFilters} />

      <Divider my="sm" />

      <RegisterNewPlanet onSubmit={onSubmitNewPlanet} />

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
                to={generatePath(planetPath, {
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
