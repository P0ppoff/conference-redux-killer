import { MultiSelectProps, NativeSelectProps } from "@mantine/core";

export const allFilms: NativeSelectProps["data"] | MultiSelectProps["data"] = [
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
