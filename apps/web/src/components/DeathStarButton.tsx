import { FC } from "react";
import { ActionIcon, Affix, Image } from "@mantine/core";

export const DeathStarButton: FC<{ onClick: () => void }> = ({ onClick }) => (
  <Affix position={{ bottom: 100, right: 50 }}>
    <ActionIcon onClick={onClick}>
      <Image src={"/death-star.png"} height={100} width={100} />
    </ActionIcon>
  </Affix>
);
