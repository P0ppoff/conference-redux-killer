import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Input } from "@mantine/core";

export const CreatePlanetForm: FC = () => {
  const { control, handleSubmit } = useForm();

  const {} = useMutation((planetName: string) =>
    fetch("/planets/new", {
      method: "POST",
      body: JSON.stringify({ planetName })
    })
  );

  const onSubmit = () => {

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller control={control} name={"planetName"} render={({ field }) =>
        <Input {...field} />
      } />
    </form>
  );
};
