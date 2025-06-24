let vehicleSpeed = prompt("Enter the Vehicle Speed");
let speedtype ="";
if(vehicleSpeed<30){
    speedtype="slow";
}
else if(vehicleSpeed>=30 && vehicleSpeed<60){
    speedtype="normal";
}
else if(vehicleSpeed>=60 && vehicleSpeed<90){
    speedtype="fast";
}

else 
{
    speedtype="Excessive";
}

console.log(`Vehicle speed: ${vehicleSpeed}km/h. Classification: ${speedtype}`);
