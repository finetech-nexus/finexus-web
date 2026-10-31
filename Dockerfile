# Multi-stage: Vite build → nginx static SPA (+ Nexus Bank APK)
FROM node:20-bookworm-slim AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Prefer a pre-bundled APK under public/downloads; otherwise fetch at build time.
ARG APK_URL=https://expo.dev/artifacts/eas/DVs0mq5UquL262sqk4drwXmKJrTo0CNDLYz4D-riK9M.apk
ARG APK_NAME=nexus-bank-0.0.1.apk
RUN mkdir -p public/downloads \
  && if [ -s "public/downloads/${APK_NAME}" ]; then \
       echo "Using checked-in APK ${APK_NAME}"; \
     elif [ -s public/downloads/nexus-bank.apk ]; then \
       cp public/downloads/nexus-bank.apk "public/downloads/${APK_NAME}"; \
     else \
       apt-get update \
       && apt-get install -y --no-install-recommends curl ca-certificates \
       && curl -fsSL -o "public/downloads/${APK_NAME}" "${APK_URL}" \
       && rm -rf /var/lib/apt/lists/*; \
     fi \
  && cp "public/downloads/${APK_NAME}" public/downloads/nexus-bank.apk \
  && test -s "public/downloads/${APK_NAME}"

RUN npm run build

FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

RUN test -s /usr/share/nginx/html/downloads/nexus-bank-0.0.1.apk \
  && test -s /usr/share/nginx/html/downloads/nexus-bank.apk

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
