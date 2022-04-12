const botao = document.querySelectorAll('.cabecalho-botoes');

for( let i = 0; i < botao.length; i++){
    botao[i].onclick = tocaSom;
}

function tocaSom(){
    document.querySelector('#dbz').play();
}


