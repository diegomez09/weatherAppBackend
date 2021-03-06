const request = require('request')
const keyMapBox = 'pk.eyJ1IjoiZGllZ29tZXoiLCJhIjoiY2tkZjBydGwxMW9mbDJ4cDhzZGNpOXIwZCJ9.-hcBpvFDeRtqkjk4FRUbRA'
const geocode = (address, callback) => {
    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + keyMapBox + '&limit=1'
    request({ url:url, json:true }, (error,response)=>{
        if(error){
            callback('Unable to connect to location services',undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to fin location. Tru another search',undefined)
        }else{
            callback(undefined,{
                longitud: response.body.features[0].center[0],
                latitud: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;