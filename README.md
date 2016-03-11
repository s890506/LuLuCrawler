#LuLu Crawler
LuLu Crawler 是結合 [MakeeAPI](https://github.com/makee-workshop/MakeeAPI)、[SimpleCrawler](https://github.com/cgiffard/node-simplecrawler)、[Cheerio](https://github.com/cheeriojs/cheerio) 的爬蟲應用程式，它將會爬取指定網域，並將欲擷取之資料存入資料庫中。


安裝 (Install)
==============

1. 安裝使用套件
```bash
$ cd <directory-to-your-lulucrawler>
$ cp config.example.js config.js
$ npm i
```

2. 設定 config.js
```
exports.getThisUrl = '<URL>';
```

3. 修改爬取內容於 spider.js

4. 請啟動 app.js
```bash
$ node app.js
```

### How to Install Homebrew (Mac)

```bash
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### How to Install Node

```bash
$ brew install nodejs
```

### How to Install MongoDB

```bash
$ brew install mongodb
```

版本資訊
==============
* Node：0.10.38

License
==============

MIT
