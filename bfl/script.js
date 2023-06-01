 /*BANCO DE DADOS*/
const nomeCassioPotterBarbosa = "CASSIO POTTER"
const senhaCassioPotterBarbosa = '040887'
const treinoCassioPotterBarbosa = `Treino A <br>
xxx xxxvezes`


function btnLogin() {


    alert('clicou')
    var nome = document.getElementById('inNome').value.trim().toUpperCase()
    alert(nome)
    var senha = document.getElementById('inSenha')
    var senha = Number(senha.value)
    alert(senha)
    var outRes = document.getElementById('outRes')


    if (nome == nomeCassioPotterBarbosa && senha == senhaCassioPotterBarbosa) {
        outRes.innerHTML= `funcionou <br> funcionou <br> funcionou`
    }

   


}