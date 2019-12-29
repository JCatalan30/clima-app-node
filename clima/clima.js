const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=349f601e06a5be9ec103b1da56e61cd4&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}