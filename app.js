// Step 1: Initialize favorite number
let favoriteNumber = 7; // You can replace this with any number of your choice

// Step 2: Ask the user to input a number
let guessedNumber = parseInt(prompt("Guess the number:"));

// Step 3: Compare the guessed number with the favorite number
if (guessedNumber < favoriteNumber) {
    console.log("too low");
} else if (guessedNumber > favoriteNumber) {
    console.log("too high");
} else {
    console.log("Congratulations!!!");
}

//exercise 2
const birthMonth = window.prompt("What is your birth month?")

const sanitizedMonth = birthMonth.slice(0, 3).
toLowerCase();
   
     switch (sanitizedMonth){ 
       case "sep":
       case "oct":
       case "nov":
       console.log("autumn") ;
       break;
       case "dec":
       case "jan":
       case "feb":
        console.log("winter");
       case "mar":
       case "apr":
       case "may":
        console.log("spring");
        break;
        case "jun":
        case "july":
        case "aug":
            vonsole.log("summer");
            break;
            default:
            console.log("I don't reconize that month...");



   //exercise 3
   let typeId = "01";
   let colorId = "PU";
   
   let type = "";
   let color = "";
   
   if (typeId == "01") {
     type = "Tank top";
   } else if (typeId == "02") {
     type = "T-Shirt";
   } else if (typeId == "03") {
     type = "Long Sleeve";
   } else if (typeId == "04") {
     type == "Sweat Shirt";
   } else {
     type = "Other";
   }
   switch (typeId) {
   case "01":
    type = "Tank top";
   break;
   case "02";
   type = "long sleeve";
   case "03":
    type = "Sweat Shirt";
    break;
   default:
    type = "other";
   }
   
   if(colorId){}
     case "BK":
     color = "black";""
     break;
     case"BL":
     color = "Blue";
     break;
     case "RD":
        color = "red"
        break;
        case "PU":
            color = "purple";
            break;
            default:
          }       color = "white";

   
switch(sizeId) {   
   case "S":
   size = "Small";
     break;
     case "M":
     size = "Medium";
        break;
        case "L";
    size = "Large";
    break;
    case "XL":
    size = "Extra Large";
    break;
    default:
        size = "One Size Fits All";

}
     
  
   
   //string Interpolation
   
   console.log(`Product: ${size} ${color} ${type}`);
   console.log("Product: " + size + "" + color +""+type);
   
   let userSize = prompt("What size would you like?");
     
    
    
       