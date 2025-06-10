const inputCep = document.querySelector("#cep")
const btnBuscar = document.querySelector("#btn-buscar")
const  inputEstado = document.querySelector("#estado")
const inputBairro = document.querySelector("#bairro")
const inputLogradouro = document.querySelector("#logradouro")
const inputCidade = document.querySelector("#cidade")
const inputNumero = document.querySelector("#numero")
const inputComplemento = document.querySelector("#complemento")
 
 async function preencherForm(){
inputEstado.value = ""
inputBairro.value = ""
inputLogradouro.value = ""
inputCidade.value = ""
inputComplemento.value = ""
inputNumero.value = ""

let valueInputCep = inputCep.value
try {
    let response = await fetch(`https://viacep.com.br/ws/${valueInputCep}/json`)
let data = await response.json()

if(data.erro == "true"){
    inputNumero.setAttribute("disabled", "")
    inputComplemento.setAttribute("disabled", "")
    alert("CEP invalido!")
    return
}

inputEstado.value = data.estado
inputBairro.value = data.bairro
inputLogradouro.value = data.logradouro
inputCidade.value = data.localidade


inputNumero.removeAttribute("disabled")
inputComplemento.removeAttribute("disabled")
} catch (error) {
        inputNumero.setAttribute("disabled", "")
    inputComplemento.setAttribute("disabled", "")
    alert("CEP invalido!")
}

}

btnBuscar.addEventListener("click", preencherForm)


function mask(){

let valueInputCep = inputCep.value
let lengthInputCep = valueInputCep.length

if(lengthInputCep == 5){
    inputCep.value += "-"
}

}


inputCep.addEventListener("keypress", mask)