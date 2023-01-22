import { FC } from "react";
import { PlanetDto } from "@redux-killer/dtos/planet.dto";
import { Loader, Tabs, Title } from "@mantine/core";
import {
  generatePath,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { IconBrandDisney, IconMacro } from "@tabler/icons";
import { Paths } from "../routes/paths";

export const PlanetPage: FC<{
  planetId: string;
  planet: undefined | PlanetDto;
  isLoading: boolean;
  planetEcosystemPath:
    | typeof Paths.REDUX_PLANET_ECOSYSTEM
    | typeof Paths.TAN_STACK_PLANET_ECOSYSTEM;
  planetAppearancePath:
    | typeof Paths.REDUX_PLANET_APPEARANCE
    | typeof Paths.TAN_STACK_PLANET_APPEARANCE;
}> = ({
  planetId,
  planet,
  isLoading,
  planetEcosystemPath,
  planetAppearancePath,
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <section>
      {isLoading && <Loader color={"cyan"} mt={"md"} />}

      {planet != null && (
        <>
          <Title order={2} pb={"md"}>
            {`Planet ${planet.name}`}
          </Title>

          <Tabs
            value={pathname ?? "ecosystem"}
            color={"yellow"}
            onTabChange={(routeName) => {
              navigate(
                routeName ?? generatePath(planetEcosystemPath, { planetId })
              );
            }}
          >
            <Tabs.List>
              <Tabs.Tab
                value={generatePath(planetEcosystemPath, {
                  planetId,
                })}
                icon={<IconMacro size={14} />}
              >
                Ecosystem
              </Tabs.Tab>
              <Tabs.Tab
                value={generatePath(planetAppearancePath, {
                  planetId,
                })}
                icon={<IconBrandDisney size={14} />}
              >
                Appearance
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
          <Outlet />
        </>
      )}
    </section>
  );
};
