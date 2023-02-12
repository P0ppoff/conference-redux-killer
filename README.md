# Redux Killer

Ce projet est la base de
la [conférence donnée au Snowcamp 2023](https://snowcamp2023.sched.com/event/1EOvs/a-la-decouverte-de-tanstack-query-le-tueur-de-redux).
Les feedbacks peuvent se trouver [ici](https://openfeedback.io/snowcamp23/2023-01-26/5c8a920139adb5ef1d1644ac9f60b53d),
ils ont été plutôt positifs.

## Technologies

C'est un simple monorepo pour montrer l'apport de [TanStack Query](https://tanstack.com/query/v4)
vs. [Redux](https://redux-toolkit.js.org/) en [React](https://beta.reactjs.org/). Il y a un backend
en [NestJS](https://nestjs.com/) pour temporiser nos appels et stocker de la donnée en mémoire.

## Plan

```markdown
# Redux rappels

# Montrer comment faire un appel et le mettre dans le cache

# Gestion de l’état de loading

# Gestion de l’état d’erreur

# Re-essais sur erreur

# Partage des données à travers les clés de cache

Avoir une page avec plusieurs onglets qui chargent la même donnée

# Optimistic UI

Pouvoir créer notre planète Terre et la voir directement sans attendre le backend

# Réutilisation des queries à travers des hooks
```

## Améliorations possibles

* Faire un bouton pour activer l'étoile de la mort, qui tue des planètes tous les 30 secondes.
    * Permet de montrer comment rafraichir la donnée à intervals réguliers.

## Remerciements

Merci beaucoup à https://swapi.dev/ pour avoir fourni une API et des données gratuitement.

