document.getElementById("btn_rnd").addEventListener("click", rnd);
document.getElementById("btn_kitas").addEventListener("click", kitas);
var div_array = Array["block1","block2","block3","block4","block5","block6","block7","block8","block9"];
var cell_number = 1;


function rnd() {
    cell_clear();
    var myarray = new Array("block1","block2","block3","block4","block5","block6","block7","block8","block9");
    // document.getElementById().style.backgroundColor = "gery";
    var chosenDiv = myarray[Math.floor(Math.random() * myarray.length)];
    console.log(chosenDiv); //Just to show this.
    document.getElementById(chosenDiv).style.backgroundColor = "red";
}

function kitas() {

}

function cell_random () {
    
}

function cell_clear () {
    for (var i = div_array.length - 1; i >= 0; i--) {
        document.getElementById(div_array[i]).style.backgroundColor = "gery";
    }
}