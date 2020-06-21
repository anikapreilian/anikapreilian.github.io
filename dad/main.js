// write code below
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
var src = [
  "https://cdn.glitch.com/875770fb-ce7c-4d9e-bc10-80f8080a45f3%2Flisasquares%20copy.png?v=1574308396502",
  "https://cdn.glitch.com/875770fb-ce7c-4d9e-bc10-80f8080a45f3%2Fpooh.png?v=1574782284413",
  "https://cdn.glitch.com/875770fb-ce7c-4d9e-bc10-80f8080a45f3%2Fpony.png?v=1574782284190",
];
*/

var src = [
  {
    link: "hazel2.png",
    className: "sticker" 
  },
  {
    link: "hazel.png",
    className: "sticker" 
  },
   {
    link: "disco.png",
    className: "sticker" 
  },
  {
    link: "disco3.png",
    className: "sticker" 
  },
    {
    link: "disco2.png",
    className: "sticker" 
  },
    {
    link: "hazel3.png",
    className: "sticker" 
  },
  
  ];



window.addEventListener("click", function(event) {
  console.log(event);

  // get the coordinates of the click from the event variable and store in x and y variables
  var x = event.pageX;
  var y = event.pageY;
  // create an <img /> element in javascript and store in a variable
  var img = document.createElement("img");

  // add a class to <img />
  

  // style the <img /> top and left position using x and y
  img.style.left = x + "px";
  img.style.top = y + "px";

  var randomIndex = randomNumber(0, src.length-1);
  var randomImage = src[randomIndex];
  
  // edit the src atttribute to be the link to your file
  img.src = randomImage.link;
img.classList.add(randomImage.className);
  // append the <img /> to <body>

  document.body.append(img);
});
