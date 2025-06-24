let usrpass = prompt("Enter your password");
let password = usrpass.length;
if(password>=8)
{
    console.log("Password meets minimum length requirements. Good job!");
}
else{
    console.log("Password is too short. Please use at least 8 characters.");
}
