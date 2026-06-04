# GitHub Configuration

## Repository Variable

| Name | Description | Example |
|------|-------------|---------|
| `QUAY_SERVICE` | Namespace du service sur quay-its.epfl.ch | `svc0041` |

À définir dans **Settings > Secrets and variables > Actions > Variables**.

## Secrets

| Name | Description |
|------|-------------|
| `QUAY_ROBOT_USERNAME` | Nom d'utilisateur du robot Quay pour pousser les images |
| `QUAY_ROBOT_PASSWORD` | Mot de passe du robot Quay |

À définir dans **Settings > Secrets and variables > Actions > Secrets**.

## Contexte GitHub (automatique)

| Expression | Description |
|------------|-------------|
| `github.event.repository.name` | Nom du dépôt GitHub, utilisé comme nom de l'image Docker |
