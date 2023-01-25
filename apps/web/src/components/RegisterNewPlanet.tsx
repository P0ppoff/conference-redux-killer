import { FC } from "react";
import { Button, Card, Flex, Text } from "@mantine/core";
import { RegisterNewPlanetModal } from "./RegisterNewPlanetModal";
import { openModal } from "@mantine/modals";
import { NewPlanetDto } from "@redux-killer/dtos/planet.dto";

export const RegisterNewPlanet: FC<{
  onSubmit: (data: NewPlanetDto) => void;
}> = ({ onSubmit }) => {
  const openRegisterNewPlanetModal = () => {
    openModal({
      title: "Add a new planet to StarWars Univers",
      centered: true,
      closeOnClickOutside: false,
      children: <RegisterNewPlanetModal onSubmit={onSubmit} />,
    });
  };

  return (
    <Card mt={"md"}>
      <Card.Section>
        <Flex justify={"space-between"} align={"center"}>
          <Text pl={"xl"} color={"cyan"}>
            Add a new StarWars Planet
          </Text>
          <Button color={"cyan"} onClick={openRegisterNewPlanetModal}>
            Register a planet
          </Button>
        </Flex>
      </Card.Section>
    </Card>
  );
};
