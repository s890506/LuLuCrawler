'use strict';

exports = module.exports = function(app, crawler, request, cheerio) {
	var cra = crawler.crawl(app.config.getThisUrl);

  	cra.interval = 10;

  	cra.on("fetchcomplete",function(queueItem){
    console.log("Completed fetching resource:", queueItem.url);

    request({
    url: queueItem.url,
    method: "GET"
	}, function(e,r,b) {
	    if(e || !b) { return; }
	    var $ = cheerio.load(b);
	    var result = [];
	    var title = $(".article-title").text().trim();
	    var content = $(".article-content").text().trim();
	    

	    if(title!='' && title!=null) {
			console.log('GET: ' + title);

			var fieldsToSet = {
			    name: title,
			    content: content
			};

			new app.db.models.Post(fieldsToSet).save(function(err) {
			  if (err) return console.log('exception: '+err);
			});
	    } else
		    console.log('No specified target.');
	    });
  });
};