@echo off
:: ══════════════════════════════════════════════════════════════
::  Paddle Vault — GitHub Deploy Script (Windows)
::  Double-click this file, or run it from Command Prompt
:: ══════════════════════════════════════════════════════════════

set GITHUB_USER=brianmarcelo
set REPO_NAME=Pickleball-Paddle-Vault-Test-1
set GITHUB_TOKEN=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
set REMOTE=https://%GITHUB_TOKEN%@github.com/%GITHUB_USER%/%REPO_NAME%.git

echo 🏓 Paddle Vault — deploying to GitHub...

:: Initialize git if not already done
if not exist ".git" (
  git init
  echo ✓ Git initialized
)

:: Set remote
git remote remove origin 2>nul
git remote add origin %REMOTE%
echo ✓ Remote configured

:: Stage all files (firebase-config.js excluded by .gitignore)
git add .
echo ✓ Files staged

:: Commit with timestamp
git commit -m "Paddle Vault update — %DATE% %TIME%"

:: Push
git branch -M main
git push -u origin main --force

echo.
echo ✅ Done! Your app will be live at:
echo    https://%GITHUB_USER%.github.io/%REPO_NAME%
echo.
echo ⚠️  If Pages is not enabled yet:
echo    Go to: github.com/%GITHUB_USER%/%REPO_NAME%/settings/pages
echo    Set Source to: Deploy from branch → main → / (root) → Save
echo.
pause
