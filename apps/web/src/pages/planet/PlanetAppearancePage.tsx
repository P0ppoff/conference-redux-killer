import { FC } from "react";
import { IconCardboards, IconMovie, IconUsers } from "@tabler/icons";
import { Accordion, List, Skeleton } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { PlanetDto } from "@redux-killer/dtos/planet.dto";

export const PlanetAppearancePage: FC = () => {
  const { planetId } = useParams() as {
    planetId: string;
  };

  const { data: planet } = useQuery<PlanetDto>(["planets", planetId]);

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
                <List.Item>{film}</List.Item>
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
                <List.Item>{resident}</List.Item>
              ))}
            </List>
          )}
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};
