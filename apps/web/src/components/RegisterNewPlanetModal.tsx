import { FC, useId } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
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
import { HttpClient } from "../httpClient";
import { NewPlanetDto, PlanetDto } from "@redux-killer/dtos/planet.dto";

export const RegisterNewPlanetModal: FC = () => {
  const queryClient = useQueryClient();

  const id = useId();

  const { control, handleSubmit } = useForm<NewPlanetDto>();

  const { mutateAsync } = useMutation(
    (data: NewPlanetDto) =>
      HttpClient.post("/api/planets/new", {
        body: JSON.stringify(data),
      }),
    {
      onMutate: async (planet) => {
        await queryClient.cancelQueries(["planets"]);
        queryClient.setQueryData(["planets"], (oldPlanets?: PlanetDto[]) => {
          if (oldPlanets == null) {
            return oldPlanets;
          }
          const futurePlanet: PlanetDto = {
            id,
            diameter: "unknown",
            edited: new Date(),
            created: new Date(),
            terrain: planet.terrain.join(", "),
            rotation_period: String(planet.rotationPeriod),
            url: id,
            surface_water: "unknown",
            orbital_period: "unknown",
            films: planet.films,
            residents: [],
            name: planet.name,
            gravity: String(planet.gravity),
            population: String(planet.population),
            climate: planet.climate.join(", "),
          };
          return [futurePlanet, ...oldPlanets];
        });
      },
      onSuccess: (allPlanets: PlanetDto[]) => {
        queryClient.setQueryData(["planets"], () => allPlanets);
      },
    }
  );

  const onSubmit = async (data: NewPlanetDto) => {
    await mutateAsync(data);
    closeAllModals();
  };

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
