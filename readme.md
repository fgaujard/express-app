# 🚀 Quête Express 3 [Semaine 12]

**_par Flavien GAUJARD_**

## I - Initialiser l'application express avec :

    npm install

## II - Si vous n'avez pas la Database

_Si vous avez déjà la database et qu'elle contient une table "**movies**" et une table "**users**" vous pouvez éventuellement passez ces étapes. 😉_

    CREATE DATABASE express_quests;
    USE express_quests;

### Puis :

    npx nodemon database.js

## III - Création du fichier .env

```js
DB_HOST = localhost;
DB_PORT = 3306;
DB_USER = username;
DB_PASSWORD = password;
DB_NAME = express_quests;
```

## IV - Lancer le serveur

    npm run dev

## V - Lancer les tests

    npm run test
