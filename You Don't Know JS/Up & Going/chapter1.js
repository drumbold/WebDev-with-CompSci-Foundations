const PHONE_PRICE = 400.00;
const ACCESSORY_PRICE = 50.00;
const TAX_RATE = 0.085;
const SPENDING_THRESHOLD = 3000.00;

var balance;
var total = 0;

balance = prompt("What is your bank account balance?");

// buy phones and accessories until we have no more money
while (total < balance) {
	total = total + PHONE_PRICE;
	
	if (total < SPENDING_THRESHOLD - ACCESSORY_PRICE) {
		total  = total + ACCESSORY_PRICE;
	}
}

console.log(total);

addTax(total);

if (total <= balance) {
	console.log("You just spent " + priceFormat(total));
}
else {
	console.log("You can't afford that.");
}

function addTax(total) {
	// calculate the total + tax
	return total + (total * TAX_RATE);
}

function priceFormat(total) {
	// explicitly convert total to a string
	return "$" + total.tofixed( 2 );
}