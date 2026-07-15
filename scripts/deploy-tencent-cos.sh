#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST_DIR="$ROOT_DIR/dist"

if [[ -z "${TENCENT_COS_BUCKET:-}" ]]; then
  echo "Missing TENCENT_COS_BUCKET, for example: export TENCENT_COS_BUCKET=movie-app-1250000000"
  exit 1
fi

PREFIX="${TENCENT_COS_PREFIX:-}"
PREFIX="${PREFIX#/}"
PREFIX="${PREFIX%/}"

if [[ ! -d "$DIST_DIR" ]]; then
  npm run build
fi

echo "Uploading dist/ to Tencent Cloud COS bucket: $TENCENT_COS_BUCKET"

if command -v coscli >/dev/null 2>&1; then
  TARGET="cos://${TENCENT_COS_BUCKET}"
  if [[ -n "$PREFIX" ]]; then
    TARGET="$TARGET/$PREFIX"
  fi
  coscli cp -r "$DIST_DIR/" "$TARGET/"
elif command -v coscmd >/dev/null 2>&1; then
  TARGET="/"
  if [[ -n "$PREFIX" ]]; then
    TARGET="/$PREFIX/"
  fi
  coscmd upload -rfs --delete "$DIST_DIR/" "$TARGET"
else
  echo "Missing coscli or coscmd. Install and configure a Tencent Cloud COS upload tool, then rerun this script."
  exit 1
fi

if [[ -n "${TENCENT_COS_DOMAIN:-}" ]]; then
  DOMAIN="${TENCENT_COS_DOMAIN%/}"
  if [[ -n "$PREFIX" ]]; then
    echo "Public URL: $DOMAIN/$PREFIX/"
  else
    echo "Public URL: $DOMAIN/"
  fi
elif [[ -n "${TENCENT_COS_REGION:-}" ]]; then
  if [[ -n "$PREFIX" ]]; then
    echo "Candidate public URL: https://${TENCENT_COS_BUCKET}.cos-website.${TENCENT_COS_REGION}.myqcloud.com/$PREFIX/"
  else
    echo "Candidate public URL: https://${TENCENT_COS_BUCKET}.cos-website.${TENCENT_COS_REGION}.myqcloud.com/"
  fi
else
  echo "Upload finished. Set TENCENT_COS_DOMAIN or TENCENT_COS_REGION to print the public URL."
fi
