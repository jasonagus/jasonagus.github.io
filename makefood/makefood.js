console.log("hello");

console.log("Welcome to my program.. call makeFood() with an array of the ingredients you have on hand.");
console.log ("Possible ingredients include: (\"rice\", \"cheese\", \"mushrooms\", \"eggs\", \"vegetables\"");

var reciperc = "www.chow.com/recipes/19065-cheesy-baked-rice";
var reciperm = "http://ohmyveggies.com/recipe-creamy-wild-rice-mushroom-soup/";
var recipere = "http://allrecipes.com/recipe/egg-fried-rice/";
var reciperv = "http://www.tasteofhome.com/recipes/rice-vegetable-salad"; 
var recipecm = "http://www.foodnetwork.com/recipes/four-cheese-stuffed-silly-mushrooms-recipe.html";
var recipece = "http://www.foodnetwork.com/recipes/cheese-omelet-recipe.html";
var recipecv = "http://www.crystalfarmscheese.com/recipes/steamed-vegetables-with-cheese-sauce-recipe/3091";
var recipeme = "http://www.vegrecipesofindia.com/mushroom-cheese-omelette-recipe-mushroom-cheese-omelette/";
var recipemv = "http://www.100daysofrealfood.com/2014/02/13/recipe-creamy-mushroom-vegetable-soup-barley/";
var recipeev = "http://www.100daysofrealfood.com/2014/02/13/recipe-creamy-mushroom-vegetable-soup-barley/"; 

var recipercm = "http://allrecipes.com/recipe/mushroom-rice/"; 
var reciperce = "http://allrecipes.com/recipe/mushroom-rice/"; 
var recipercv = "http://allrecipes.com/recipe/mushroom-rice/"; 
var reciperme = "http://www.tlc.com/tv-shows/take-home-chef/recipes/stir-fried-rice-egg-mushrooms-peas.htm"; 
var recipermv = "http://www.tasteofhome.com/recipes/veggie-mushroom-rice";
var reciperev = "http://www.tasteofhome.com/recipes/veggie-mushroom-rice";
var recipecme = "http://food52.com/recipes/24645-baked-eggs-with-mushrooms-and-gruyere";
var recipecmv = "http://www.vegetariantimes.com/recipe/mushroom-cheese-and-vegetable-strudel/";
var recipecev = "http://www.tasteofhome.com/recipes/cheesy-vegetable-egg-dish";
var recipemev = "http://www.epicurious.com/recipes/food/views/Fluffy-Baked-Eggs-with-Roasted-Vegetable-Hash-233975";

var recipercme = "http://thehealthyfoodie.com/mushroom-spinach-and-brown-rice-casserole/";
var recipercmv = "http://www.foodnetwork.com/recipes/tyler-florence/mushroom-risotto-recipe.html";
var recipercev = "http://www.bbcgoodfood.com/recipes/2770/veggie-eggfried-rice";
var recipermev = "http://www.bbc.co.uk/food/recipes/spicyvegetarianeggfr_89094";
var recipecmev = "http://www.foodnetwork.com/recipes/ellie-krieger/broccoli-mushroom-and-cheese-breakfast-strata-recipe.html";

var recipercmev = "http://www.yummly.com/recipe/Vegetable-Bibimbap-Tweet-439835?columns=4&position=15%2F56";


function makeFood(ingredients) {

	if (ingredients[0] == "rice" && ingredients[1] == "cheese") {
		console.log("Cheesy Baked Rice Recipe: " + reciperc);
	}

	if (ingredients[0] == "rice" && ingredients[1] == "musrooms") {
		console.log("Rice and Mushroom Soup Recipe: " + reciperm);
	}

	if (ingredients[0] == "rice" && ingredients[1] == "vegetables") {

		console.log("Rice Vegetable Salad Recipe: " + reciperv);
	}


	if (ingredients[0] == "cheese" && ingredients[1] == "mushrooms") {

	console.log("Cheesy Stuffed Mushrooms Recipe: " + recipecm);
	}


	if (ingredients[0] == "cheese" && ingredients[1] == "eggs") {

	console.log("Cheese Omelet Recipe: " + recipece);
	}


	if (ingredients[0] == "cheese" && ingredients[1] == "vegetables") {

	console.log("Steamed Vegetables with Cheese Recipe: " + recipecv);
	}


	if (ingredients[0] == "mushrooms" && ingredients[1] == "eggs") {

	console.log("Mushroom Omelet Recipe: " + recipeme);
	}


	if (ingredients[0] == "mushrooms" && ingredients[1] == "vegetables") {

	console.log("Creamy Mushroom Vegetable Soup Recipe: " + recipemv); 
	}


	if (ingredients[0] == "eggs" && ingredients[1] == "vegetables") {

	console.log("Vegetable Omelet Recipe: " + recipeev);
	}


	if (ingredients[0] == "rice" && ingredients[1] == "cheese" && ingredients[2] == "mushrooms") {

	console.log("Cheesy Mushroom Rice Recipe: " + recipercm);
	}


	if (ingredients[0] == "rice" && ingredients[1] == "cheese" && ingredients[2] == "eggs") {

	console.log("Cheesy Rice Recipe: " + reciperce);
	}

	if (ingredients[0] == "rice" && ingredients[1] == "cheese" && ingredients[2] == "vegetables") {

	console.log("Rice Vegetable Skillet Recipe: " + recipercv);
	}

	if (ingredients[0] == "rice" && ingredients[1] == "cheese" && ingredients[2] == "eggs") {

	console.log("Cheesy Rice Recipe: " + reciperce);
	}

	if (ingredients[0] == "rice" && ingredients[1] == "mushrooms" && ingredients[2] == "eggs") {

	console.log("Stir Fried Mushroom Rice Recipe: " + reciperme);
	}

	if (ingredients[0] == "rice" && ingredients[1] == "mushrooms" && ingredients[2] == "vegetables") {

	console.log("Veggie Mushroom Rice Recipe: " + recipermv);
	}

	if (ingredients[0] == "rice" && ingredients[1] == "eggs" && ingredients[2] == "vegetables") {

	console.log("Special Fried Rice Recipe: " + reciperev);
	}


	if (ingredients[0] == "cheese" && ingredients[1] == "mushrooms" && ingredients[2] == "eggs") {

	console.log("Baked Eggs with Mushrooms Recipe: " + recipecme);
	}


	if (ingredients[0] == "cheese" && ingredients[1] == "mushrooms" && ingredients[2] == "vegetables") {

	console.log("Wholesome Strudel Recipe: " + recipecmv);
	}


	if (ingredients[0] == "cheese" && ingredients[1] == "eggs" && ingredients[2] == "vegetables") {

	console.log("Cheesy Pie Recipe: " + recipecev);
	}


	if (ingredients[0] == "cheese" && ingredients[1] == "mushrooms" && ingredients[2] == "vegetables") {

	console.log("Wholesome Strudel Recipe: " + recipecmv);
	}


	if (ingredients[0] == "mushrooms" && ingredients[1] == "eggs" && ingredients[2] == "vegetables") {

	console.log("Fluffy, Roasted Vegetable Hash Recipe: " + recipemev);
	}



	if (ingredients[0] == "rice" && ingredients[1] == "cheese" && ingredients[2] == "mushrooms" && ingredients[3] == "eggs") {

	console.log("Mushroom Egg Casserole Recipe: " + recipercme);
	}


	if (ingredients[0] == "rice" && ingredients[1] == "cheese" && ingredients[2] == "mushrooms" && ingredients[3] == "vegetables") {

	console.log("Mushroom Risotto Recipe: " + recipercmv);
	}


	if (ingredients[0] == "rice" && ingredients[1] == "cheese" && ingredients[2] == "mushrooms" && ingredients[3] == "vegetables") {

	console.log("Mushroom Risotto Recipe: " + recipercmv);
	}

	if (ingredients[0] == "rice" && ingredients[1] == "cheese" && ingredients[2] == "eggs" && ingredients[3] == "vegetables") {

	console.log("Elaborate Veggie Egg Fried Rice Recipe: " + recipercev);

	}

	if (ingredients[0] == "rice" && ingredients[1] == "mushrooms" && ingredients[2] == "eggs" && ingredients[3] == "vegetables") {

	console.log("Authentic Thai Salad Recipe: " + recipermev);

	}

	if (ingredients[0] == "cheese" && ingredients[1] == "mushrooms" && ingredients[2] == "eggs" && ingredients[3] == "vegetables") {

	console.log("Breakfast Strata Recipe: " + recipecmev);

}


if (ingredients[0] == "rice" && ingredients[1] == "cheese" && ingredients[2] == "mushrooms" && ingredients[3] == "eggs" && ingredients[4] == "vegetables") {

	console.log("Congratulations! You must be a master chef. Use your ingredients to try out the Vegetable Bibimap Recipe: " + recipercmev);

} 


}


