#!/bin/bash
# ══════════════════════════════════════════════════════════════
#  Paddle Vault — GitHub Deploy Script
#  Run this once from your paddlevault folder:
#    chmod +x deploy.sh
#    ./deploy.sh
# ══════════════════════════════════════════════════════════════

GITHUB_USER="brianmarcelo"
REPO_NAME="Pickleball-Paddle-Vault-Test-1"
GITHUB_TOKEN="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"
REMOTE="https://${GITHUB_TOKEN}@github.com/${GITHUB_USER}/${REPO_NAME}.git"

echo "🏓 Paddle Vault — deploying to GitHub..."

# Initialize git if not already done
if [ ! -d ".git" ]; then
  git init
  echo "✓ Git initialized"
fi

# Set remote (replace if exists)
git remote remove origin 2>/dev/null
git remote add origin "$REMOTE"
echo "✓ Remote set to github.com/${GITHUB_USER}/${REPO_NAME}"

# Make sure firebase-config.js is ignored
if ! grep -q "firebase-config.js" .gitignore 2>/dev/null; then
  echo "firebase-config.js" >> .gitignore
fi

# Stage all files (firebase-config.js is excluded by .gitignore)
git add .
echo "✓ Files staged (firebase-config.js excluded)"

# Commit
git commit -m "Paddle Vault update — $(date '+%Y-%m-%d %H:%M')" 2>&1 | grep -v "^$"

# Push to main branch
git branch -M main
git push -u origin main --force 2>&1

echo ""
echo "✅ Done! Your app is at:"
echo "   https://${GITHUB_USER}.github.io/${REPO_NAME}"
echo ""
echo "⚠️  If Pages isn't enabled yet:"
echo "   Go to github.com/${GITHUB_USER}/${REPO_NAME}/settings/pages"
echo "   Set Source → Deploy from branch → main → / (root) → Save"
