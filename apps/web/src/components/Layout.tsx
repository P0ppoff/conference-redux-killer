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
import { IconAffiliate, IconBrandRedux, IconWorld } from "@tabler/icons";
import { Paths } from "../routes/paths";

export const Layout: FC = () => {
  const { pathname } = useLocation();

  const isPlanetsTanStackLinkActive = pathname.includes(
    Paths.TAN_STACK_PLANETS
  );
  const isPlanetsReduxLinkActive = pathname.includes(Paths.REDUX_PLANETS);
  const isMyselfLinkActive = pathname.includes(Paths.MYSELF_PROFILE);
  const isWhyReduxLinkActive = pathname.includes(Paths.WHY_REDUX);
  const isOpenfeedbackZenikaLinkActive = pathname.includes(
    Paths.OPENFEEDBACK_ZENIKA
  );

  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs">
          <Title order={1}>Redux Killer 🔪</Title>
        </Header>
      }
      navbar={
        <Navbar width={{ base: 300 }} p="xs">
          <Navbar.Section grow mt="md">
            <NavLink
              component={Link}
              to={Paths.WHY_REDUX}
              label="Why REDUX?"
              icon={<IconBrandRedux size={16} stroke={1.5} />}
              color={"yellow"}
              active={isWhyReduxLinkActive}
            />
            <NavLink
              component={Link}
              to={Paths.TAN_STACK_PLANETS}
              label="TanStack Planets (solution)"
              icon={<IconWorld size={16} stroke={1.5} />}
              color={"yellow"}
              active={isPlanetsTanStackLinkActive}
            />
            <NavLink
              component={Link}
              to={Paths.REDUX_PLANETS}
              label="Planets Redux"
              icon={<IconAffiliate size={16} stroke={1.5} />}
              color={"yellow"}
              active={isPlanetsReduxLinkActive}
            />
          </Navbar.Section>
          <Navbar.Section>
            {/*
             * SNOWCAMP ONLY
             * <NavLink
             *   component={Link}
             *   to={Paths.OPENFEEDBACK_ZENIKA}
             *   active={isOpenfeedbackZenikaLinkActive}
             *   icon={<IconQrcode size={16} stroke={1.5} />}
             *   color={"yellow"}
             *   label={"OpenFeedBack & Zenika"}
             * />
             */}

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
