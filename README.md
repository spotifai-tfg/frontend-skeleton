# Spotifai Frontend

Aquest projecte és la interfície web per al recomanador musical **Spotifai**. Es tracta d'una aplicació creada amb [Create React App](https://create-react-app.dev/) que serveix com a esquelet bàsic per al front-end.

## Requisits previs
- [Node.js](https://nodejs.org/) i npm instal·lats.

## Instal·lació
1. Clona el repositori i accedeix a la carpeta:
   ```bash
   git clone <repo-url>
   cd frontend-skeleton
   ```
2. Instal·la les dependències:
   ```bash
   npm install
   ```

## Scripts principals
- `npm start` &mdash; executa l'aplicació en mode desenvolupament.
- `npm run build` &mdash; genera una versió optimitzada per a producció.
- `npm test` &mdash; llança el conjunt de proves.

## Estructura del projecte
```
src/
  App.js          -- component principal amb les rutes
  Home/           -- pàgina principal amb el formulari i la llista de cançons
  Info/           -- informació bàsica del projecte
```

## Descripció ràpida
La pàgina `Home` permet introduir una descripció musical i obté recomanacions del backend a través d'una crida HTTP. La pàgina `Info` mostra dades generals sobre el projecte i un enllaç al repositori principal.

## Llicència
Aquest projecte es distribueix sota la llicència MIT.