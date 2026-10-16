#!/usr/bin/env bash
# Nuxt 4.6 × AI Agent 示範腳本：依序示範 nuxt docs / nuxt curl / nuxt task / dev lock
# 前置：已在另一個終端機執行 `pnpm dev`
set -euo pipefail

step() { printf '\n\033[1;32m▶ %s\033[0m\n' "$1"; }

step "1. 以專案安裝的 Nuxt 版本查文件"
npx nuxt docs "useAsyncData" --no-open

step "2. 對執行中的 dev server 發 request（自動讀取 .nuxt/nuxt.lock 找到 URL）"
npx nuxt curl "/api/products?q=京都"

step "3. 確認故意出錯的頁面回 500（瀏覽器開 /broken 可看到新錯誤畫面）"
npx nuxt curl /broken -I || true

step "4. 執行 Nitro task"
npx nuxt task list
npx nuxt task run cache:warm --payload.locale=ja

step "5. 模擬 agent 再開一個 dev server：會被拒絕，不會搶走你的 server"
npx nuxt dev --no-tui || true
