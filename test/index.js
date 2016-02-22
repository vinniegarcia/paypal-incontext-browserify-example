var test = require('tape');
var $ = require('jquery');

test('IC test', function (t) {
  t.plan(2);
  $.getScript('https://www.paypalobjects.com/api/checkout.src.js')
    .done(function (script, textStatus) { 
      console.log(script, textStatus);
      var link = document.createElement('a');
      link.href = 'http://www.google.com/';
      link.id = 't2';
      eval(script);
      var paypal = require('paypal-incontext');
      t.equal(typeof paypal.checkout, 'object', 'paypal.checkout should be an object');
      t.ok(typeof document.querySelector('#t2 .paypal-button'), 'HTMLElement', 'There should be a button in that link');
    })
    .fail(function (err) {
      console.error('ERROR! ERROR! DANGER WILL ROBINSON!');
      t.fail(err);
    });
    
});