const Database = require('./database');
const db = new Database();
const answer = require('./answer');

const apiai = require('apiai');
const dialogflow = apiai('868aa2de69c344f08e483fb6c59c6dea');

const query = dialogflow.textRequest('Gdzie jest restauracja?', {
  sessionId: 431213
});

query.on('response', (data) => {
  //console.log(data);
  answer(db, data)
    .then( (result) => {
      console.log(result);
    })
});

query.on('error', (error) => {
  console.log('error', error);
});

query.end();
