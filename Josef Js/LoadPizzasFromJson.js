const prompt = require('prompt-sync')();
const data = require('./PizzaTypes.json'); //https://www.tutorialspoint.com/how-to-import-local-json-file-data-to-my-javascript-variable

console.log(data);

//Så de här pizzorna i min Json kan jag köpa som objekts. Dessa kan jag då också sätta i min egna lista.
myShoppingcart = [];

console.log(data.Pizzas[0].name);

answer = prompt("Which pizza do you whant ");

for(let i = 0; i < data.Pizzas.length; i++)
{
    if(answer == data.Pizzas[i].name)
    {
        myShoppingcart.push(data.Pizzas[i]);
    }
}

//Generate buttons from Json
console.log("you bought " + myShoppingcart[0].name);
