const request = require("request");

//////////////////////////////////////////////////////////////////////////////
//Goal: Add new data to forecast
//1. Update the forecast string tp include new data
//2. Commit your changes
//3. Push your changes to Github and deploy to Heroku
//4. Test your work in the live application!

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=9dc8f5516db8e68042eb00653bcd8fef&query= + latitude + ',' + longitude + &units=f";
  //"http://api.weatherstack.com/current?access_key=9dc8f5516db8e68042eb00653bcd8fef&query=33.25,-122.5'&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (body.error) {
      callback("Unable to find location.", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees out. It is feels like" +
          body.current.feelslike +
          "degress out. The humidity is " +
          body.current.humidity +
          "%."
      );
    }
  });
};

module.exports = forecast;
