# node-androidpublisher-api
A simple node.js app to verify In-App purchase token via Google Play Developer api


## Usage
Replace `api.json` with your own json key.

```
npm install
node app.js
```

Navigate to http://localhost:3000/?token={PURCHASE_TOKEN}

Output response:
```
{"state": 0}
```

The purchase state of the order. Possible values are: 0. Purchased 1. Canceled 2. Pending

For more details about the api response see: https://developers.google.com/android-publisher/api-ref/rest/v3/purchases.products#ProductPurchase
