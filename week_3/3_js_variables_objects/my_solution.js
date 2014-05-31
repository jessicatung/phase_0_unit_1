// I paired [by myself, with:] on this challenge.

// Paired with:_Igor Gaelzer______________________
// Write your code below.

  var secretNumber = 1;
  var secretNumber = 7;
  var password = "password";
  var password = "just open the door";
  var allowedIn = false;
  var members = ["John", 2, 3, "Mary"];


// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// I spent the first part of this challenge just trying to figure out what the hell I was supposed to do! Haha! The readme wasn't very clear, and when I opened the my_solution.js file, my eyes ignored all the commented text and immediately went to the test code. Luckily, Igor pointed out that I was supposed to enter code at line 6, and NOT TOUCH the test code (which I saw was in the comments, after he pointed it out). Really glad that Igor was pairing with me on this, he definitely saved me some time! 

// Once I understood what the challenge was asking of me, things went pretty smoothly. I had a small hiccup on Test 6, when allowedIn should be == false. I had passed Test 5 by assigning it the boolean value of true. It took me a second to figure out how to pass Test 6, and I realized I could just change allowedIn = false, and it would pass for both Test 5 AND 6. Et voila!

// I feel fairly comfortable with the learning competencies in this challenge. I'm glad that we got to write some javascript code, since the last challenge was super fun but didn't really help with my conceptualization of javascript. 

// Igor also taught me some neat shortcuts to use in the terminal! Using tab to help autocomplete file names, and using the up arrow to repeat the last command. SWEET. 
// 
// 
// 


// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

