import { FC } from "react";
import { Blockquote, Box, Image, Mark, Text, Title } from "@mantine/core";

export const WhyReduxRoute: FC = () => (
  <>
    <Title order={2}>Comment ne pas refaire la roue ?</Title>
    <Blockquote color="yellow">
      Pourquoi une telle librairie ? Pourquoi est-elle si populaire ?
    </Blockquote>
    <Text size={"sm"}>
      Redux est une librairie pour la gestion de l’état global dans les
      applications. Il permet de stocker l’état de l’application dans un seul
      store centralisé, et de gérer les modifications de cet état en utilisant
      des <Mark color={"yellow"}>actions</Mark> et des{" "}
      <Mark color={"yellow"}>reducers</Mark>.
    </Text>
    <Image src={"./reduxdataflowdiagram.gif"} py={"md"} />
    <Text>
      Les <Mark color={"yellow"}>actions</Mark> sont des objets qui décrivent
      une modification souhaitée de l’état de l’application, comme l’ajout d’un
      élément à une liste ou la modification d’une propriété d’un objet. Les{" "}
      <Mark color={"yellow"}>reducers</Mark> sont des fonctions qui prennent en
      entrée l’état actuel de l’application et une action et retournent un
      nouvel état mis à jour en fonction de cette action.
    </Text>
    <Text>
      Redux aide à gérer les mises à jour de l’état de l’application de manière
      organisée et prévisible. Il est souvent utilisé pour les applications de
      taille moyenne à grande qui nécessitent une gestion efficace de l’état
      pour garantir la performance et la fiabilité.
    </Text>
    <Text>
      En utilisant <Mark color={"yellow"}>React</Mark> seul, l’état de
      l’application est stocké à différents niveaux de composants, ce qui peut
      rendre difficile de suivre les modifications de l’état et d’assurer la
      synchronisation des données entre les différents composants. Cela peut
      également rendre difficile de gérer les effets de bord tels que les
      requêtes réseau et la navigation.
    </Text>
    <Blockquote color="yellow" cite={"Jules HABLOT"}>
      Dans 85% des cas d’utilisations, Redux permet de créer un cache de votre
      API.
    </Blockquote>
    <Box h={300} />
  </>
);
