import { FC } from "react";
import { Badge, Card, Flex, Image, Text } from "@mantine/core";

export const MyselfProfileRoute: FC = () => (
  <Card shadow={"sm"} p={"lg"} radius={"md"} withBorder>
    <Card.Section>
      <Image src={"/myself.jpg"} fit={"contain"} height={400} alt={"Norway"} />
    </Card.Section>

    <Flex justify={"space-between"} align={"center"} mt={"md"} mb={"xs"}>
      <Text weight={500} color={"red"}>
        Artisan Web chez Zenika
      </Text>
      <Text weight={1000} color={"yellow"}>
        Organisateur des HumanTalk Grenoble
      </Text>
      <Badge color={"green"} variant={"light"}>
        Disponible
      </Badge>
    </Flex>

    <Text size={"sm"} color={"dimmed"}>
      Je suis développeur chez Zenika Grenoble depuis 6 ans. J'ai eu la chance
      de parcourir une dizaine d’entreprises depuis mes débuts en tant que
      consultant, toutes ces expériences technologiques, organisationnelles et
      managériales m’ont formé pour aider mes clients à résoudre leur problème.
    </Text>

    <Text size={"sm"} color={"dimmed"}>
      Je suis aussi formateur front au sein de Zenika sur Typescript, VueJS,
      ReactJS. J'aime transmettre et faire apprendre tout autant que je trouve
      du plaisir dans l'apprentissage de nouvelle pratique.
    </Text>

    <Text size={"sm"} color={"dimmed"}>
      Merci à RAISE PARTNER, client grenoblois dans lequel j'ai pu monté en
      compétence sur TanStackQuery.
    </Text>

    {/*
     * SNOWCAMP ONLY
     * <Button variant={"light"} color={"blue"} fullWidth mt={"md"} radius={"md"}>
     *   Réserver un créneau au stand Zenika pour échanger sur le web et le craft
     * </Button>
     */}
  </Card>
);
