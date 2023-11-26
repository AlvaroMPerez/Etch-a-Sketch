const grid = document.getElementById("grid");
let maxGrid = 256
/** @type {HTMLSelectElement} */
const selectGridSize = document.getElementById("gridSize");

//Genera un grid de 256
for (let i = 0; i < maxGrid; i++){

    let newDiv = document.createElement("div");
    newDiv.classList.add("oneGrid");
    grid.appendChild(newDiv);

    newDiv.addEventListener("mouseover", hooverBlack);
}

//Cambia el color del grid
function hooverBlack(){
    var currentDiv = this;
    currentDiv.style.backgroundColor = "black"
}

const popupBtn = document.getElementById("popupBtn");
const popupBtnClose = document.getElementById("closer");
const modal = document.getElementById("modal")


popupBtn.addEventListener("click", ()=>{
    modal.showModal();
});

popupBtnClose.addEventListener("click", ()=>{
    modal.close();
    gridChanger()
    styleChanger()
});

//Menu Select



selectGridSize.addEventListener("change", ()=>{
    option = selectGridSize.options[selectGridSize.selectedIndex];
}); 


function gridChanger(){
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    maxGrid = selectGridSize.value;

    for (var i = 0; i < maxGrid; i++) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("oneGrid");
        grid.appendChild(newDiv);

        newDiv.addEventListener("mouseover", hooverBlack);}
}

//Grid CSS changer

function styleChanger(){
    const value = parseInt(selectGridSize.value);
    const value2 = Number(selectGridSize.value);
    if(selectGridSize.value == 128){
        grid.style.gridTemplateColumns = "repeat(8,1fr)"
    }else if(selectGridSize.value == 256){
        grid.style.gridTemplateColumns = "repeat(16,1fr)"
    }else if(selectGridSize.value == 512){
        grid.style.gridTemplateColumns = "repeat(32,1fr)"
    }

}