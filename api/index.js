'use strict';

/** 
   * GET /
   * 
   * @method helloWorld
   * @summary 顯示服務架設成功訊息
   */
exports.helloWorld = function(req, res, next) {
    var workflow = new req.app.utility.workflow(req, res);

    workflow.on('listPost', function() {       
        
      workflow.outcome.data = 'Hello World';
      
      return workflow.emit('response');      
    });

    return workflow.emit('listPost');
};








