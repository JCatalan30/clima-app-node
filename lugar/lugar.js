const axios = require('axios');

const getLugarLatLng = async (dir) => {
    const encodedUlr = encodeURI(dir);
    // console.log(encodedUlr);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        headers: {'x-rapidapi-key': '2857d79653mshaa1f6800b25f766p1f591cjsn67dd6378f3ce'}
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0 ){
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data      = resp.data.Results[0];
    const direccion = data.name;
    const lat       = data.lat;
    const lng       = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}

