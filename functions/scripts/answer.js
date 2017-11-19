'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var functions = require('firebase-functions');
var regeneratorRuntime = require('regenerator-runtime');

var db = {};

var resolver = {
  "find-food": function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data, parameters) {
      var placeFood, city, places, keys, placeId, place, result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('searching for food');
              placeFood = parameters['place-food'];
              city = 'Poznań';
              _context.next = 5;
              return db.select('cities/' + city + '/categories/' + placeFood, 'value');

            case 5:
              places = _context.sent;
              keys = Object.keys(places);
              placeId = keys[keys.length * Math.random() << 0];
              _context.next = 10;
              return db.select('places/' + placeId, 'value');

            case 10:
              place = _context.sent;
              result = Object.assign({}, data);

              result.result.place = place;

              result.fulfillment = 'Mo\u017Ce ' + place.name + '? Ma ocen\u0119 ' + place.rating + '/5. Adres: ' + place.vicinity;
              result.result.fulfillment.speech = 'Mo\u017Ce ' + place.name + '? Ma ocen\u0119 ' + place.rating + '/5. Adres: ' + place.vicinity;
              result.result.fulfillment.messages = [{ speech: 'Mo\u017Ce ' + place.name + '? Ma ocen\u0119 ' + place.rating + '/5. Adres: ' + place.vicinity, type: 0 }];

              return _context.abrupt('return', result);

            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function findFood(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(),

  "find-entertainment": function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data, parameters) {
      var placeFood, city, places, keys, placeId, place, result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('searching for entertainment');
              placeFood = parameters['place-entertainment'];
              city = 'Poznań';
              _context2.next = 5;
              return db.select('cities/' + city + '/categories/' + placeFood, 'value');

            case 5:
              places = _context2.sent;
              keys = Object.keys(places);
              placeId = keys[keys.length * Math.random() << 0];
              _context2.next = 10;
              return db.select('places/' + placeId, 'value');

            case 10:
              place = _context2.sent;
              result = Object.assign({}, data);

              result.result.place = place;

              result.fulfillment = 'Mo\u017Ce ' + place.name + '? Ma ocen\u0119 ' + place.rating + '/5. Adres: ' + place.vicinity;
              result.result.fulfillment.speech = 'Mo\u017Ce ' + place.name + '? Ma ocen\u0119 ' + place.rating + '/5. Adres: ' + place.vicinity;
              result.result.fulfillment.messages = [{ speech: 'Mo\u017Ce ' + place.name + '? Ma ocen\u0119 ' + place.rating + '/5. Adres: ' + place.vicinity, type: 0 }];

              return _context2.abrupt('return', result);

            case 17:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function findEntertainment(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }(),

  "find-sleep": function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data, parameters) {
      var placeFood, city, places, keys, placeId, place, result;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log('searching for sleep');
              placeFood = parameters['place-sleeping'];
              city = 'Poznań';
              _context3.next = 5;
              return db.select('cities/' + city + '/categories/' + placeFood, 'value');

            case 5:
              places = _context3.sent;
              keys = Object.keys(places);
              placeId = keys[keys.length * Math.random() << 0];
              _context3.next = 10;
              return db.select('places/' + placeId, 'value');

            case 10:
              place = _context3.sent;
              result = Object.assign({}, data);

              result.result.place = place;

              result.fulfillment = 'Mo\u017Ce ' + place.name + '? Ma ocen\u0119 ' + place.rating + '/5. Adres: ' + place.vicinity;
              result.result.fulfillment.speech = 'Mo\u017Ce ' + place.name + '? Ma ocen\u0119 ' + place.rating + '/5. Adres: ' + place.vicinity;
              result.result.fulfillment.messages = [{ speech: 'Mo\u017Ce ' + place.name + '? Ma ocen\u0119 ' + place.rating + '/5. Adres: ' + place.vicinity, type: 0 }];

              return _context3.abrupt('return', result);

            case 17:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function findSleep(_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }()
};

var answer = function answer(database, response) {
  db = database;

  var id = response.id,
    result = response.result;


  return resolver[result.action] ? resolver[result.action](response, result.parameters) : response;
};

module.exports = answer;