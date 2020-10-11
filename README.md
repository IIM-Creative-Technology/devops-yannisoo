# DevOps Yannis Battiston

Voici mon rendu pour la semaine de DevOps

Repo-Back: https://github.com/yannisoo/StatsDeFootBack
(je t'ai ajouté en collaborateur normalement)


J'ai utilisé 3 worklflows (1 pour le déploiement en production, 1 pour le déploiement de la pre-prod et un dédié CI sur chaque push).

J'ai empeché les push sur develop et pre-prod ainsi la CI ne s'active que lors des push de nouvelles fonctionalité et ne se réactive pas lors des pull request validé. 

FRONT
1. Prod
  Deploiement du front sur heroku  https://statsdefoot.herokuapp.com/
2. Pre-prod
  Deploiement du front sur heroku https://statsdefootfront.herokuapp.com/
3 OnPullRequest
  Mise en cache des dépendances. Installation des dépendances. Build de l'application. utilisation du linter et de karma pour vérifié la validité du code.

BACK
1. Prod
  Deploiement du back sur heroku https://statsdefootapi.herokuapp.com/
2. Pre-prod
  Deploiement du back sur heroku https://statsdefootback.herokuapp.com/
3 OnPullRequest
  Mise en cache des dépendances. Installation des dépendances. Build de l'application. utilisation du linter et de karma pour vérifié la validité du code.
