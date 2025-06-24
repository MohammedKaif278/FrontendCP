let costPrice= parseFloat(prompt("Enter cost price"));
let profitPercent = parseFloat(prompt("Enter profit percentage"));
profit = (profitPercent / 100) * costPrice;

let sellingPrice= costPrice+profit;

let vatPercent = parseFloat(prompt("Enter your vat"));
vat = (vatPercent/100)*sellingPrice;

let serviceChargePercent = parseFloat(prompt("Enter your Service Charge"));
serviceCharge = (serviceChargePercent/100)*sellingPrice;

let totalSellingPrice = sellingPrice + vat + serviceCharge;

console.log(`Cost Price: Rs. ${costPrice.toFixed(2)}

			Profit (${profitPercent}%): Rs. ${profit.toFixed(2)}

			Selling Price (without VAT & Service Charge): Rs. ${sellingPrice.toFixed(2)}

			VAT (${vatPercent}%): Rs. ${vat.toFixed(2)}

			Service Charge (${serviceChargePercent}%): Rs. ${serviceCharge.toFixed(2)}
            
			Total Selling Price (with VAT & Service Charge): Rs. ${totalSellingPrice.toFixed(2)}`);