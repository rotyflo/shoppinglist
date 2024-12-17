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
		"large tortillas": 3,
		"cups of rice": 0.5,
		"cans of refried beans": 1,
		"yellow onions": 1
	},
	"tuna rice": {
		"cans of tuna": 1,
		"cups of rice": 1,
		"miso packets": 2,
		"dumplings": 8
	},
	"garbanzo bean bowls": {
		"cups of brown rice": 1,
		"cans of garbanzo beans": 1,
		"cucumbers": 1,
		"tomatoes": 1,
		"red onions": 0.5,
		"containers of feta cheese": 0.5,
		"tablespoons of olive oil": 4,
		"tablespoons of balsamic": 3
	},
	"spaghetti": {
		"boxes of pasta": 0.5,
		"cans of crushed tomatoes": 1,
		"packs of ground turkey": 1,
		"yellow onions": 1
	}
};

function updateMeals() {
	for (let day in days) {
		let lunch = document.getElementById(`${day}-lunch-dropdown`).value;
		let dinner = document.getElementById(`${day}-dinner-dropdown`).value;
		
		days[day]["lunch"] = lunch;
		days[day]["dinner"] = dinner;
	}
}

function printWeek() {
	document.getElementById("week").innerHTML = "";

	for (let day in days) {
		document.getElementById("week").innerHTML += 
			`<div id="${day}">
				<p>${day.toUpperCase()}</p>
				<div>
					<label for="${day}-lunch" id="${day}-lunch">Lunch</label>
					${getDropdownHTML(day, 'lunch')}
				</div> 
				<div>
					<label for="${day}-dinner" id="${day}-dinner">Dinner</label>
					${getDropdownHTML(day, 'dinner')}
				</div>
			</div>`;
	}
}

function getDropdownHTML(day, mealtime) {
	let dropdownHTML = 
		`<select name="meals" id="${day}-${mealtime}-dropdown" onchange="updateMeals(); printShoppingList()">
			<option value="null">---</option>`;

	for (meal in ingredients) {
		dropdownHTML += `<option value="${meal}">${capitalize(meal)}</option>`
	}

	dropdownHTML += '</select>';

	return dropdownHTML;
}

function getShoppingList() {
	let meals = ["lunch", "dinner"];
	let shoppingList = {};

	for (let day in days) {
		for (let i = 0; i < meals.length; i++) {
			let meal = days[day][meals[i]];

			if (meal) {
				let ingredientsForMeal = ingredients[meal];

				for (let ingredient in ingredientsForMeal) {
					if (shoppingList[ingredient]) {
						shoppingList[ingredient] += ingredientsForMeal[ingredient];
					}
					else {
						shoppingList[ingredient] = ingredientsForMeal[ingredient];
					}
				}
			}
		}
	}
	
	return shoppingList;
}

function printShoppingList() {
	let shoppingList = getShoppingList();

	document.getElementById("shoppinglist").innerHTML = "";
	for (let ingredient in shoppingList) {
		console.log("success");
		document.getElementById("shoppinglist").innerHTML +=
		`<p>${shoppingList[ingredient]} ${capitalize(ingredient)}</p>`;
	}
}

function capitalize(str) {
	let words = str.split(" ");
	let capitalizedWords = [];

	for (let i = 0; i < words.length; i++) {
		capitalizedWords.push(words[i][0].toUpperCase() + words[i].substring(1));
	}

	return capitalizedWords.join(" ");
}

printWeek();