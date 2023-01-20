import { FC } from "react";
import "./App.css";
import { PlanetDto } from "@redux-killer/dtos/planet.dto";
import { useQuery } from "@tanstack/react-query";

export const App: FC = () => {
  const { data: planets, isLoading } = useQuery<PlanetDto[]>(["planets"], () =>
    fetch("/api/planets")
      .then((response) => response.json())
  );

  return (
    <main>
      <section>
        <h1>Planets</h1>
        {isLoading && (<div>🔄</div>)}
        <ul>
          {planets?.map((planet) => (
            <li key={planet.url}>{planet.name}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};
