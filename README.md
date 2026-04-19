# ethanwang.dev

## Structure

- `dist/` — static site files deployed on push
- `public/` — source assets (headshot, resume PDF) copied into `dist/` at deploy time

## Deployment

Pushing to the `work` branch automatically deploys via GitHub Actions to:
- **GitHub Pages** (edw013.github.io) — via `peaceiris/actions-gh-pages` to `master`
- **S3** (ethanwang.dev) — via `aws s3 sync`, with optional CloudFront invalidation

### Required GitHub Actions secrets

| Secret | Description |
|--------|-------------|
| `AWS_ACCESS_KEY_ID` | AWS IAM access key |
| `AWS_SECRET_ACCESS_KEY` | AWS IAM secret key |
| `CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution ID (optional) |
