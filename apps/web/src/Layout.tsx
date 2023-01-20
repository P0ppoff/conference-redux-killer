import { FC } from "react";
import {
  AppShell,
  Avatar,
  Container,
  Flex,
  Header,
  Navbar,
  NavLink,
  Text,
  Title,
} from "@mantine/core";
import { Link, Outlet, useLocation } from "react-router-dom";
import { IconBrandRedux, IconPlanet } from "@tabler/icons";

export const Layout: FC = () => {
  const { pathname } = useLocation();

  const isPlanetsTanStackLinkActive = pathname === "/planets";
  const isPlanetsReduxLinkActive = pathname === "/planets-redux";

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
              to={"/planets"}
              label="Planets"
              icon={<IconPlanet size={16} stroke={1.5} />}
              active={isPlanetsTanStackLinkActive}
            />
            <NavLink
              component={Link}
              to={"/planets-redux"}
              label="Planets Redux"
              icon={<IconBrandRedux size={16} stroke={1.5} />}
              active={isPlanetsReduxLinkActive}
            />
          </Navbar.Section>
          <Navbar.Section>
            <Flex gap={"xl"} align={"center"}>
              <Avatar src="avatar.jpg" alt="it's me" />
              <Text>Crafted with ♥</Text>
            </Flex>
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
