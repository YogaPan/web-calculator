# Web Calculator

![workflow](https://github.com/YogaPan/web-calculator/actions/workflows/main.yml/badge.svg) [![Netlify Status](https://api.netlify.com/api/v1/badges/131d9399-eb17-41a5-9e1d-72a6cfd5cb53/deploy-status)](https://app.netlify.com/sites/galtz-web-calculator/deploys)

利用網頁技術實作 iOS 風格的計算機，支援鍵盤輸入。

![screenshot](./docs/images/screenshot.png)

## 使用技術

1. [React](https://reactjs.org/)：網頁框架，方便使用重複的 component、hooks 進行開發。
2. [Redux](https://redux.js.org/)：用來狀態管理，並且將核心計算邏輯放在 reducer 方便往後進行 unit test。
3. [Jest](https://jestjs.io/)：針對 reducer 進後核心邏輯的單元測試。
4. [Workbox](https://developers.google.com/web/tools/workbox)：提供多種 cache strategies 提升效能，並讓 web app 可以 offline 使用。
5. [Big.js](https://github.com/MikeMcl/big.js/)：算錢用浮點，持早被人扁。這個套件協助我們用 javascript 所沒有的 decimal 來處理小數點、大數字運算。

## 開發指南

### 指令

1. `npm install`：安裝 dependencies。
2. `npm start`：在 http://localhost:3000 使用 hot reload 開發。
3. `npm format`：使用 [Prettier](https://prettier.io/) 確保程式碼風格符合規範。
4. `npm run lint`：使用 [ESLint](https://eslint.org/) 確保程式碼風格符合規範。
5. `npm run build`：建置 production 專案。
6. `npm run serve`：透過 http://localhost:7000 檢驗 production build 結果。

### 流程

1. 執行 `npm run install` 安裝 dependencies。
2. 開啟 branch 進行開發，branch 名稱使用 `build|ci|docs|feat|fix|perf|refactor|test` 開頭並加上斜線 `/`，例如：`feat/add-keyboard-shortcut`。
3. 修改程式並 commit，commit message 遵守 [Angular Convention](https://github.com/angular/angular/blob/master/CONTRIBUTING.md)，經修改的程式碼會透過 [lint-staged](https://github.com/okonet/lint-staged) + [husky](https://github.com/typicode/husky) 進行 lint、測試。
4. Push 至 Github，手動發起 pull request。
5. 自動觸發 Github Actions 的 test job，運行腳本確認程式碼品質、[Deploy Previews](https://docs.netlify.com/site-deploys/deploy-previews/) 正常後，手動 merge 進 master branch。
6. 自動觸發 [Netlify build & deploy](https://docs.netlify.com/configure-builds/get-started/) 部署至 https://galtz-web-calculator.netlify.app。

### Depfu

[Depfu](https://depfu.com/) 會在 npm packages 有新版本時發出 PR 且列出 changelog，方便我們進行例行性套件升級。

### 透過 Docker 使用

建置 Docker image：

```shell
./scripts/build.sh
```

運行 Docker container，接著透過 http://localhost:8080 看到 web calculator。

```shell
./scripts/up.sh
```
