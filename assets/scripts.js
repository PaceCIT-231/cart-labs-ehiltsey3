let currentPrice=0, itemCount=0

function addToCart(cookie) {

    /*
        peanut butter: 20
        sandies: 30
        party press: 35
        chocolate chip: 25
    */

    console.log('The user is adding this type of cookie to their cart: ' , cookie) 

    //document.getElementById("cartItems").innerText = itemCount;
    console.log(itemCount++); //adds 1 to the itemCount variable and displays in the console 
    document.getElementById("cartItems").innerText = itemCount;
    

    if(cookie == 'peanut butter')
        currentPrice = currentPrice + 20;
    if(cookie == 'sandies')
        currentPrice = currentPrice + 30;
    if(cookie == 'party press')
        currentPrice = currentPrice + 35;
    if(cookie == 'chocolate chip')
        currentPrice = currentPrice + 25;
    
    console.log(currentPrice);

    document.querySelector("span").innerHTML = "$" + currentPrice;
   //add the correct price to the currentPrice variable
    
}

function checkout() {
    console.log('User is checking out.')
    prompt("Enter your name:" + '\n' + "Enter your email:");
    currentPrice = 0;
    itemCount = 0;

    document.querySelector("span").innerHTML = "$" + currentPrice;
    document.getElementById("cartItems").innerText = itemCount;
    
    //alert('You have ' + itemCount + ' item(s) in your cart. Your total cost is $' + currentPrice + '.');
    
    //Let your customer know how many items they are purchasing and the price
    
}

function darkMode() {
	// add your code here
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";

}