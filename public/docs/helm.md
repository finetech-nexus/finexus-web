# Helm

Finexus packages Nexus Bank services as **Helm charts**, published to an **OCI registry** (GHCR by default).

## Chart locations

| Area | Repo / path (examples) |
| --- | --- |
| Core / umbrella APIs | `core-api-charts` |
| KYC | `kyc-helm-charts` |
| Infra | `infra-helm-charts`, `iam-helm-charts`, `logging-helm-charts` |
| Core banking | `core-banking-helm-charts` |

Charts follow the usual layout: `Chart.yaml`, `values.yaml`, `templates/`.

## Publish (OCI)

On push to `main` (or manual `workflow_dispatch`), `publish-helm-chart.yml` typically:

1. Reads the version from `Chart.yaml`
2. Packages the chart (`helm package`)
3. Pushes to `oci://ghcr.io/<org>/<chart>`

Example pull:

```bash
helm pull oci://ghcr.io/finetech-nexus/core-api-charts --version <version>
```

## Values & environments

- Keep secrets out of git: inject via Kubernetes secrets / sealed secrets / external secret operators.
- Environment overlays live in GitOps (`k8s-gitops/apps/.../overlays/dev`, …), not as one-off `helm upgrade` from laptops.

## Validate locally

```bash
helm lint .
helm template release-name . -f values.yaml > /tmp/manifests.yaml
```

## Related

- [GitHub Actions](./github-actions.md) — chart publish workflow
- [GitOps](./gitops.md) — how Flux installs charts on the cluster
