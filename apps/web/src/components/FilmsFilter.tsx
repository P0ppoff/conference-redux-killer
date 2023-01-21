import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { PlanetsFilters } from "../types/filters.types";
import { Button, Flex, NativeSelect } from "@mantine/core";
import { allFilms } from "../data/films";

export const FilmsFilter: FC<{
  onSubmit: (data: PlanetsFilters | null) => void;
}> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm<PlanetsFilters>({
    defaultValues: {
      filmsFilter: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex justify={"space-between"} align={"center"}>
        <Controller
          name={"filmsFilter"}
          control={control}
          render={({ field }) => (
            <NativeSelect
              {...field}
              label={"Filter by film"}
              data={[
                {
                  value: "",
                  label: "Which film is your favorite?",
                  disabled: true,
                },
                ...allFilms,
              ]}
            />
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
