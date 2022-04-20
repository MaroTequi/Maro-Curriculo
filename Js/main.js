const tableButton = document.getElementById('button-table');
const searchHide = document.querySelectorAll('.Hidable');
let test = document.querySelectorAll('Hidable');

tableButton.onclick = function(){
    tableActions();
}

function tableActions(){
    let tableAreHiding = searchHide[0].classList.length === 2;

    if (tableAreHiding){
        const showTable = () => {
            for( let i = 0; i < searchHide.length; i++){
                searchHide[i].classList.remove('hide')
            } 
        } 
        showTable();
    }
    
    else{
        function hideTable(){
            for( let i = 0; i < searchHide.length; i++){
                searchHide[i].classList.add('hide');
            }
        }
        hideTable();
    }
}