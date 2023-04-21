// https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL


    

function btnVal() {
    
    var outDol = document.getElementById("outDol")
    var outEu = document.getElementById("outEu")
    var outBit = document.getElementById("outBit")

    const url = ' https://economia.awesomeapi.com.br/last/'
    const moedas = 'USD-BRL,EUR-BRL,BTC-BRL'

fetch(url + moedas)
    .then(function (response) {
        return response.json()
    
    })
    .then(function (data) {
        console.log(data)
      
    })
    outDol.innerHTML = USDBRL.bid
    outEu.innerHTML = `R$ 5,78 `
    outBit.innerHTML = `R$ 29.484,68`
}
