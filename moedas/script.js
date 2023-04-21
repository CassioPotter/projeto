// https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL



const url = 'https://economia.awesomeapi.com.br/last/'
const coins = 'USD-BRL,EUR-BRL,BTC-BRL'

var data = new Date()

fetch(url + coins)
    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
        const dolarReal = data.USDBRL
        const euroReal = data.EURBRL
        const bitReal = data.BTCBRL

       
        document.getElementById('outDol').innerHTML = parseFloat(dolarReal.bid).toLocaleString('pt-br', {style: 'currency',currency: 'BRL'})
        document.getElementById('outEu').innerHTML = parseFloat(euroReal.bid).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        document.getElementById('outBit').innerHTML = parseFloat(bitReal.bid).toLocaleString('pt-br', {style: 'currency',currency: 'BRL'})
    })