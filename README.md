# PayPal In-Context Browserify Example
An example of a PayPal In-Context checkout integration using browserify and browserify-shim

## Getting started

1. Install `browserify` and `browserify-shim` into your project:
  ```
  npm install browserify browserify-shim --save-dev
  ```
2. In your `package.json`, add a `browserify` key containing:
  ```json
  "browserify": {
    "transform": [
      "browserify-shim"
    ]
  }
  ```
  This tells browserify to use the browserify-shim.
3. Add a `browserify-shim` key to `package.json` so you can use PayPal In-Context from your bundle:
  ```json
  "browserify-shim": {
    "paypal-incontext": "global:paypal"
  }
  ```
4. In your HTML file, add references to PayPal's `checkout.js` and your bundle.
  ```html
  <script src="https://www.paypalobjects.com/api/checkout.js"></script>
  <script src="path/to/dist/js/bundle.js"></script>
  ```
5. In your code, use the `paypal-incontext` module:
  ```javascript
  var paypal = require('paypal-incontext');
  paypal.checkout.setup('MERCHANT_ID' {
    options: {}
  });
  ```
6. Bundle your code:
  ```
  browserify -d src/ -o dist/js/bundle.js
  ```
7. Take orders and make money! 💰💳💸
