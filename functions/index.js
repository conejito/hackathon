const functions = require('firebase-functions');
//const admin = require('firebase-admin');

const Database = require('./scripts/database');
const db = new Database(functions.config().firebase);

const apiai = require('apiai');
const dialogflow = apiai('868aa2de69c344f08e483fb6c59c6dea');

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
  const request = dialogflow.textRequest(request.body.text, {
    sessionId: request.body.id
  });

  request.on('response', (data) => {
    console.log('response', data);
    request.end();
    response.send(data);
  });
});
