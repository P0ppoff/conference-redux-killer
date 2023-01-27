import { FC } from "react";
import { Card, Flex, Image, Text } from "@mantine/core";

export const OpenFeedBackZenikaRoute: FC = () => (
  <>
    <Flex gap={"md"} justify={"space-around"}>
      <Card shadow={"sm"} p={"lg"} radius={"md"} withBorder>
        <Card.Section>
          <Image
            src={"/ReduxKiller.png"}
            fit={"contain"}
            height={400}
            alt={"Norway"}
          />
        </Card.Section>

        <Flex justify={"center"} align={"center"} mt={"md"} mb={"xs"}>
          <Text weight={500} color={"yellow"}>
            Lien OpenFeedBack
          </Text>
        </Flex>
      </Card>
      <Card shadow={"sm"} p={"lg"} radius={"md"} withBorder>
        <Card.Section>
          <Image
            src={"/PriseRDV.png"}
            fit={"contain"}
            height={400}
            alt={"Norway"}
          />
        </Card.Section>

        <Flex justify={"center"} align={"center"} mt={"md"} mb={"xs"}>
          <Text weight={500} color={"red"}>
            RDV au stand Zenika pour continuer à discuter
          </Text>
        </Flex>
      </Card>
    </Flex>
    <Flex mt={"xl"} ml={"xl"} justify={"center"} align={"center"}>
      <Image src={"/snowcamp-sponsor.png"} width={"95%"} />
    </Flex>
  </>
);
