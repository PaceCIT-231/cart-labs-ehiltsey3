const cart = {
    currentPrice: 0,
    items: [],
    addItem: function(cookie, price) {
        this.items.push(cookie); // add a cookie (string) to the items array

        this.currentPrice = this.currentPrice + price; //add the price (number) to the currentPrice properties

    },
    clear: function() {
        
        currentPrice = 0;
        this.items.length = 0;
        //reset the currentPrice and items properties
        
    },
    getSummary: function() {
        let summary = `<p>Number of Items: ${this.items.length}</p>
            <h4>Details</h4>
            <p>${this.items.join('<br>')}</p>
            <p>Total Price: $${this.currentPrice}</p>`
        return summary
    },
}

function addToCart(cookie) {

    /*
        peanut butter: 20
        sandies: 30
        party press: 35
        chocolate chip: 25
    */

    console.log('The user is adding this type of cookie to their cart: ' , cookie) 

    //documenst.getElementById("cartItems").innerText = itemCount;
    //console.log(itemCount++); //adds 1 to the itemCount variable and displays in the console 
    
    //this.items.length;

    if(cookie == 'peanut butter')
        cart.addItem(cookie, 20)
    if(cookie == 'sandies')
        cart.addItem(cookie, 30)
    if(cookie == 'party press')
        cart.addItem(cookie, 35)
    if(cookie == 'chocolate chip')
        cart.addItem(cookie, 25)
    
    document.getElementById("cartItems").innerText = cart.items.length;
    
    //console.log(currentPrice);

    //cart.currentPrice;
    document.querySelector("span").innerHTML = "$" + cart.currentPrice;
   
    //add the correct price to the currentPrice variable
    console.log(cart)
}

function checkout() {
    console.log('User is checking out.')
    document.getElementById("summary-body").innerHTML = cart.summary;
    document.getElementById("summary").style.display = "block";
    //prompt("Enter your name:" + '\n' + "Enter your email:");
    //currentPrice = 0;
    //itemCount = 0;
    cart.clear();


    document.querySelector("span").innerHTML = "$" + cart.price;
    document.getElementById("cartItems").innerText = cart.items.length;
    
    //alert('You have ' + itemCount + ' item(s) in your cart. Your total cost is $' + currentPrice + '.');
    
    //Let your customer know how many items they are purchasing and the price
    
}

function darkMode() {
	// add your code here
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";

}

function clearCart() {
    cart.clear();
    document.querySelector("span").innerHTML = "$" + cart.price;
    document.getElementById("cartItems").innerText = cart.items.length;
}

