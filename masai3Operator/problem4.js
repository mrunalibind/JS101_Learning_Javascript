//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let reg_username = "mrunali@123";
let reg_password= 12345;

let enter_username = "mrunali@123";
let enter_password = 12345;

if(reg_username==enter_username){
  if(reg_password==enter_password){
    console.log("Login Successfully");
  }
  else{
    console.log("Incorrect Password");
  }
}
else{
  console.log("Incorrect Username");
}