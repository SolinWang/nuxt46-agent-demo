# Agent 協作規則（Nuxt 4.6+ 專案）

> Requires: Nuxt 4.6.x / Nuxt CLI 4.x / Node.js ^22.22.3 || ^24.15.0 || >=26.0.0
> 本檔給 Claude Code / Codex 等 coding agent 讀取。Claude Code 可在 CLAUDE.md 以 `@AGENTS.md` 引用。

## 查文件
- 一律用 `npx nuxt docs "<關鍵字>" --no-open` 查詢，結果以本專案安裝的 Nuxt 版本為準。
- 不要依賴記憶中的 Nuxt 2 / Nuxt 3 寫法；兩者已 EOL。

## Dev server
- 開始前先執行 `npx nuxt curl / -I`：若回 200，代表已有 dev server，直接沿用，不要再開。
- 需要自己啟動時用 `npx nuxt dev --no-tui`，不要加 `--port`（指定不同 port 會跳過接手機制）。
- 若提示「started interactively」：那是工程師在終端機開的 server，**不要**加 `--takeover` 關掉它，改用既有 URL。
- 禁止設定 `NUXT_IGNORE_LOCK=1`（官方標示 unsupported，兩個 server 會同時寫入 `.nuxt/`）。

## 驗證修改
- 改完頁面或 API 後，用 `npx nuxt curl <path> -i` 確認 HTTP 狀態與內容，例如：
  - `npx nuxt curl /api/products?q=京都`
  - `npx nuxt curl /broken -i`（預期 200）
- Nitro task 用 `npx nuxt task list` / `npx nuxt task run <name> --payload.key=value`。
- 提交前執行 `npx nuxt typecheck`。注意：typecheck **不會**抓到 SSR 階段存取 `window` 的問題，仍需用 `nuxt curl` 驗證 SSR 輸出。

## 修 bug 的輸入
- 工程師貼上的錯誤若以 `Help diagnose this error.` 開頭，是 Nuxt 錯誤畫面「Copy prompt for an agent」產生的內容，已含原始碼位置、component trace、request 與 route 資訊，直接依此定位。
