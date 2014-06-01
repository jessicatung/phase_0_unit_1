
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown",
};



// __________________________________________
// Write your code below.
var adam = {};
adam.name = "Adam";
terah.spouse = adam;
terah.weight = 125;
terah.eyeColor = undefined;
terah.spouse.spouse = terah;
terah.children = {};

// terah.children.carson;
// terah.children.carson.name;
// terah.children.carson.name = "Carson";

// Add a carson property to value of terah children property and assign THAT the value of an obj
// with the property name with a value of "Carson"

terah.children.carson = {name: "Carson"};
terah.children.carter = {name: "Carter"};
terah.children.colton = {name: "Colton"};
adam.children = terah.children;

// __________________________________________
// Reflection: Use the reflection guidelines

//This challenge was definitely not as easy as the version in challenge 3. At least I knew what the challenged wanted me to do though, since I already worked through that confusion in challenge 3! My strategy was to take the pseudocode provided, and to try to change it as exactly as possible into actual code. 

//I had a moment where I attempted to go back and change the initial terah var, before I realized that I was NOT to touch that code, and only insert new code beneath it. That stumped me for a moment, when I was trying to figure out, "how the hell do I change terah's properties without touching the terah var?!" Then I looked back through the javascript_intro_lab that was provided to us at the beginning of this week's challenges. Looking through the Object Lieterals section, I found the Changing an Object section to be very helpful. There, I found how to change the property of an object by using |object.property = value;|

//From there, things went smoothly for a while. I had a short hiccup with changing Terah's eyeColor to undefined, but was able to figure that out quickly. I think I initially tried to make it an empty object, figuring that would check as undefined, but it didn't work that way. 

//My first real trouble hit when I got to pseudocode instruction 7. I tried to use the object.property methadology from above, to append a carson property and name property to the terah.children property, and assign that whole mess the value of "Carson". I kept getting an error message telling me "Cannot read property 'name' of undefined." You can see in my commented out section above, my attempts to work around this error message. 

//I went back and looked at the pseudocode wording very carefully. I realized that my |object.property.property.property = nameValue| strategy did NOT meet the pseudocode. That was my aha moment. The pseudocode said to add a carson property to the value of the terah children property and ASSIGN THAT (assign meaning "=", was how it came together in my poor befuddled brain) the value of an obj with the property name, the property name having a value of "Carson." SO, parsing that pseudocode into actual code went: |terah.children.carson = {name: "Carson"};| and m*therf*cking VOILA! It worked! Hallelujah! 

//I'm *still* a little confused as to why the |terah.children.carson.name = "Carson";| syntax I tried didn't work, and it'd be cool if someone could break that down for me.

//The rest of the challenge went smoothly.

//Since I am unfamiliar with JS in general, all of the above is considered "new skills and tricks" in my mind! As a side note, this is the first challenge I utilized the Pomodoro technique for. Gunnari had mentioned a Pomodoro timer app he bought, and how it really helped him. I second this notion, I really found it helpful. 


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)