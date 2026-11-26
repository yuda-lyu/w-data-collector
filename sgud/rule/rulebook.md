# 規則帳本(rulebook)

> 藍圖:以規則為單位記程式碼須長成什麼樣.現況(做到哪)見 `sgud/state/state.md`.規則狀態:已做／部分／未做.
> 本帳本自 2026-11-26 建立,先收本輪確立之規則;既有行為之規則於後續輪次補入.

## 索引

| 編號 | 規則 | 狀態 |
|---|---|---|
| R-01 | 呼叫 wsemi 列舉函數(`fsTreeFolder` 等)須以設定物件明寫層數意圖,不用舊式數字或省略第 2 參數 | 已做 |

## R-01 wsemi 列舉函數須以設定物件明寫層數意圖

**規則**
1. wsemi 1.9.80 起,`fsTreeFolder`、`fsTreeFolderWithHash`、`fsGetFilesInFolder`、`fsGetFilesWithHashInFolder`、`fsGetFoldersInFolder`(及各 `*Core`)之第 2 參數為設定物件 `opt = {}`:`opt.levelLimit` 為有效正整數才限層,**未給即窮舉全部層級**(舊版第 2 參數為層數、預設 1 層);第 2 參數給了而非物件(舊寫法之數字)拋 `invalid opt: must be an object`,第 3 個引數有給拋 `invalid arguments: must be fd and opt only`.
2. 本套件呼叫這類函數時,第 2 參數一律為物件且**明寫層數意圖**:要第 1 層者寫 `{ levelLimit: 1 }`;本意窮舉者可省略第 2 參數,但須在呼叫處註明為刻意窮舉.不寫舊式數字,不依賴省略即第 1 層.
3. `genIndex(fdSrc, fdIndex, opt)` 之 `fdSrc` 為各資料表定義 `*.mjs` 檔所在資料夾(各檔平放),只需第 1 層,故為 `{ levelLimit: 1 }`;不得改為窮舉(子資料夾內之檔會被當成資料表定義而寫入產出之 `index.mjs`).對外簽章、JSDoc 與預設不變.

**why**:省略第 2 參數之舊寫法於新版**靜默**由第 1 層變窮舉(無從以錯誤攔截),`fdSrc` 下若有子資料夾(輔助檔、備份夾),其內之檔會被產入 `index.mjs` 之 `import` 與物件清單.

**站點全集**(盤點指令:`git grep -nE "\b(fsTreeFolder|fsTreeFolderWithHash|fsGetFilesInFolder|fsGetFilesWithHashInFolder|fsGetFoldersInFolder)(Core)?\s*\(" -- . ':!dist' ':!docs'`)
- `src/genIndex.mjs:70` `fsTreeFolder(fdSrc, { levelLimit: 1 })`:1 站,已套(第 1 層)
- 共 1 站;根目錄範例 `gi.mjs`、`gt.mjs`、README、JSDoc 無此類呼叫

**判準**:盤點指令之每一處第 2 參數皆為物件;`test/unit-genIndexLevel.test.mjs` 全綠;植入「改回舊式數字／省略／`levelLimit: 2`／`null`／`0`／空物件」皆須轉紅(變異證據見 `sgud/exp/experience.md`).

**測試對照**:`test/unit-genIndexLevel.test.mjs`——`fdSrc` 下除第 1 層之 `tA.mjs`、`tB.mjs` 外,另放 `sub/tNested.mjs`、`sub/deeper/tDeep.mjs`,斷言產出之 `index.mjs` 含第 1 層兩檔之 `import`、不含任何子層之檔名與資料夾名.既有 `test/unit-genIndex.test.mjs`(以平放之 `test/schema/tables` 對照 `index.mjs.txt`)分不出第 1 層與窮舉,故另立本檔.
