# 短網址生成器

使用者透過短網址生成器縮短網址

## 專案畫面

![image](https://github.com/gary86442/URL_shorten/blob/main/public/img/index.png)

![image](https://github.com/gary86442/URL_shorten/blob/main/public/img/shorten.png)

## 功能列表

- 縮短網址

## 專案安裝流程

1. 打開你的 terminal，Clone 此專案至本機電腦

```
git clone https://github.com/gary86442/URL_shorten.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd URL_shorten
```

3. 安裝 npm 套件

> 在 Terminal 輸入

```
 npm install
```

4. 匯入種子檔案

> 在 Terminal 找到 Seeder.js 檔案

```

執行 npm run seed 匯入使用者與餐廳資料
```

> 當 terminal 出現以下字樣，即表示種子資料已新增至資料庫，按下 ctrl + c 結束執行

```
DB connected!
Seeder is done
```

6. 啟動伺服器，執行 app.js 檔案

```
npm run dev
```

7. 當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結

```
listening on http://localhost:3000
DB connected
```

現在，你可開啟任一瀏覽器瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 開始使用。

## 使用套件及工具

1. "express": "^4.18.2"
2. "express-handlebars": "^6.0.7"
3. "mongoose": "^6.9.1"
4. MongoDB

## 開發者

> [Gary](https://github.com/gary86442)
