let totalPurchase = prompt("Enter Your Total Purchase");
totalPurchase = Number(totalPurchase);

let discount = totalPurchase < 1000
    ? console.log( `purchase amount = ${totalPurchase}`) 
    : totalPurchase >= 1000 && totalPurchase <= 5000 ? 
    console.log(`total amount including 5% discount = ${totalPurchase - totalPurchase * 0.05}` )
    : console.log (`total amount including 10% discount = ${totalPurchase - totalPurchase * 0.10}`);