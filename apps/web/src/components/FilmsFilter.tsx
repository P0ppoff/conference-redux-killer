import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { PlanetsFilters } from "../types/filters.types";
import { Button, Flex, NativeSelect, NativeSelectProps } from "@mantine/core";

export const FilmsFilter: FC<{
  onSubmit: (data: PlanetsFilters | null) => void;
}> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm<PlanetsFilters>({
    defaultValues: {
      filmsFilter: "",
    },
  });

  const allFilms: NativeSelectProps["data"] = [
    {
      value: "",
      label: "Which film is your favorite?",
      disabled: true,
    },
    {
      value: "https://swapi.dev/api/films/4/",
      label: "The Phantom Menace",
    },
    {
      value: "https://swapi.dev/api/films/5/",
      label: "Attack of the Clones",
    },
    {
      value: "https://swapi.dev/api/films/6/",
      label: "Revenge of the Sith",
    },
    {
      value: "https://swapi.dev/api/films/1/",
      label: "A New Hope",
    },
    {
      value: "https://swapi.dev/api/films/2/",
      label: "The Empire Strikes Back",
    },
    {
      value: "https://swapi.dev/api/films/3/",
      label: "Return of the Jedi",
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex justify={"space-between"} align={"center"}>
        <Controller
          name={"filmsFilter"}
          control={control}
          render={({ field }) => (
            <NativeSelect {...field} label={"Filter by film"} data={allFilms} />
          )}
        />
        <Button.Group>
          <Button
            color={"yellow"}
            onClick={() => {
              onSubmit(null);
            }}
          >
            Clear filter
          </Button>
          <Button color={"yellow"} type={"submit"}>
            Apply
          </Button>
        </Button.Group>
      </Flex>
    </form>
  );
};
