const functions = require('firebase-functions');
//const admin = require('firebase-admin');

const Database = require('./scripts/database');
const db = new Database(functions.config().firebase);
const answer = require('./scripts/answer');

const apiai = require('apiai');
const dialogflow = apiai('868aa2de69c344f08e483fb6c59c6dea');

exports.webhook = functions.https.onRequest((request, response) => {
  console.log(request.body);

  answer(db, request.body)
    .then( (result) => {
      console.log(result);
      response.send(result);
    })

  // answer(db, request.body)
  //   .then( (data) => {
  //     console.log('BEST RESULT', data);
  //     response.send(
  //       data
  //     );
  //   });

  // let responseJson = {};
  // const responseToUser = 'Zawsze odpowiadam TAK';
  // responseJson.fulfillmentText = responseToUser;
  // response.json(responseJson);
});

exports.message = functions.https.onRequest((request, response) => {
  const message = JSON.parse(request.body);
  console.log(message.text, message.id);
  const query = dialogflow.textRequest(message.text, {
    sessionId: message.id
  });

  query.on('response', (data) => {
    answer(db, data)
      .then( (result) => {
        console.log(result);
        response.send(result);
      })
  });

  query.on('error', (error) => {
    console.log('error', error);
  });

  query.end();
});
