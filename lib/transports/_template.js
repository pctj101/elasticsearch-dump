var template = function(parent, options){
  this.options = options;
  this.parent = parent;
}

// accept callback
// return (error, arr) where arr is an array of objects
template.prototype.get = function(limit, offset, callback){
  var self      = this;
  var error     = null; 
  var data      = [];

  callback(err, data); 
}

// accept arr, callback where arr is an array of objects
// return (error, writes) 
template.prototype.set = function(data, limit, offset, callback){
  var self = this;
  var error = null;

  callback(error);
}

exports.template = template;