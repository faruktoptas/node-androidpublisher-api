const express = require('express')
const {google} = require('googleapis')
const key = require('./api.json')
const app = express()
const port = 3000


let client = new google.auth.JWT(
  key.client_email,
  undefined,
  key.private_key,
  ['https://www.googleapis.com/auth/androidpublisher']
)
const androidApi = google.androidpublisher({
  version: 'v3',
  auth: client
})

async function getPurchase(token) {
    let authorize = await client.authorize();
    console.log('authorize :', authorize);
    
    const verify = await androidApi.purchases.products.get({
      packageName: "{ANDROID_APP_PACKAGE_NAME}",
      productId: "{IN_APP_PRODUCT_ID}",
      token:token
    })
    
    return verify;
}


app.get('/', async (req, res) => {
  const token = req.query.token
  const result = await getPurchase(token).catch(console.error);
  const state = result.data.purchaseState;
  res.json({"state":state});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})