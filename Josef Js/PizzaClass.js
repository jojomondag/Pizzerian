//Info on Node.js 
const prompt = require('prompt-sync')();
const data = require('./PizzaToppings.json'); 

customerCart = [];

class Ingrediens {
    constructor(type, price) {
      this.type = type;
      this.price = price;
    }
}
class Pizza{
  ingredientsOnPizza;

  constructor(name)
  {
    this.name = name;
    this.ingredientsOnPizza = [];
  }
  AddIngrediens(topping, price)
  {
    this.ingredientsOnPizza.push(new Ingrediens(topping, price));
  }
  DisplayIngrediens()
  {
    for (let i = 0; i < this.ingredientsOnPizza.length; i++) {
      console.log(this.ingredientsOnPizza[i].type + " " + this.ingredientsOnPizza[i].price);
    }
  }
}

function WelcomeScreen()
{
  console.log("Hi and welcome too pizza creator");
  console.log("1: We have som choices do you whant to order pizza from our menu");
  console.log("2: Do you whant to create a custom made pizza?");
}
WelcomeScreen();

const answer = prompt('Press 1 or 2');

if(answer == "1")
{
  console.log("This is our Menu.");
}
else if(answer == "2")
{
  console.clear();
  console.log("Plz choose from our list of topings.");
  console.log();
  
  CreateCustomPizza("MARGHARETA");

  //Here i wanna load all toppings from a Json file
  DisplayTopingsFromJson();

  //Here i wanna go into topping menu. And modify the created pizza.

}

DisplayPizzas();

function DisplayTopingsFromJson()
{
  console.log(data);
  //Colour example.
  console.log('\x1b[36m%s\x1b[0m', 'I am cyan');
}

function CreateCustomPizza(nameOfPizza)
{
  //Skapa en custom Pizza och lägg till kundkorg.
  //Skapa en temp pizza i skapandet som jag seda pushar upp till customer cart sist.
  theNewPizza = new Pizza(nameOfPizza);
  //Lägg på ingredienser till Pizzans Lista.
  theNewPizza.ingredientsOnPizza.push(new Ingrediens("tomatsås", 5));
  theNewPizza.ingredientsOnPizza.push(new Ingrediens("ost", 5));

  addingTopping = true;

  //Bara för test inte loop senare!
  //while(addingTopping)
  //{


  //}
  
  //Skapa en custom Pizza och lägg till kundkorg.
  customerCart.push(theNewPizza);
}
function DisplayPizzas()
{
  for (let i = 0; i < customerCart.length; i++) {
    console.log(customerCart[i].name);
    console.log("And it has there ingredients");
    for(let i2 = 0; i2 < customerCart[i].ingredientsOnPizza.length; i2++){
      console.log(customerCart[i].ingredientsOnPizza);
    }
  }
}











