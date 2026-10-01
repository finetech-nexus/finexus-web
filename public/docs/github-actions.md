# GitHub Actions

Finexus uses **GitHub Actions** to build, test and publish Nexus Bank services.

## Typical workflows

Each service repo (for example `nexus-bank-api`, `kyc-api`, `produit-api`) usually includes:

| Workflow | Purpose |
| --- | --- |
| `ci.yml` | Lint / unit tests / compile on pull requests |
| `build-push-image.yml` | Build container image and push to the registry |
| `release-image.yml` | Tag and publish a release image |

Helm chart repos (for example `core-api-charts`) use:

| Workflow | Purpose |
| --- | --- |
| `publish-helm-chart.yml` | Package the chart and push it to an OCI registry (GHCR by default) |

## Image pipeline (pattern)

1. Push or open a PR → `ci.yml` validates the change.
2. Merge to `main` → build workflow produces an image.
3. Image is pushed to GHCR (or OCIR when configured).
4. GitOps picks up the new tag / digest via Flux (see [gitops.md](./gitops.md)).

## Required permissions

Workflows that push to GHCR need:

```yaml
permissions:
  contents: read
  packages: write
```

Use `GITHUB_TOKEN` for GHCR. For Oracle OCIR, set repository variables / secrets:

- `OCI_REGISTRY`
- `OCI_CHART_REPO`
- `OCI_REGISTRY_USERNAME`
- `OCI_REGISTRY_PASSWORD`

## Local checks before CI

```bash
# example for a Java / Gradle service
./gradlew test

# example for a Node service
npm ci && npm test
```

Keep CI green: the same commands should pass locally.

## Related

- [Helm](./helm.md) — how charts are published
- [GitOps](./gitops.md) — how clusters consume releases
