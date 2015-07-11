var EventEmitter = require('events').EventEmitter
  , util = require('util')
  , Message = require('./message');

/**
 * `Broker` constructor.
 *
 * @api public
 */
function Broker() {
  EventEmitter.call(this);
}

/**
 * Inherit from `EventEmitter`.
 */
util.inherits(Broker, EventEmitter);

Broker.prototype.receive = function(body) {
  body = body || {};
  
  var m = new Message(body);
  m.broker = this;
    
  this.emit('message', m);
}


module.exports = Broker;
