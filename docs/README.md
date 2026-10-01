# Delivery documentation

Finexus ships Nexus Bank with a standard delivery stack:

| Topic | Doc |
| --- | --- |
| CI / CD | [GitHub Actions](./github-actions.md) |
| Packaging | [Helm](./helm.md) |
| Cluster sync | [GitOps (Flux)](./gitops.md) |

Repos in the monorepo:

- Application services: `nexus-bank-api`, `kyc-api`, `produit-api`, `card-management-api`, `invest-api`, `subscription-api`, …
- Helm charts: `core-api-charts`, `kyc-helm-charts`, `infra-helm-charts`, …
- GitOps: `k8s-gitops` (Flux)
