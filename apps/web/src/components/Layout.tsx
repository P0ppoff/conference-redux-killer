import { FC } from "react";
import {
  AppShell,
  Avatar,
  Container,
  Header,
  Navbar,
  NavLink,
  Title,
} from "@mantine/core";
import { Link, Outlet, useLocation } from "react-router-dom";
import { IconBrandRedux, IconWorld } from "@tabler/icons";
import { Paths } from "../routes/paths";

export const Layout: FC = () => {
  const { pathname } = useLocation();

  const isPlanetsTanStackLinkActive = pathname.includes(
    Paths.TAN_STACK_PLANETS
  );
  const isPlanetsReduxLinkActive = pathname.includes(Paths.REDUX_PLANETS);
  const isMyselfLinkActive = pathname.includes(Paths.MYSELF_PROFILE);

  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs">
          <Title order={1}>Redux Killer</Title>
        </Header>
      }
      navbar={
        <Navbar width={{ base: 300 }} p="xs">
          <Navbar.Section grow mt="md">
            <NavLink
              component={Link}
              to={Paths.TAN_STACK_PLANETS}
              label="Planets"
              icon={<IconWorld size={16} stroke={1.5} />}
              color={"yellow"}
              active={isPlanetsTanStackLinkActive}
            />
            <NavLink
              component={Link}
              to={Paths.REDUX_PLANETS}
              label="Planets Redux"
              icon={<IconBrandRedux size={16} stroke={1.5} />}
              color={"yellow"}
              active={isPlanetsReduxLinkActive}
            />
          </Navbar.Section>
          <Navbar.Section>
            <NavLink
              component={Link}
              to={Paths.MYSELF_PROFILE}
              active={isMyselfLinkActive}
              icon={<Avatar src="avatar.jpg" alt="it's me" />}
              color={"yellow"}
              label={"Crafted with ♥"}
            />
          </Navbar.Section>
        </Navbar>
      }
    >
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
    </AppShell>
  );
};
