#!/bin/bash

# Script para controlar cuándo Vercel debe hacer deploy
# Coloca este archivo en la raíz de tu proyecto

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"
echo "VERCEL_GIT_COMMIT_MESSAGE: $VERCEL_GIT_COMMIT_MESSAGE"

# Deploy en main solo si viene de un PR de release
if [[ "$VERCEL_GIT_COMMIT_REF" == "main" ]]; then
  # Verifica si el último commit menciona un merge de release
  if [[ "$VERCEL_GIT_COMMIT_MESSAGE" =~ "Merge pull request".+"release" ]] || \
     [[ "$VERCEL_GIT_COMMIT_MESSAGE" =~ "release" ]]; then
    echo "✅ Deploying to Production (main)"
    exit 1  # Proceder con el build
  else
    echo "🚫 Skipping deployment - Not from release branch"
    exit 0  # Cancelar build
  fi
fi

# Deploy en release solo si viene de un PR de develop
if [[ "$VERCEL_GIT_COMMIT_REF" == "release" ]]; then
  if [[ "$VERCEL_GIT_COMMIT_MESSAGE" =~ "Merge pull request".+"develop" ]] || \
     [[ "$VERCEL_GIT_COMMIT_MESSAGE" =~ "develop" ]]; then
    echo "✅ Deploying to Test (release)"
    exit 1
  else
    echo "🚫 Skipping deployment - Not from develop branch"
    exit 0
  fi
fi

# Deploy en develop siempre que haya un push o PR
if [[ "$VERCEL_GIT_COMMIT_REF" == "develop" ]]; then
  echo "✅ Deploying to Development (develop)"
  exit 1
fi

# Para cualquier otra rama o preview, permitir deploy
echo "✅ Deploying preview"
exit 1
