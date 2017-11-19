const functions = require('firebase-functions');
const regeneratorRuntime = require('regenerator-runtime');

let db = {};

const resolver = {
  "find-food": async (data, parameters) => {
    console.log('searching for food');
    const placeFood = parameters['place-food'];

    const city = 'Poznań';
    const places = await db.select(`cities/${city}/categories/${placeFood}`, 'value');

    const keys = Object.keys(places);
    const placeId = keys[ keys.length * Math.random() << 0];

    const place = await db.select(`places/${placeId}`, 'value');

    let result = Object.assign({}, data);
    result.result.place = place;

    result.fulfillment = `Może ${place.name}? Ma ocenę ${place.rating}/5. Adres: ${place.vicinity}`;
    result.result.fulfillment.speech = `Może ${place.name}? Ma ocenę ${place.rating}/5. Adres: ${place.vicinity}`;
    result.result.fulfillment.messages = [ {speech: `Może ${place.name}? Ma ocenę ${place.rating}/5. Adres: ${place.vicinity}`, type: 0} ];

    return result;
  },

  "find-entertainment": async (data, parameters) => {
    console.log('searching for entertainment');
    const placeFood = parameters['place-entertainment'];

    const city = 'Poznań';
    const places = await db.select(`cities/${city}/categories/${placeFood}`, 'value');

    const keys = Object.keys(places);
    const placeId = keys[ keys.length * Math.random() << 0];

    const place = await db.select(`places/${placeId}`, 'value');

    let result = Object.assign({}, data);
    result.result.place = place;

    result.fulfillment = `Może ${place.name}? Ma ocenę ${place.rating}/5. Adres: ${place.vicinity}`;
    result.result.fulfillment.speech = `Może ${place.name}? Ma ocenę ${place.rating}/5. Adres: ${place.vicinity}`;
    result.result.fulfillment.messages = [ {speech: `Może ${place.name}? Ma ocenę ${place.rating}/5. Adres: ${place.vicinity}`, type: 0} ];

    return result;
  },

  "find-sleep": async (data, parameters) => {
    console.log('searching for sleep');
    const placeFood = parameters['place-sleeping'];

    const city = 'Poznań';
    const places = await db.select(`cities/${city}/categories/${placeFood}`, 'value');

    const keys = Object.keys(places);
    const placeId = keys[ keys.length * Math.random() << 0];

    const place = await db.select(`places/${placeId}`, 'value');

    let result = Object.assign({}, data);
    result.result.place = place;

    result.fulfillment = `Może ${place.name}? Ma ocenę ${place.rating}/5. Adres: ${place.vicinity}`;
    result.result.fulfillment.speech = `Może ${place.name}? Ma ocenę ${place.rating}/5. Adres: ${place.vicinity}`;
    result.result.fulfillment.messages = [ {speech: `Może ${place.name}? Ma ocenę ${place.rating}/5. Adres: ${place.vicinity}`, type: 0} ];

    return result;
  }
};

const answer = (database, response) => {
  db = database;

  const {id, result} = response;

  return (resolver[result.action] ? resolver[result.action](response, result.parameters) : response);

};

module.exports = answer;