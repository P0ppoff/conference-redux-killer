import { FC } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

export const CreatePlanetForm: FC = () => {
  const {} = useForm();

  const {} = useMutation((planetName: string) =>
    fetch("/planets/new", {
      method: "POST",
      body: JSON.stringify({ planetName })
    })
  );

  return null
};
