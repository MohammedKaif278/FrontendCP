let userType = prompt("enter your Type");
let permission="";
if(userType=="moderator")
{
    permission="Moderate comments and manage user reports."
}

else if(userType==="administrator")
{
    permission="View all content, post comments, and create personal profiles."
}
else if(userType==="registered")
{
    permission="View all content, post comments, and create personal profiles."
}
else if(userType==="guest")
{
    permission="View public content only."
}

else 
{
    permission="Invalid Input"
}

console.log(`User Type: ${userType} . Permissions: ${permission}.`)