// 24. Function

// function = define code once, and use it many times.
//            to perfome some code, call the funtion name.

/*
// contoh 1
let userName = "Putra Samosir";
let age = 19;

happyBirthday();

function happyBirthday(){
    console.log("Happy birhtday to you!");
    console.log("Happy birhtday dear", userName);
    console.log("You are", age," years old");
}
*/

// contoh 2
startProgram()

function startProgram(){
    let userName = "Putra Samosir";
    let age = 19;

    happyBirthday(userName, age);
}

function happyBirthday(userName, age){
    console.log("Happy birhtday to you!");
    console.log("Happy birhtday dear", userName);
    console.log("You are", age," years old");
}
