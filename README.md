# CD-CD_cours

Application exemple pour le cours **Introduction DevOps & CI/CD**.

## Stack
- Node.js + Express
- Tests : Jest + Supertest
- CI/CD : GitHub Actions → Render

## Lancer en local

```bash
npm install
npm start
# → http://localhost:3000
```

## Lancer les tests

```bash
npm test
```

## Routes

| Route | Description |
|-------|-------------|
| `GET /` | Message de bienvenue |
| `GET /health` | Vérification de santé |
