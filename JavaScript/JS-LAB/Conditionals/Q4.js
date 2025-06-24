let totalSpending = prompt("Enter Total Spending");
let tier=""
if(totalSpending>1000)
{
    tier="Platinum";
}
else if(totalSpending>500 && totalSpending<=1000)
{
   tier="Gold"; 
}

else if((totalSpending>100 && totalSpending<=500)) {
    tier="Silver";
}

else 
{
    tier="Bronze";
}

console.log(`Customer's total spending: ${totalSpending}. Loyalty Tier: ${tier}.`);