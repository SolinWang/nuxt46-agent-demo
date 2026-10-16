# nuxt46-agent-demo

示範 Nuxt 4.6 / Nuxt CLI v4 為 AI coding agent 新增的開發體驗功能。

> Requires: Nuxt 4.6.x / Nuxt CLI 4.x / Node.js ^22.22.3 || ^24.15.0 || >=26.0.0

## 快速開始

```bash
pnpm install
pnpm dev              # 終端機 A：工程師自己開的 dev server
./scripts/demo.sh     # 終端機 B：依序示範各功能
```

## 目錄

| 路徑 | 用途 |
| --- | --- |
| `app/pages/index.vue` | 商品列表，`useFetch` + loading / empty / error 三態 |
| `app/pages/broken.vue` | **故意保留的 SSR bug**，用來示範錯誤畫面的「Copy prompt for an agent」 |
| `server/api/products.get.ts` | 回傳 `{ code, message, data }` 的 demo API |
| `server/tasks/cache/warm.ts` | Nitro task，示範 `nuxt task run` |
| `shared/types/api.ts` | 前後端共用型別 |
| `AGENTS.md` | 給 agent 讀的協作規則（可複製到正式專案） |
| `scripts/demo.sh` | 15 分鐘示範腳本 |

## 示範 /broken 修復流程

1. 瀏覽器開 `http://localhost:3000/broken`，右下角錯誤卡片點展開。
2. 點「Copy error」旁的下拉 → **Copy prompt for an agent**。
3. 貼給 Claude Code / Codex：「修正這個錯誤，並用 nuxt curl 驗證 /broken 回 200」。
4. 預期修法：把 `window.localStorage` 移到 `onMounted` 內。
5. Demo 結束後用 `git checkout app/pages/broken.vue` 還原 bug。
