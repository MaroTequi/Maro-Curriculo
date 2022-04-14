const searchHide = document.querySelectorAll('.searchHide');
const botao = document.querySelectorAll('.tabela-botao');
let trigger = 0;

if ( trigger === 1){
    hideTable();
}
else{
    showTable();
}

function hideTable(){
    for( let i =0; i < searchHide.length; i++){
        botao.onclick = searchHide[i].classList.add('hide');
    }

    trigger = 0;
}

function showTable(){
    for( let i = 0; i < botao.length; i++){
        botao[i].onclick = showContent;
    }
    
    const tableDatas = document.querySelectorAll('.hide');
    
    function showContent(){
        for( let i = 0; i < searchHide.length; i++){
            searchHide[i].classList.remove('hide');
        }
    }

    trigger = 1;
}