#!/bin/bash

# Script para controlar cuándo Vercel debe hacer deploy
# Este script retorna:
# - exit 1: Proceder con el build
# - exit 0: Cancelar el build

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔍 Vercel Build Decision Script"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Branch: $VERCEL_GIT_COMMIT_REF"
echo "Commit: $VERCEL_GIT_COMMIT_MESSAGE"
echo "Environment: $VERCEL_ENV"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Skip builds para commits específicos
if [[ "$VERCEL_GIT_COMMIT_MESSAGE" =~ \[skip\ ci\] ]] || \
   [[ "$VERCEL_GIT_COMMIT_MESSAGE" =~ \[skip\ vercel\] ]]; then
  echo "🚫 [skip ci] detected - Canceling build"
  exit 0
fi

# Skip builds solo de documentación
if [[ "$VERCEL_GIT_COMMIT_MESSAGE" =~ ^docs:.*only ]] || \
   [[ "$VERCEL_GIT_COMMIT_MESSAGE" =~ ^docs\(.*\):.*only ]]; then
  echo "📝 Documentation only - Canceling build"
  exit 0
fi

# Rama MAIN (Production)
if [[ "$VERCEL_GIT_COMMIT_REF" == "main" ]]; then
  # Solo deploy si viene de un merge desde release
  if [[ "$VERCEL_GIT_COMMIT_MESSAGE" =~ "Merge pull request" ]] && \
     [[ "$VERCEL_GIT_COMMIT_MESSAGE" =~ "release" ]]; then
    echo "✅ Production deployment from release branch"
    exit 1
  fi
  
  # Permitir hotfix directos en main (emergencias)
  if [[ "$VERCEL_GIT_COMMIT_MESSAGE" =~ ^hotfix ]]; then
    echo "🚨 Hotfix detected - Deploying to production"
    exit 1
  fi
  
  echo "🚫 Blocking direct push to main (must come from release)"
  exit 0
fi

# Rama RELEASE (Test/Staging - Preview Deployment)
if [[ "$VERCEL_GIT_COMMIT_REF" == "release" ]]; then
  # Permitir deployments desde develop o directos
  if [[ "$VERCEL_GIT_COMMIT_MESSAGE" =~ "Merge pull request" ]] && \
     [[ "$VERCEL_GIT_COMMIT_MESSAGE" =~ "develop" ]]; then
    echo "✅ Test deployment from develop branch"
    exit 1
  fi
  
  # Permitir commits directos en release (para ajustes pre-producción)
  echo "✅ Test deployment (release branch)"
  exit 1
fi

# Rama DEVELOP (Development Environment)
if [[ "$VERCEL_GIT_COMMIT_REF" == "develop" ]]; then
  echo "✅ Development deployment (develop branch)"
  exit 1
fi

# Feature branches y otros (Preview Deployments)
echo "✅ Preview deployment for feature branch"
exit 1