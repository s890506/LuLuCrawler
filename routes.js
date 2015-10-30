'use strict';

exports = module.exports = function(app, passport) {

  app.get('/', require('./api/index').helloWorld);
  
  app.post('/1/contact', require('./api/contact/index').sendMessage);    
  
  app.get('/1/post', require('./api/post').readAll);
  app.post('/1/post', require('./api/post').create);
  app.post('/1/post/query', require('./api/post').createByQuery);
  app.put('/1/post/:name/publish', require('./api/post').activate);      
  app.put('/1/post/:name/unpublish', require('./api/post').inactivate);
  app.delete('/1/post/:id', require('./api/post').delete); 

  //route not found
  app.all('*', require('./api/http/index').http404);
};
