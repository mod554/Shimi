# SHIMIfich — App React (Offline après build)

## Prérequis
- Node.js installé
- Connexion internet **uniquement pour `npm install`** (une fois le build fait, l'app fonctionne hors-ligne)

## Étapes (Windows / Mac)
1) Ouvrir un terminal dans le dossier `react`
2) Installer : `npm install`
3) Lancer en dev : `npm run dev` (optionnel)
4) Builder offline : `npm run build`
5) Ouvrir le dossier `react/dist` et double-cliquer sur `index.html` (fonctionne hors-ligne)

Astuce: pour un "mode application" plus tard, on pourra empaqueter `dist` avec Electron.
