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

L’image embarque l’APK Android Nexus Bank. Téléchargement public : `/downloads/nexus-bank-0.0.1.apk` (alias `/downloads/nexus-bank.apk`).

```bash
# Optionnel : forcer une nouvelle URL EAS
docker build --build-arg APK_URL=https://expo.dev/artifacts/eas/...apk -t nexusbank/finexus-web:local .
docker run --rm -p 8080:8080 nexusbank/finexus-web:local
# http://127.0.0.1:8080/health
# http://127.0.0.1:8080/downloads/nexus-bank-0.0.1.apk
```

Variable CI optionnelle : `NEXUS_BANK_APK_URL` (sinon l’URL par défaut du Dockerfile).

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

Deployed via Flux (`k8s-gitops` → `apps/finexus-web`) on **https://nbank.fr**.

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
