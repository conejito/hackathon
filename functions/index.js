const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.webhook = functions.https.onRequest((request, response) => {
  db.insert(`webhook/logs/${Date().getTime()}`, request);
  response.send('ok');
});
