# GitOps (Flux)

Finexus deploys Nexus Bank with **Flux GitOps**. Desired state lives in git; clusters reconcile automatically.

## Source of truth

Repository: **`k8s-gitops`**

Typical layout:

```text
k8s-gitops/
  apps/
    api/
    kyc/
    core-banking/
    iam/
    ingress-nginx/
    cert-manager/
    flux-system/
    ...
  apps/overlays/   # env-specific patches when used
```

Regional variants exist where needed (for example `api-eu`, `kyc-eu`, `core-banking-eu`).

## How a change reaches production

1. Service CI builds and pushes a new image / chart (see [github-actions.md](./github-actions.md), [helm.md](./helm.md)).
2. A PR updates image tags or HelmRelease values in `k8s-gitops`.
3. Flux reconciles the cluster to match the merged commit.
4. Drift and failed applies are visible in Flux / monitoring.

## Secrets (cluster bootstrap)

Documented in `k8s-gitops/README.md`. Common ones:

- Cloudflare API token for cert-manager DNS-01
- Internal CA keypair for `internal-ca` ClusterIssuer
- GHCR pull credentials for OCI Helm charts

## Validate

```bash
# from k8s-gitops
./scripts/validate.sh
# optional: --reconcile / --prune (see script help)
```

## Principles

- No manual `kubectl apply` for steady-state workloads
- Rollbacks = revert the git commit (or pin a previous image digest)
- Charts are consumed as OCI artifacts; GitOps holds the desired versions

## Related

- [GitHub Actions](./github-actions.md)
- [Helm](./helm.md)
- `k8s-gitops/README.md` in the monorepo
