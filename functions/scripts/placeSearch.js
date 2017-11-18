const request = require("request")
const fetch = require("node-fetch")

//area in meters
const getRadius = (area) => {
  return Math.sqrt(area/Math.PI).toString();
}

const createUrl = (parameters, nextPage) => {
  let url = parameters['baseUrl'];
  if (parameters['type']!='') {
    url += (parameters['type'] + '?');
  }
  if (parameters['location']!='') {
    url += ('&location=' + parameters['location']);
  }
  if (parameters['radius']!='') {
    url += ('&radius=' + parameters['radius']);
  }
  if (parameters['key']!='') {
    url += ('&key=' + parameters['key']);
  }
  if (nextPage) {
    url += ('&next_page_token=' + nextPage);
  }
  console.log(nextPage);
  return url;
};


const collect = async (cityLocations, pageLimit = 5) => {
  let shouldContinue = true;
  let newPageToken = '';
  let currentPage = 1;

  const parameters = {
    'baseUrl': 'https://maps.googleapis.com/maps/api/place/nearbysearch/',
    'type': 'json',
    'location': cityLocations['poznan']['latitude'] + ',' + cityLocations['poznan']['longitude'],
    'radius': getRadius(261850000),
    'key': 'AIzaSyB0H_yqojwEFW99CxmdHYNkROoGAs2qrz4'
  };

  while(currentPage++ <= pageLimit && shouldContinue) {
    newPageToken = await fetch(createUrl(parameters, nextPageToken))
     .then( data => data.json() )
     .then( (data) => {
       if(!data.next_page_token) {
         shouldContinue = false;
       }
       return data.next_page_token;
     });
  }
}

module.exports = collect;
