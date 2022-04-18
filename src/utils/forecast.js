const request = require("request");

const forecast = (lat, log, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=7b2fa481aefe9630bc9b80feaa2ecf0a&query=" +
    lat+
    "," +
    log +
    "&units=s";

    request ( {uri: url, json:true},(error, response, body) => {
            if (error) {
                callback("Unable to connect to location services!", undefined);
            } else if (body.length === 0) {
                callback("Unable to find location try another search!", undefined);
            } else {
                callback(undefined,
                    body.current.weather_descriptions +
                    " the currently temperature is " +
                    body.current.temperature +
                    " its feels like " +
                    body.current.feelslike
                );
            }
        })

};

module.exports = forecast;
