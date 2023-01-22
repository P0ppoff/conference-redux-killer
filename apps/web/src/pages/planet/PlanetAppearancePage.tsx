import { FC } from "react";
import { IconCardboards, IconMovie, IconUsers } from "@tabler/icons";
import { Accordion, List, Skeleton } from "@mantine/core";
import { PlanetDto } from "@redux-killer/dtos/planet.dto";

export const PlanetAppearancePage: FC<{ planet: undefined | PlanetDto }> = ({
  planet,
}) => {
  return (
    <Accordion m={"lg"} variant="contained">
      <Accordion.Item value="movie">
        <Accordion.Control icon={<IconMovie size={20} color={"red"} />}>
          Films
        </Accordion.Control>
        <Accordion.Panel>
          {planet == null ? (
            <Skeleton />
          ) : (
            <List>
              {planet.films.map((film) => (
                <List.Item key={film}>{film}</List.Item>
              ))}
            </List>
          )}
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="vr">
        <Accordion.Control
          disabled
          icon={<IconCardboards size={20} color={"blue"} />}
        >
          VR trips
        </Accordion.Control>
        <Accordion.Panel>No Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="users">
        <Accordion.Control icon={<IconUsers size={20} color={"teal"} />}>
          Residents
        </Accordion.Control>
        <Accordion.Panel>
          {planet == null ? (
            <Skeleton />
          ) : planet.residents.length === 0 ? (
            "No residents."
          ) : (
            <List>
              {planet.residents.map((resident) => (
                <List.Item key={resident}>{resident}</List.Item>
              ))}
            </List>
          )}
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};
