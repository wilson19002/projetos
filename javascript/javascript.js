alert('Olá Mundo');

var numero = 25;

if (numero > 10) {
    alert('numero entre 10 e 15');
} else {
    alert('numero menor que 10');
}



var contador = 0;

//enquanto contador for menor que 5 executa
while (contador < 5) {
    alert('Numero: ' + contador);
    contador = contador + 1;
}

//criação de lista - Fulano 0, Ciclano 1, Deltrano 2
var nomes = ['Fulano', 'Ciclano', 'Deltrano'];
alert(nomes[0]);

//nomes.lenght = 3
for (contador = 0; contador < nomes.length; contador++) {
    alert(nomes[contador]);

    if (nomes[contador] === 'Ciclano') {
        alert('Pessoa Encontrada!')
    }

    //função

    function saudacao(){
        alert("Baixou Estoque!");
    }

    function movimentarCaixa(){
        alert("Caixa movimento");
    }

        function fazerVenda(){
            baixarEstoque();
        movimentarCaixa();

        var titulo = document.getElementById('texto');

       
        }
        
    

     

     
    





}