

var worksSlider = document.getElementById("works");
var worksOutput = document.getElementById("worksValue");
worksOutput.innerHTML = worksSlider.value;
worksSlider.oninput = function() {
	worksOutput.innerHTML = this.value;
	calculatework();
}


var daysSlider = document.getElementById("days");
var daysOutput = document.getElementById("daysValue");
daysOutput.innerHTML = daysSlider.value;
daysSlider.oninput = function() {
	daysOutput.innerHTML = this.value;
	calculatework()
}


function calculatework() { 
	console.log("hooooo");
		let works = worksSlider.value;
		let quarantineDays = daysSlider.value;
		console.log(works);
		console.log(quarantineDays);


	// let works = event.target[0].value;
	// let quarantineDays = event.target[1].value;

	

	const workDays = works / quarantineDays;
	const percent = Math.round(works / quarantineDays*100 );
	if (percent > 100) {
		document.getElementById('ratioo').innerHTML = 'you have to do '+ percent+'% things per days'+'&#x1F62D';
	} else {
		document.getElementById('ratioo').innerHTML = 'you have to do '+ percent+'% things per days'+'&#x1F603 &#x1F3AE';
	}

};

