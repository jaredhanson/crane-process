function Message(body) {
  // Crane uses slash ('/') separators rather than period ('.')
  this.topic = '/';
  this.body = body;
}

Message.prototype.ack = function() {
  process.exit(0);
}

Message.prototype.nack = function(requeue) {
  if (requeue) { throw new Error('Unable to requeue messages delivered via process'); }
   
  process.exit(1);
}


module.exports = Message;
