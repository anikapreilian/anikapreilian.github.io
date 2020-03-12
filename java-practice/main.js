var firstName = "ani";
var lastName = "kapreilian";
var favNumber = 941;
var favNumberString = "941";
var vee = false;
var nameLetters = ['a','n','i'];
var dataTypes = ['ani',941,true];
var fullName = "ani" + " "+ "kapreilian";
var addNumbers = 50 + 50;
var firstItem = nameLetters[0]; 
var lastItem = nameLetters[2]; 
lastItem = nameLetters[nameLetters.length - 1];
var characters = "supercalifragilisticexpialidocious";
var students = 14;
var todayDate = new Date;
var hour = todayDate.getHours();
var day = todayDate.getDay();
var restaurant = ['first watch','drunken poet','kitchen sink'];
var animals = ['bunny','cat','dolphin'];
var places = ['mud','park','apartment'];
var pokemon = ['pikachu','squirtle','charmander'];
var arrayOfArrays = [restaurant, animals, places, pokemon];


console.log("my name is", firstName);
console.log("my favorite number is", favNumber);
console.log("my favorite number is", favNumberString);
console.log("i hate vee", vee);
console.log("my name is made of the letters", nameLetters);
console.log("this array contains 3 data types", dataTypes);
console.log("my full name is", fullName);
console.log("50 + 50 =", addNumbers);
console.log("this is the first letter of my name", firstItem);
console.log("this is the last letter of my name", lastItem);
console.log("the word supercalifragilisticexpialidocious has this many characters", characters.length);
console.log("the length of characters in your first name is equal to the length of characters in your last name", firstName.length == lastName.length);


if ( students == 14 ) {
  console.log("all students are here");
} else {
  console.log("not all students are here");
}

for ( var i = 0; i < nameLetters.length; i++ ) {
  console.log('characters in my name ' , nameLetters[i]);
}

if ( hour == 18 ) {
  console.log("current time is between 7pm and 9:40pm");
} else {
  console.log("current time is NOT between 7pm and 9:40pm");
}




if ( day == 5 ) {
  console.log("it is friday!");
} else if ( day == 6 )  {
  console.log("it is saturday!");
} else if ( day == 7 )  {
  console.log("it is sunday!");
} else if ( day == 1 )  {
  console.log("it is monday!");
} else if ( day == 2 )  {
  console.log("it is tuesday!");
} else if ( day == 3 )  {
  console.log("it is wednesday!");
} else if ( day == 4 )  {
  console.log("it is thursday!");
} 


console.log("my favorite restaurants are", restaurant);
console.log("my favorite animals are", animals);
console.log("my favorite places in nyc are", places);
console.log("my favorite pokemon are", pokemon);
console.log("this is an array of my favorite things", arrayOfArrays);

for ( var i = 0; i < arrayOfArrays.length; i++ ) {
  console.log( ' loop through array of arrays ' + arrayOfArrays[i] );
}
















