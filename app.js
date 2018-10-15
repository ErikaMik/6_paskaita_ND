document.getElementById("btn_rnd").addEventListener("click", rnd);
// document.getElementById("btn_kitas").addEventListener("click", kitas);


function rnd() {
    var myarray = new Array("block1","block2","block3","block4","block5","block6","block7","block8","block9");
    var chosenDiv = myarray[Math.floor(Math.random() * myarray.length)];
    console.log(chosenDiv); //Just to show this.
    document.getElementById(chosenDiv).style.backgroundColor = "red";
}