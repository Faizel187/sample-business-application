function initSliders() {
	
	var tFood = document.getElementById("food");
	var tFout = document.getElementById("tFoodOut");

	var tTrans = document.getElementById("trans"); 
	var tOut = document.getElementById("transOut");

	var tEnt = document.getElementById("ent");
	var tEntOut = document.getElementById("entOut");

	var tEmerg = document.getElementById("emerg");
	var tEmergOut = document.getElementById("emergOut");

	var tClothing = document.getElementById("clothing");
	var tClothingOut = document.getElementById("clothingOut");


	/* this referrs to tfood 
	 listens to the input to action the slider*/
	tFood.addEventListener("input", function() {tFout.value = "$" + this.value;}, 
		false // boolean
	);

	tTrans.addEventListener(
		"input", 
		function() {tOut.value = "$" + this.value;}, 
		false // boolean
		);

	tEnt.addEventListener(
		"input", function() {tEntOut.value = "$" + this.value;},
		false);

	tEmerg.addEventListener("input", function() {tEmergOut.value ="$" + this.value;},
		false);

	tClothing.addEventListener("input", function() {clothingOut.value="$" + this.value;},
		false);

	// function()anonymous function
	// (); start/end of eventlistener

}

// gets values for each slider

function addAll() {
	var myNum = 0;
    var r = document.getElementById("food"); // grab the food slider
    var f = r.value; // get the value of food slider and add it to f variable

    r = document.getElementById("trans");
    var t = r.value;

    r = document.getElementById("ent");
    var ent = r.value;

    r = document.getElementById("emerg");
    var em = r.value;

     r = document.getElementById("clothing");
    var clo = r.value;

    if (f == "") {
    	f = 0;
    }

    if ( t == "") t = 0;
    if (ent == "") ent = 0;
    if (em =="") em = 0;
    if (clo == "") clo = 0;

    /* parseInt forces the value to change to an integer.
		adds the food slider values
		grabs the div mytotal
		innerHTMl adds the $ to total and mynum grand total to the string $ */


    myNum = parseInt(f)+parseInt(t)+parseInt(ent)+parseInt(em)+parseInt(clo); 
    var myT = document.getElementById("mytotal");
    myT.innerHTML = "<strong>$" + myNum.toString() + "</strong>";
    } 
   