var grid = document.getElementById("grid");
var maxGrid = 256

for (var i = 0; i < maxGrid; i++){

    var newDiv = document.createElement("div");
    newDiv.classList.add("oneGrid");
    grid.appendChild(newDiv);

    newDiv.addEventListener("mouseover", hooverBlack);

}

function hooverBlack(){
    var currentDiv = this;
    currentDiv.style.backgroundColor = "black"
}