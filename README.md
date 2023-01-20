# Redux Killer

Comment ne pas refaire la roue ?

## Redux rappels

C’est quoi cette lib ? Pourquoi est-elle si populaire ?

Redux est une librairie pour la gestion de l’état global dans les applications. Il permet de stocker l’état de
l’application dans un seul store centralisé, et de gérer les modifications de cet état en utilisant des **actions** et
des **reducers**.

Les **actions** sont des objets qui décrivent une modification souhaitée de l’état de l’application, comme l’ajout d’un
élément à une liste ou la modification d’une propriété d’un objet. Les **reducers** sont des fonctions qui prennent en
entrée l’état actuel de l’application et une action et retournent un nouvel état mis à jour en fonction de cette action.

Redux aide à gérer les mises à jour de l’état de l’application de manière organisée et prévisible. Il est souvent
utilisé pour les applications de taille moyenne à grande qui nécessitent une gestion efficace de l’état pour garantir la
performance et la fiabilité.

En utilisant **React** seul, l’état de l’application est stocké à différents niveaux de composants, ce qui peut rendre
difficile de suivre les modifications de l’état et d’assurer la synchronisation des données entre les différents
composants. Cela peut également rendre difficile de gérer les effets de bord tels que les requêtes réseau et la
navigation.

## Montrer comment faire un appel et le mettre dans le cache

## Gestion de l’état de loading

## Gestion de l’état d’erreur

## Multiple retry when error

## Save some data

## Partage des données à travers les clés de cache

Avoir une page avec plusieurs onglets qui chargent la même donnée

## Optimistic UI

Pouvoir créer notre planète Terre et la voir directement

## Réutilisation des queries à travers des hooks

