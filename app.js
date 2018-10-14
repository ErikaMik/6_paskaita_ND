document.getElementById("btn_rnd").addEventListener("click", rnd);
// document.getElementById("btn_kitas").addEventListener("click", kitas);


function rnd() {
    var myarray = new Array("block1","block2","block3","block4","block5","block6","block7","block8","block9");
    var chosenDiv = myarray[Math.floor(Math.random() * myarray.length)];
    console.log(chosenDiv); //Just to show this.
    var right = document.getElementById(chosenDiv);
    console.log(right)
	// right.innerHTML = '';
    // document.getElementById('ChosenDiv').innerHTML = '<background-color="red";';
    // document.getElementById(ChosenDiv).style.backgroundColor = '#008B8B';
    // ChosenDiv.style.color = 'red;';
    // document.getElementById(ChosenDiv).bgColor='red';
    right.innerHTML += '<div class="right" background-color: "red";';
}