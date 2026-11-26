# 經驗(experience)

> 執行時之累積經驗,留給後續嘗試、執行、判斷.最新在前.

## 2026-11-26 wsemi 1.9.80 列舉函數第 2 參數改為 opt(R-01)

- **既有測試分不出第 1 層與窮舉**:`test/unit-genIndex.test.mjs` 以平放之 `test/schema/tables` 對照 `index.mjs.txt`,第 1 層與窮舉之產出相同,改成窮舉照綠.另立 `unit-genIndexLevel`,於 `fdSrc` 下放 `sub/`、`sub/deeper/` 之檔,斷言產出之 `index.mjs` 不含子層檔名.
- **修前紅形狀**:升 wsemi 1.9.80 後尚未改 src 時,省略第 2 參數之舊寫法不報錯而靜默窮舉,新測試於「nested file must not be listed」紅(`index.mjs` 含 `tNested`).
- **變異驗證**(鏡像根 `tmp/<案名>/mirror/{src,test}`,只複製檔案,裸名匯入向上解析至 repo 根 `node_modules`;腳本於鏡像注入後以 `quiet-run --lock --cwd <鏡像根>` 跑 mocha):對照(原碼)綠;改回舊式數字、省略、`{ levelLimit: 2 }`、`{ levelLimit: null }`、`{}`、`{ levelLimit: 0 }` 共 6 項皆轉紅(數字者因 `invalid opt` 拋錯,其餘因產出含子層檔).
