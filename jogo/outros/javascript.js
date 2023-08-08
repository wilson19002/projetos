var jogador = "x"

function jogar(celula){
    //alert("funcionou");

    if(celula.innerHTML == ""){

        celula.innerHTML = jogador;

        if(jogador == "x"){
            jogador = "o";
        }else{
            jogador = "x";
        }
    }
}

function reiniciar(){
    window.location.reload();
}

const nomes = ['fulano','ciclano','deltrano','beltrano','junior','josé']

function gerarBatalha(){
    const nome1 = nomes[ Math.floor( Math.random() * nomes.length ) ];
    const nome2 = nomes[ Math.floor( Math.random() * nomes.length ) ];

    while(nome1 === nome2){
        gerarBatalha();
    }

    document.getElementById('jogador1').textContent = nome1;
    document.getElementById('jogador2').textContent = nome2;

}