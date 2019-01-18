const fetch = require("node-fetch");

const sendRequestToApi = (url, method = 'GET', body) => {

    return fetch(url, { method, body })
}

module.exports = { sendRequestToApi }