import { FC } from "react";
import { Affix, Button, Transition } from "@mantine/core";
import { IconArrowUp } from "@tabler/icons";
import { useWindowScroll } from "@mantine/hooks";

export const ScrollToTop: FC = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button
            leftIcon={<IconArrowUp size={16} />}
            style={transitionStyles}
            color={"yellow"}
            onClick={() => scrollTo({ y: 0 })}
          >
            Scroll to top
          </Button>
        )}
      </Transition>
    </Affix>
  );
};
