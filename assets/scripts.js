let currentPrice=0, itemCount=0

function addToCart(cookie) {

    /*
        peanut butter: 20
        sandies: 30
        party press: 35
        chocolate chip: 25
    */

    console.log('The user is adding this type of cookie to their cart: ' , cookie) 

    console.log(itemCount++) //adds 1 to the itemCount variable and displays in the console 

    if(cookie == 'peanut butter')
        currentPrice = currentPrice + 20;
    if(cookie == 'sandies')
        currentPrice = currentPrice + 30;
    if(cookie == 'party press')
        currentPrice = currentPrice + 35;
    if(cookie == 'chocolate chip')
        currentPrice = currentPrice + 25;
    console.log(currentPrice);
   //add the correct price to the currentPrice variable
    
}

function checkout() {
    console.log('User is checking out.')
    alert('You have ' + itemCount + ' item(s) in your cart. Your total cost is $' + currentPrice + '.');
    //alert('The total cost is $' + currentPrice + '.');
    //Let your customer know how many items they are purchasing and the price
    
}