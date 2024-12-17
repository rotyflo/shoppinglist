let days = {
	"monday": {
		"lunch": null,
		"dinner": null
	},
	"tuesday": {
		"lunch": null,
		"dinner": null
	},
	"wednesday": {
		"lunch": null,
		"dinner": null
	},
	"thursday": {
		"lunch": null,
		"dinner": null
	},
	"friday": {
		"lunch": null,
		"dinner": null
	},
	"saturday": {
		"lunch": null,
		"dinner": null
	},
	"sunday":{
		"lunch": null,
		"dinner": null
	}
};

let ingredients = {
	"burritos": {
		"large tortillas": 2,
		"cups of rice": 0.5,
		"cans of refried beans": 1,
		"yellow onions": 1
	},
	"tuna rice": {
		"cans of tuna": 1,
		"cups of rice": 1,
		"miso packets": 2,
		"dumplings": 8
	}
}

function addItem(item) {
	// days["monday"]["lunch"] = item;
	for (let day in days) {
		let lunchButtonChecked = document.getElementById(`${day}-lunch-button`).checked;
		let dinnerButtonChecked = document.getElementById(`${day}-dinner-button`).checked;

		if (lunchButtonChecked) {
			days[day]["lunch"] = item;
		}
		else if (dinnerButtonChecked) {
			days[day]["dinner"] = item;
		}
	}

	// document.getElementById("monday-lunch").innerHTML = item
	updateWeek();
}

function test(info) {
	document.getElementById("shoppinglist").innerHTML = "<p>" + info + "</p>";
}

function updateWeek() {
	document.getElementById("week").innerHTML = "";

	for (let day in days) {
		document.getElementById("week").innerHTML += 
			`<div id="${day}"> 
				<p>${day.toUpperCase()}</p>
				<div>
					<input type="radio" value="${day}-lunch" name="test" id="${day}-lunch-button">
					<label for="${day}-lunch" id="${day}-lunch">Lunch</label>
					<p>&emsp;&emsp;${days[day]["lunch"]}</p>
				</div> 
				<div>
					<input type="radio" value="${day}-dinner" name="test" id="${day}-dinner-button">
					<label for="${day}-dinner" id="${day}-dinner">Dinner</label>
					<p>&emsp;&emsp;${days[day]["dinner"]}</p>
				</div>
			</div>`;
	}
}

updateWeek();