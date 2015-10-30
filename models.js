'use strict';

exports = module.exports = function(app, mongoose) {
  require('./schema/Post')(app, mongoose);
};

