# Finexus web

Site de présentation de **Finexus**, la fintech qui conçoit et développe **Nexus Bank**.

## Lancer

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Docker

```bash
docker build -t nexusbank/finexus-web:local .
docker run --rm -p 8080:8080 nexusbank/finexus-web:local
# http://127.0.0.1:8080/health
```

## Helm

Chart: `helm/finexus-web`

```bash
helm lint helm/finexus-web
helm template finexus-web helm/finexus-web
```

CI (GitHub Actions on `develop` / `main`):

1. Build Vite site
2. Build & push Docker image → `nexusbank/finexus-web`
3. Package & push Helm chart → `oci://ghcr.io/finetech-nexus/finexus-web`

## GitOps

Deployed via Flux (`k8s-gitops` → `apps/finexus-web`) on **https://finexus.nbank.fr**.

## Contenu

- Multilingue FR / EN / AR
- Conformité KYC / AML / RGPD
- Hero collage écrans Nexus Bank
- Liens App Store / Google Play

## Liens stores

```bash
# .env
VITE_APP_STORE_URL=https://apps.apple.com/app/idXXXXXXXX
VITE_PLAY_STORE_URL=https://play.google.com/store/apps/details?id=...
```
