#!/usr/bin/env bash
# Build and (re)deploy the app via docker compose: builds the image, pushes
# the Prisma schema to MongoDB (no migrations — Mongo connector doesn't
# support `prisma migrate`), then starts/recreates the app container.
set -euo pipefail
cd "$(dirname "$0")/.."

if [ ! -f .env ]; then
  echo "Missing .env — copy .env.example to .env and fill in the values first." >&2
  exit 1
fi

echo "==> Building image"
docker compose build app

echo "==> Starting database"
docker compose up -d mongo

echo "==> Pushing Prisma schema"
docker compose run --rm app npx prisma db push

echo "==> Starting app"
docker compose up -d app

echo "==> Done. Logs: docker compose logs -f app"
