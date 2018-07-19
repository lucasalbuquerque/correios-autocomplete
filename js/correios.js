const cepform = document.getElementById("cepForm");
let inputs = cepform.querySelectorAll("input");
let cep = document.querySelector(".cep");
cep.maxLength = 8;
let logradouro = document.querySelector(".logradouro");
let complemento = document.querySelector(".complemento");
let bairro = document.querySelector(".bairro");
let cidade = document.querySelector(".cidade");
let estado = document.querySelector(".estado");
let enviar = document.querySelector(".enviar");
let limpar = document.querySelector(".limpar");
let correios;

const request = (value) => {
    correios = fetch(`https://viacep.com.br/ws/${value}/json/`);

    correios
    .then(
        (response)=>response.json())
        .then((data)=>{
          console.log(data.cep);
          logradouro.value = data.logradouro;
          complemento.value = data.complemento == '' ? 'Sem complemento' : data.complemento;
          bairro.value = data.bairro;
          cidade.value = data.localidade;
          estado.value = data.uf;
        }
    )

    .catch(function(err){
        console.error('Erro ao trazer a informação:', err);
        errorMsg(true);
    });

}

const loader = (loading = false) => {
    if(loading){
        let loadingEl = document.createElement('div');
        let imgLoading = document.createElement('img');
        imgLoading.setAttribute('src','loader.gif');
        loadingEl.appendChild(imgLoading);
        loadingEl.setAttribute("id","loading");
        cepform.prepend(loadingEl);
    }else {
        removeElement("#loading");
    }
}

const errorMsg = (error = false) => {
    if(error){
        let errorBody = document.createElement('div')
        errorBody.setAttribute("id","errormsg");

        let errorMsg = document.createElement('h3');
        errorMsg.appendChild(document.createTextNode("Cep inválido!"));

        errorBody.appendChild(errorMsg);

        cepform.prepend(errorBody);
    }else {
        removeElement("#errormsg");
    }
}

let removeElement = (event) => {
    document.querySelector(event) !== null ? document.querySelector(event).remove() : '';
}

let autocomplete = () => {
    if(cep.value.length >= 8){
        loader(true)
       setTimeout(() => {
        request(cep.value);
        loader(false)
       }, 2000);
    }
    cep.addEventListener('input', autocomplete);
}

let buscar = (event) => {
    event.preventDefault();
    request(cep.value);
}

let limparCampos = (event) => {
    event.preventDefault();
    inputsArr = Array.from(inputs);
    loader(true)

    setTimeout(() => {
        inputsArr.map((item, indice) => {
            item.value = '';
         });
         loader(false)
    }, 2000);

    errorMsg(false);
}

limpar.addEventListener('click', limparCampos);
//enviar.addEventListener('click', buscar)
autocomplete();
