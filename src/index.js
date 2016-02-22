'use strict';

var paypal = require('paypal-incontext');

var id = 't2';

paypal.checkout.setup('6XF3MPZBZV6HU', {
  locale: 'en_US',
  environment: 'sandbox',
  buttons: [
    {
      container: id,
      color: 'blue',
      size: 'medium',
      click: function(event) {
          event.preventDefault();
          paypal.checkout.startFlow("http://www.xkcd.com");
      }
    }
  ]
});

module.exports = document.getElementById(id);