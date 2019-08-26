# HW2: React Redux Calculator

![image](https://github.com/YogaPan/rookie-homework/blob/master/screenshot.png)

## 如何使用

## TODO

1. Write Reducer Test
2. Docker Compose
3. Add Style Guide

Clone 下專案

```sh
$ git clone https://github.com/YogaPan/rookie-homework rookie-homework
$ cd rookie-homework/HW2
```

開發環境 hot reload

```shell
$ npm install && npm start
# or
$ yarn && yarn start
```

### Production

Build 專案

```sh
$ npm run build
# or
$ yarn build
```

Serve 靜態網頁

```sh
$ npx serve -s build -l 5000
```

透過 http://localhost:5000 看到 Production 成品

### 透過 Docker 使用

打包成 Image

```shell
$ docker build -t galtz/web-calculator .
```

把 Container 裡面的 5000 port 對應到 localhost 的 8080 port:

```shell
$ docker run -p 8080:5000 --name calculator -d galtz/web-calculator
```

透過 http://localhost:8080 看到 Production 成品

## 使用到的套件

### Create React App

> You _don’t_ need to install or configure tools like Webpack or Babel.
> They are preconfigured and hidden so that you can focus on the code.
> Just create a project, and you’re good to go.

https://github.com/facebook/create-react-app

### Eslint

使用 Airbnb styleguide，確保程式碼乾淨整齊。

- https://eslint.org/
- https://github.com/airbnb/javascript

### 支援 IE9 以上的瀏覽器

利用 [react-app-polyfill](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md) 支援 ie9 以上的瀏覽器

參考資料:
https://facebook.github.io/create-react-app/docs/supported-browsers-features

### Serve 套件

最簡單的方式在 localhost 建立靜態網頁
https://github.com/zeit/serve

### 計算機邏輯

Big.js
https://github.com/MikeMcl/big.js/

參考專案：
[GitHub - ahfarmer/calculator: Simple calculator built with React](https://github.com/ahfarmer/calculator)

### Roadmap

- 重新整案架構
- 把 pressNumber, pressOperation, calculate 三個邏輯分開
- Add Unit Test & test scripts
- Add Eslint
- Add Docker Tag
- Husky Commit Hooks
- Add format scripts
- Add CI/CD (Jenkins or Travis CI or Circle CI)
- 補上演算法邏輯文件

### Future

- Push to Production ENV
- Collect user Press Button Data
