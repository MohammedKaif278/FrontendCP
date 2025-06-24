let tickets = parseInt(prompt("Enter the number of tickets "));
let personAge = parseInt(prompt("Enter the age of person "));

let perTicket = 300;
let totalCostBefore = tickets * perTicket;

let discount = ((personAge >= 60 && personAge <= 100) ? totalCostBefore * 0.20 : 0);
let totalCostAfter = totalCostBefore - discount;

alert("Total cost before discount: Rs. " + totalCostBefore.toFixed(2) + "\n"
 + "Discount amount: Rs. " + discount.toFixed(2) + "\n" + 
 "Total cost after discount: Rs. " + totalCostAfter.toFixed(2));
