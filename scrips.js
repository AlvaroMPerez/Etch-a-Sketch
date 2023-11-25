var grid = document.getElementById("grid");
var maxGrid = 256


//Genera un grid de 256
for (var i = 0; i < maxGrid; i++){

    var newDiv = document.createElement("div");
    newDiv.classList.add("oneGrid");
    grid.appendChild(newDiv);

    newDiv.addEventListener("mouseover", hooverBlack);
}

//Cambia el color del grid
function hooverBlack(){
    var currentDiv = this;
    currentDiv.style.backgroundColor = "black"
}

var popupBtn = document.getElementById("popupBtn");
var popupBtnClose = document.getElementById("closer");
var modal = document.getElementById("modal")


popupBtn.addEventListener("click", ()=>{
    modal.showModal();
});

popupBtnClose.addEventListener("click", ()=>{
    modal.close();
})