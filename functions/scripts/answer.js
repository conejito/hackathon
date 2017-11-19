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

              result.result.fulfillment = {};
              result.result.fulfillment.speech = 'Mo\u017Ce ' + place.name + '? Ma ocen\u0119 ' + place.rating + '/5. Adres: ' + place.vicinity;
              result.result.fulfillment.messages = [ {speech: 'Mo\u017Ce ' + place.name + '? Ma ocen\u0119 ' + place.rating + '/5. Adres: ' + place.vicinity, type: 0} ];

              //console.log(result);
              return _context.abrupt('return', result);

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function findFood(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }()
};

var answer = function answer(database, response) {
  db = database;

  var id = response.id;
  var result = (response.result ? response.result : response.queryResult);

  return (resolver[result.action] ? resolver[result.action](response, result.parameters) : response);
};

module.exports = answer;