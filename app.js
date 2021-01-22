const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const direccion = process.argv[2]
if (!direccion) {
    console.log('Agregue una ciudad');
} else {
    geocode(process.argv[2], (error, data) => {
        if (error) {
            return console.log('Error en la petición');
        }
        forecast(data.longitud, data.latitud, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
            console.log('Locacion:' + data.location);
            console.log(forecastData);
        })
    })
}

