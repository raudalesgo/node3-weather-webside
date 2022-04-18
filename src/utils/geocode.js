const request = require("request");

const geocode = (address, callback) => {
  const map_url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoicmF1ZGFsZXNnbyIsImEiOiJjbDF5b200NzAwZXFhM2xxcmJjMWJzbHY2In0.J5aDXoXNP-VDRMyrxPgZUA&limit=1";

  request({ uri: map_url, json: true }, (error, response, body) => {
    console.log(body)
    if (error) {
      console.log("Unable to connect to location services!");
    } else if(body.query.length === 0) {
      console.log("Unable to find location try another search!");
    } else {
      callback(undefined, {
        latitud: body.features[0].center[1],
        longitud: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
