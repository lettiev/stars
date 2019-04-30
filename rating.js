
	 var star1 = document.getElementById('star1').value;
	 var star2 = document.getElementById('star2').value;
	 var star3 = document.getElementById('star3').value;
	 var star4 = document.getElementById('star4').value;
	 var star5 = document.getElementById('star5').value;


function clearRates(){ 

	for (var i=1; i<=5; i++){

		document.getElementById("star"+i).style.color = "#C33149";
	}

}

function clickstar(posicion){

  clearRates();


	if (posicion==1) {

		document.getElementById("star1").style.color = "#067BC2";

	}

	if (posicion==2) {

		document.getElementById("star1").style.color = "#2FBF71";
		document.getElementById("star2").style.color = "#2FBF71";


	}


	if (posicion==3) {

		document.getElementById("star1").style.color = "#F5E663";
		document.getElementById("star2").style.color = "#F5E663";
		document.getElementById("star3").style.color = "#F5E663";

	}


	if (posicion==4) {

		document.getElementById("star1").style.color = "#00FFFF";
		document.getElementById("star2").style.color = "#00FFFF";
		document.getElementById("star3").style.color = "#00FFFF";
		document.getElementById("star4").style.color = "#00FFFF";

	}


	if (posicion==5) {

		document.getElementById("star1").style.color = "#B79FAD";
		document.getElementById("star2").style.color = "#B79FAD";
		document.getElementById("star3").style.color = "#B79FAD";
		document.getElementById("star4").style.color = "#B79FAD";
		document.getElementById("star5").style.color = "#B79FAD";

	}


}

	window.addEventListener("click",function(e){

		

		if (!document.getElementById("stars").contains(e.target)){

			clearRates();
		}
	});