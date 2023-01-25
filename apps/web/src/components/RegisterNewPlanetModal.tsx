import { FC } from "react";
import {
  Button,
  Flex,
  MultiSelect,
  NumberInput,
  TextInput,
} from "@mantine/core";
import { closeAllModals } from "@mantine/modals";
import { Controller, useForm } from "react-hook-form";
import { allFilms } from "../data/films";
import { climates, terrains } from "../data/ecosystems";
import { NewPlanetDto } from "@redux-killer/dtos/planet.dto";

export const RegisterNewPlanetModal: FC<{
  onSubmit: (data: NewPlanetDto) => void;
}> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm<NewPlanetDto>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction={"column"} gap={"sm"}>
        <Controller
          name={"name"}
          control={control}
          render={({ field }) => (
            <TextInput
              label={"Planet name"}
              required
              radius={"xl"}
              {...field}
            />
          )}
        />
        <Controller
          name={"climate"}
          control={control}
          render={({ field }) => (
            <MultiSelect
              {...field}
              radius={"xl"}
              label={"Climates"}
              required
              data={climates}
            />
          )}
        />
        <Controller
          name={"population"}
          control={control}
          render={({ field }) => (
            <NumberInput
              radius={"xl"}
              required
              hideControls
              label={"Population"}
              {...field}
            />
          )}
        />
        <Controller
          name={"gravity"}
          control={control}
          render={({ field }) => (
            <NumberInput
              radius={"xl"}
              required
              hideControls
              label={"Gravity"}
              {...field}
            />
          )}
        />
        <Controller
          name={"terrain"}
          control={control}
          render={({ field }) => (
            <MultiSelect
              {...field}
              radius={"xl"}
              label={"Terrains"}
              required
              data={terrains}
            />
          )}
        />
        <Controller
          name={"rotationPeriod"}
          control={control}
          render={({ field }) => (
            <NumberInput
              radius={"xl"}
              required
              hideControls
              label={"Rotation period"}
              {...field}
            />
          )}
        />
        <Controller
          name={"films"}
          control={control}
          render={({ field }) => (
            <MultiSelect
              {...field}
              radius={"xl"}
              label={"Films"}
              required
              data={allFilms}
            />
          )}
        />
      </Flex>
      <Flex justify={"end"} gap={"md"} mt={"xl"}>
        <Button color={"gray"} onClick={() => closeAllModals()}>
          Cancel
        </Button>
        <Button color={"cyan"} type={"submit"}>
          Register
        </Button>
      </Flex>
    </form>
  );
};
