import { FC } from "react";
import { PlanetDto } from "@redux-killer/dtos/planet.dto";
import { useQuery } from "@tanstack/react-query";
import { Paper, Tabs, Title } from "@mantine/core";
import {
  generatePath,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { HttpClient } from "../httpClient";
import { IconBrandDisney, IconMacro } from "@tabler/icons";

export const PlanetPage: FC = () => {
  const { planetId } = useParams() as {
    planetId: string;
  };

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { data: planet, isLoading } = useQuery<PlanetDto>(
    ["planets", planetId],
    () => HttpClient.get(`/api/planets/${planetId}`)
  );

  return (
    <section>
      {isLoading && <Paper mt={"md"}>🔄</Paper>}

      {planet != null && (
        <>
          <Title order={2} pb={"md"}>
            {`Planet ${planet.name}`}
          </Title>

          <Tabs
            value={pathname ?? "ecosystem"}
            onTabChange={(routeName) => {
              navigate(
                routeName ??
                  generatePath("/planet/:planetId/ecosystem", { planetId })
              );
            }}
          >
            <Tabs.List>
              <Tabs.Tab
                value={generatePath("/planet/:planetId/ecosystem", {
                  planetId,
                })}
                icon={<IconMacro size={14} />}
              >
                Ecosystem
              </Tabs.Tab>
              <Tabs.Tab
                value={generatePath("/planet/:planetId/appearance", {
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
