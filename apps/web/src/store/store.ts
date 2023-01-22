import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { PlanetDto } from "@redux-killer/dtos/planet.dto";

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

export const fetchPlanets = createAsyncThunk("planets/fetchPlanets", () => {
  return fetch("/api/planets")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw response.json();
      }
    })
    .catch((e) => {
      // TODO: store error
    });
});

export const fetchPlanet = createAsyncThunk(
  "planets/fetchPlanet",
  (planetId: string) => {
    return fetch(`/api/planets/${planetId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response.json();
        }
      })
      .catch((e) => {
        // TODO: store error
      });
  }
);

const planetsSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {},
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
  },
});

export const store = configureStore({
  reducer: planetsSlice.reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
