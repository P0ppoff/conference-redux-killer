export const PathParams = {
  PLANET_ID: ":planetId",
} as const;

export const UnreachablePaths = {
  TAN_STACK_PLANET: `/planets/${PathParams.PLANET_ID}`,
  REDUX_PLANET: `/redux-planets/${PathParams.PLANET_ID}`,
} as const;

export const Paths = {
  MYSELF_PROFILE: "/myself",
  TAN_STACK_PLANETS: "/planets",
  TAN_STACK_PLANET_ECOSYSTEM: `${UnreachablePaths.TAN_STACK_PLANET}/ecosystem`,
  TAN_STACK_PLANET_APPEARANCE: `${UnreachablePaths.TAN_STACK_PLANET}/appearance`,
  REDUX_PLANETS: "/redux-planets",
  REDUX_PLANET_ECOSYSTEM: `${UnreachablePaths.REDUX_PLANET}/ecosystem`,
  REDUX_PLANET_APPEARANCE: `${UnreachablePaths.REDUX_PLANET}/appearance`,
} as const;
