function buscar() {
    var seletor = document.getElementById('moeda').value;
    var resultado = document.getElementById('resultado');

    fetch('https://api.coingecko.com/api/v3/simple/price?ids=' + seletor + '&vs_currencies=brl')
        .then(response => response.json())
        .then(data => {

            var preco = data[seletor].brl
            resultado.textContent = formatar(preco);
            mudarImagem(seletor);

        }).catch(error => resultado.textContent = error);

}

function mudarImagem(seletor) {
    var moeda = document.getElementById('imagem');

    if (seletor == "bitcoin") {
        moeda.innerHTML = '<img width="200" src="https://th.bing.com/th/id/R.2af1002e05b020fa1edf450e63d27798?rik=75gEmiEB%2fbdACg&pid=ImgRaw&r=0"></img>';

    } else if (seletor == "ethereum") {
        moeda.innerHTML = '<img width="200" src="https://www.blockchain-info.fr/wp-content/uploads/2018/10/2000px-Ethereum_logo.svg_.png"></img>';

    } else if (seletor == "litecoin") {
        moeda.innerHTML = '<img width="200" src="https://vignette.wikia.nocookie.net/cryptocurrency/images/5/5d/Litecoin.png/revision/latest?cb=20140316100431"></img>';

    } else if (seletor == "dogecoin") {
        moeda.innerHTML = '<img width="200" src="https://th.bing.com/th/id/R.b1839874aa3d562a191afa2a712071a2?rik=4C8mhTQMzVgL6A&pid=ImgRaw&r=0"></img>';

    }







}

function formatar(valor) {

    valor = Number(valor).toFixed(2).replace('.', ',');
    valor = "R$ " + valor;
    return valor;
}