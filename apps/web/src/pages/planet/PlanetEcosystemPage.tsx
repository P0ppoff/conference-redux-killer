import { FC } from "react";
import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { PlanetDto } from "@redux-killer/dtos/planet.dto";

const IntlNumberFormat = new Intl.NumberFormat("en-EN");

export const PlanetEcosystemPage: FC = () => {
  const { planetId } = useParams() as {
    planetId: string;
  };

  const { data: planet } = useQuery<PlanetDto>(["planets", planetId]);

  if (planet == null) {
    return null; // TODO make return loading card
  }

  const populationIntl =
    planet.population === "unknown"
      ? "unknown"
      : IntlNumberFormat.format(Number(planet.population));
  const climateFormatted = planet.climate.split(", ").join(" & ");
  const terrainFormatted = planet.terrain.split(", ").join(" & ");

  return (
    <Card shadow={"sm"} p={"lg"} m={"lg"} radius={"md"} withBorder>
      <Card.Section>
        <Image
          src={
            "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          }
          height={160}
          alt={"Norway"}
        />
      </Card.Section>

      <Group position={"apart"} mt={"md"} mb={"xs"}>
        <Text weight={500}>{terrainFormatted}</Text>
        <Badge color={"pink"} variant={"light"}>
          {`Population ${populationIntl}`}
        </Badge>
      </Group>

      <Text size={"sm"} color={"dimmed"}>
        {`The climate is ${climateFormatted}. The planet gravity is ${planet.gravity} and the day takes ${planet.rotation_period} hours.`}
      </Text>

      <Button
        variant={"light"}
        color={"blue"}
        title={"Not available yet, wait 2100!"}
        fullWidth
        mt={"md"}
        radius={"md"}
      >
        Book classic tour now
      </Button>
    </Card>
  );
};
