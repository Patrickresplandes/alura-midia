function tocaSom (seletorAudio){
    const elemento = document.querySelector (seletorAudio);
    
    if(elemento && elemento.localName === 'audio'){
            elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido')
    }
    
}

// acessando a lista de som
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];

    //acessando a lista
    const instrumento = tecla.classList[1]

    //template string
    const idAudio = `#som_${instrumento}`

    //criado uma função anonimo para chamar um função dinamica
    tecla.onclick = function () {
        tocaSom(idAudio)
    }; 
    tecla.onkeydown =  function (event) {

        console.log(event.code)
        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa')
        }

    };

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}
