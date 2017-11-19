const functions = require('firebase-functions');
//const admin = require('firebase-admin');

const Database = require('./scripts/database');
const db = new Database(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.webhook = functions.https.onRequest((request, response) => {
  console.log(request.body);

  let responseJson = {};
  const responseToUser = 'Zawsze odpowiadam TAK';
  responseJson.fulfillmentText = responseToUser;
  response.json(responseJson);
});

exports.message = functions.https.onRequest((request, response) => {
  db.insert(`webhook/messages/${(new Date()).getTime()}`, request);
  response.send('ok');
});
