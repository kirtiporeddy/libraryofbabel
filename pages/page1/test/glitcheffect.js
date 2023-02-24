$(document).ready(function(){
    animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
    animateDiv('.d');
    animateDiv('.e');
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
      animateDiv(myclass);        
    });




    
};

// Define the characters to use for glitching
const glitchChars = "&^%(*&^%$#@123456788901234567--;;;>.,<?:;{[}]|\!~``HYTRESDCVBNMJUYTRDSASDF$#@!";

// Get all elements with class "para"
const elements = document.querySelectorAll(".para");

// Define a function to randomly replace some characters in a string with glitch characters
function glitchString(str) {
  // Convert the string to an array of characters
  const chars = str.split("");
  // Choose a random number of indices to replace
  const numGlitches = Math.ceil(chars.length * 0.01);
  // Choose random indices to replace with glitch characters
  const glitchIndices = new Set();
  while (glitchIndices.size < numGlitches) {
    glitchIndices.add(Math.floor(Math.random() * chars.length));
  }
  // Replace the chosen indices with random glitch characters
  for (const index of glitchIndices) {
    chars[index] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
  }
  // Convert the array of characters back to a string
  return chars.join("");
}

// Loop over the elements and glitch their text
elements.forEach((element) => {
  // Save the original text
  const originalText = element.innerText;
  // Define a function to continuously glitch the text
  function glitch() {
    // Generate a glitched version of the original text
    const glitchedText = glitchString(originalText);
    // Set the element's text to the glitched version
    element.innerText = glitchedText;
    // Schedule the next glitch in a random amount of time
    setTimeout(glitch, Math.random() * 0.001);
  }
  // Start glitching the text
  glitch();
});
