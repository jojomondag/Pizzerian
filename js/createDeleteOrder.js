let ItalianPizza = 0;
let GreekPizza = 0;
let SvenskPizza= 0;

function ItalianPizzaFunc(number)
{
    ItalianPizza = ItalianPizza + number;

    if(ItalianPizza <= 0)
    {
        document.getElementById("removeItalianPizzaButton").hidden = true;
    }
    else
    {
        document.getElementById("removeItalianPizzaButton").hidden = false;
    }
    update();
}
function GreekPizzaFunc(number)
{
    GreekPizza = GreekPizza + number;

    if(GreekPizza <= 0)
    {
        document.getElementById("removeGreekPizzaButton").hidden = true;
    }
    else
    {
        document.getElementById("removeGreekPizzaButton").hidden = false;
    }
    update();
}
function SvenskPizzaPizzaFunc(number)
{
    SvenskPizza = SvenskPizza + number;

    if(SvenskPizza <= 0)
    {
        document.getElementById("removeSvenskPizzaButton").hidden = true;
    }
    else
    {
        document.getElementById("removeSvenskPizzaButton").hidden = false;
    }
    update();
}
function update()
{
    document.getElementById("ItalianPizza").innerText = "Italian pizza: " + ItalianPizza;
    document.getElementById("GreekPizza").innerText = "Greek pizza: " + GreekPizza;
    document.getElementById("SvenskPizza").innerText = "Svensk pizza: " + SvenskPizza;

    document.getElementById("summa").innerText = "Summa: " + (GreekPizza * 195 + ItalianPizza * 155 + SvenskPizza * 99);
}
function buy()
{

}


//https://stackoverflow.com/questions/4427094/how-can-i-duplicate-a-div-onclick-event--!

//www.tutorialspoint.com/javascript-sum-function-on-the-click-of-a-button
//var tempElement = document.getElementById("Total");
//Total.innerHTML = parseInt(fValue.innerHTML) +
//parseInt(ammountTooAdd);