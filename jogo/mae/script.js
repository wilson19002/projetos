var frase = "Mãe é flopr e com ela tudo floresce"

function gerarFrase(){
    var texto = document.getElementById("frase")
    texto.innerHTML = frase;
}

function lerFrase(){
    var som = window.SpeechSynthesis;
    var discurso = new speechSynthesisUtterance(frase);
    som.speak(discurso);
}
    