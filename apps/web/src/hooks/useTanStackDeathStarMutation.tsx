import { useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { HttpClient } from "../httpClient";
import { apiBuilder } from "../utils/apiBuilder";
import { ToggleDeathStarDto } from "@redux-killer/dtos/planet.dto";

export const useTanStackDeathStarMutation = () => {
  const isDeathStarActivated = useRef(false);

  const { mutate: onClickDeathStar } = useMutation(() =>
    HttpClient.post<ToggleDeathStarDto>(apiBuilder.deathStar(), {
      body: JSON.stringify({ enabled: !isDeathStarActivated.current }),
    }).then(({ enabled }) => {
      isDeathStarActivated.current = enabled;
    })
  );

  return { onClickDeathStar };
};
