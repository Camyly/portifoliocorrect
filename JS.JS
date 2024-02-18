const key = "82ec3d1cbab58cc347feba47c8eaf038"

function colocardadosnatela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".Tempo").innerHTML = Math.floor(dados.main.temp) + "C°"
    document.querySelector(".textprev").innerHTML = dados.weather[0].description
    document.querySelector(".UMIDADE").innerHTML = dados.main.humidity + "%"
    document.querySelector(".imgprev").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function buscarcidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json())

    colocardadosnatela(dados)
}

function cliquenobotao() {
    const cidade = document.querySelector(".inputcity").value
    buscarcidade(cidade)
}



