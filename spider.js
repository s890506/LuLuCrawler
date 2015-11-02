'use strict';

/** 
   * @summary 爬蟲主程式。網頁擷取方式使用 jQuery
   */
exports = module.exports = function(app, crawler, request, cheerio) {
	var cra = crawler.crawl(app.config.getThisUrl);

  	cra.interval = 10;

	// 開始爬取網址
  	cra.on("fetchcomplete",function(queueItem){
    console.log("Completed fetching resource:", queueItem.url);

	// 開始處理爬到的網頁
    request({
    url: queueItem.url,
    method: "GET"
	}, function(e,r,b) {
	    if(e || !b) { return; }
	    var $ = cheerio.load(b);
	    var result = [];
	    var title = $(".article-title").text().trim(); //擷取某網頁標題
	    var content = $(".article-content").text().trim(); //擷取某網頁內容
	    
	    if(title!='' && title!=null) {
			console.log('GET: ' + title);

			var fieldsToSet = {
			    name: title,
			    content: content
			};

			//存入 MongoDB
			new app.db.models.Post(fieldsToSet).save(function(err) {
			  if (err) return console.log('exception: '+err);
			});
	    } else
		    console.log('No specified target.');
	    });
  });
};