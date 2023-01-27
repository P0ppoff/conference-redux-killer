import {
  configureStore,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { NewPlanetDto, PlanetDto } from "@redux-killer/dtos/planet.dto";
import { apiBuilder } from "../utils/apiBuilder";
import { HttpClient } from "../httpClient";

export interface PlanetsState {
  isLoading: boolean;
  list: undefined | PlanetDto[];
  planet: undefined | PlanetDto;
  isPlanetLoading: boolean;
}

const initialState: PlanetsState = {
  list: undefined,
  isLoading: false,
  planet: undefined,
  isPlanetLoading: false,
};

export const fetchPlanets = createAsyncThunk("planets/fetchPlanets", () =>
  HttpClient.get(apiBuilder.allPlanets())
);

export const createNewPlanet = createAsyncThunk(
  "planets/createNewPlanet",
  (data: NewPlanetDto, { dispatch }) => {
    const futurePlanet: PlanetDto = {
      id: "42",
      diameter: "unknown",
      edited: new Date(),
      created: new Date(),
      terrain: data.terrain.join(", "),
      rotation_period: String(data.rotationPeriod),
      url: "42",
      surface_water: "unknown",
      orbital_period: "unknown",
      films: data.films,
      residents: [],
      name: data.name,
      gravity: String(data.gravity),
      population: String(data.population),
      climate: data.climate.join(", "),
    };
    dispatch(addNewPlanet(futurePlanet));
    return HttpClient.post(apiBuilder.newPlanet(), {
      body: JSON.stringify(data),
    });
  }
);

export const fetchPlanet = createAsyncThunk(
  "planets/fetchPlanet",
  (planetId: string) => HttpClient.get(apiBuilder.planetById(planetId))
);

const planetsSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {
    addNewPlanet(state, action: PayloadAction<PlanetDto>) {
      if (state.list != null) {
        state.list = [action.payload, ...state.list];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlanets.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchPlanets.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPlanet.fulfilled, (state, action) => {
      state.planet = action.payload;
      state.isPlanetLoading = false;
    });
    builder.addCase(fetchPlanet.pending, (state, action) => {
      state.isPlanetLoading = true;
    });
    builder.addCase(createNewPlanet.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const store = configureStore({
  reducer: planetsSlice.reducer,
});

const { addNewPlanet } = planetsSlice.actions;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
