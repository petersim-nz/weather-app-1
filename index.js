const request = require('request')
const argv = require('yargs').argv

let link = 'http://api.openweathermap.org/data/2.5/weather?q='
let apiKey = 'f5d21c449bf00917e5121a2371ff8adc'
let city = argv.c || 'whangarei'
let country = 'nz'
let units = 'metric' // metric or imperial
let url = `${link}${city},${country}&units=${units}&appid=${apiKey}`

request(url, function (err, response, body) {
  if (err) {
    console.log('error:', error)
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp}\u00B0C in ${weather.name}!`
    console.log(message)
  }
})

