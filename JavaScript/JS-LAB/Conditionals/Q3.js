let preferredUnit = prompt("Enter Celsius or Fahrenheit");
if(preferredUnit === "Celsius")
{
    console.log("Displaying temperature in Celsius (°C).")
}

else if(preferredUnit === "Fahrenheit")
{
    console.log("Displaying temperature in Fahrenheit (°F).");
}

else {
    console.log("invalid");
}