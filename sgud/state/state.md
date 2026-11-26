# 狀態(state)

> 現況:當前已開發功能之最新狀態.只記現況,不寫過程(過程見 `sgud/exp/experience.md`).藍圖見 `sgud/rule/rulebook.md`.
> 更新:2026-11-26.本檔自本日建立,僅收本輪涉及之功能;既有功能於後續輪次補入.

## 基本資料
- 入口:`src/WDataCollector.mjs`;`src/genIndex.mjs`(由資料表定義檔產生 `index.mjs`)、`src/build.mjs`、`src/genTestdata.mjs`、`src/getItemsFail.mjs`;發布檔 `dist/`、文件 `docs/` 於發布時自動產製,不手改.
- `package.json` 版本 1.0.82(本輪未改);依賴 `wsemi ^1.9.80`(已裝 1.9.80).
- 測試:`npm test`(mocha,`test/*.test.mjs`),`unit-build`、`unit-genIndex`、`unit-genIndexLevel`(1)、`unit-genTestdata`、`unit-getItemsFail`,共 25 案;最近一次全綠見下〈驗證〉.

## 功能現況
| 功能 | 狀態 | 規則帳本 | 測試 |
|---|---|---|---|
| `genIndex` 僅列舉 `fdSrc` 第 1 層之資料表定義檔:wsemi 1.9.80 起第 2 參數為設定物件,改為 `fsTreeFolder(fdSrc, { levelLimit: 1 })` 保持僅第 1 層(2026-11-26) | 已做 | R-01 | `unit-genIndexLevel`、`unit-genIndex` |
| 其餘功能(`build`、`genTestdata`、`getItemsFail`) | 既有,運作 | (尚未入帳本) | `unit-build`、`unit-genTestdata`、`unit-getItemsFail` |

## 驗證
- 2026-11-26(wsemi 1.9.80):全套 25 passing／0 failing(含 `unit-genIndexLevel` 1 案);植入 6 項變異(舊式數字、省略、`levelLimit: 2`／`null`／`0`、空物件)皆轉紅,對照(原碼)綠;eslint 0 problems;private-guard CLEAN.

## 已知缺口
- 規則帳本僅收 R-01,既有行為之規則尚未補入.
