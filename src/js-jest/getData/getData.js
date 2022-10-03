const axios = require('axios');
const mapArrToString = require('../mapArrToString/mapArrToString.js');

const getData = async () => {
    try {
        const respons = await axios.get('https://jsonplaceholder.typicode.com/users');
        const userId = respons.data.map(user => user.id);
        return mapArrToString(userId);
    } catch(err) {

    }
}

module.exports = getData;