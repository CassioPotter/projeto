const key = "4d73f87e6b2364fd7423d8e702c559e4"



function cliquei() {
    
    const cidade = document.querySelector('.inCidade').value.trim()
    buscar(cidade)

    
}

async function buscar(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    console.log(dados)
    colocar(dados)
}

function colocar(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " +dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".txtprev").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    
}