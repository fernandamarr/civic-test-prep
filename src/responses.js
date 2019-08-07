/* eslint-ignore max-len */

'use strict';

module.exports.gamePrelude = () => 
  'This is a quiz game to prepare you for the U.S. Civics Test. Do you want to play?'

module.exports.keepGoing = () =>
  'Would you like to keep going?';

module.exports.goodbye = () =>
  'Ok, see you soon.';

module.exports.yesOrNo = () =>
  'So is that a yes or a no...?';

module.exports.ask = function(sayWhat, continuation) {
  // updates
  this.attributes.previousState = this.handler.state;
  this.attributes.previousResponse = continuation || sayWhat;

  // response
  this.emit(':ask', sayWhat);
};

module.exports.tell = function(tellWhat) {
  this.emit(':tell', tellWhat);
};