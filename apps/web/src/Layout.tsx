import { FC, PropsWithChildren } from "react";
import { AppShell, Avatar, Container, Flex, Header, Navbar, NavLink, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconPlanet } from "@tabler/icons";

export const Layout: FC<PropsWithChildren> = ({ children }) => (
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
            active
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
        {children}
      </main>
    </Container>
  </AppShell>
);
