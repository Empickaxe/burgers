let prices = document.getElementsByClassName('infoprice');

document.getElementById("change-currensy").onclick = function(e) {
	let currentCurrensy = e.target.innerText;
	let newCurrensy = "$";
	let coefficient = 1;

	if (currentCurrensy === "$"){
		newCurrensy = "₽";
		coefficient = 97;
	}

	else if (currentCurrensy === "₽"){
		newCurrensy = "BYN";
		coefficient = 3;
	}

	else if (currentCurrensy === "BYN"){
		newCurrensy = "€";
	    coefficient = 0.9;
	}

	else if (currentCurrensy === "€"){
		newCurrensy = "¥";
		coefficient = 143;
	}

	e.target.innerText = newCurrensy;

	for (let i=0; i<prices.length; i++){
		prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrensy;
	}
}