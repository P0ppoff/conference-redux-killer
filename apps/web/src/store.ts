import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { PlanetDto } from "@redux-killer/dtos/planet.dto";

export type PlanetsState = {
  isLoading: boolean;
  list: null | PlanetDto[];
};

export const fetchPlanets = createAsyncThunk("planets/fetchPlanets", () =>
  fetch("/api/planets").then((response) => response.json())
);

const planetsSlice = createSlice({
  name: "planets",
  initialState: {
    list: [],
    isLoading: false,
  } as PlanetsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPlanets.fulfilled, (state, action) => {
      // Add user to the state array
      state.list = action.payload;
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
