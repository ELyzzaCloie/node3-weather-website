const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=9dc8f5516db8e68042eb00653bcd8fef&query=' + latitude + ',' + longitude + '&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (body.error) {
      callback("Unable to find location.", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          ". It is currently " +
          body.current.temperature +
          " degrees out. It is feels like " +
          body.current.feelslike +
          " degrees out"
      );
    }
  });
};

module.exports = forecast;
