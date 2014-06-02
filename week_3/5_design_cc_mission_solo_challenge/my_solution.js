// This is a solo challenge

// Your mission description:
// 
/* You are the bassist for a thrash metal band. You are running late, and just arrived at the door 
of the venue, where your band is playing a show tonight! The guitarist has already started with the intro riffs,
you need to get your ass up there by the time the drummer counts in the rest of the band! GO GO GO!

Your mission objectives, should you accept them: 
Get through the teaming crowd of head-bangers. 
Grab the beer that your roadie is holding for you by the stage, and if it doesn't suck, chug it. 
Get on stage. 
Grab your axe. 
Shred!
*/
// 

// Pseudocode
// 
// Define a variable rockstar using object literal notation and assign this var different properties:
/*
	Give rockstar a name property - (RIP Cliff Burton!)
	Give rockstar an id property of bassist
	Give rockstar an age property 
*/
// Get through the head-banging crowd:
/*
	move up
	move right
	move up 2X
	move left 2x
	move up 
*/
// Beer me:  
/*
	if beer is cold
		chug it
	else
		reject it
*/
// Live up to your namesake:
/*
	jump up to the stage
	grab your bass
	shred
*/
//

// Initial Code

var rockstar = {
	name: "Cliff",
	id: "bassist",
	age: 24;
};

function partCrowd() {
	this.moveUp();
	this.moveRight();
	this.moveUp();
	this.moveUp();
	this.moveLeft();
	this.moveLeft();
	this.moveUp();
}

function beerMe(){
	if (beerCold = true){
		this.chugBeer();
	}
	else {
		console.log("This beer is warm, guess I have to shred sober!");
	}
}

function rockOut(){
	this.moveUp();
	this.grabAxe();
	this.shred();
}

// 
/* Refactored Code  */
//

console.log("Get the bassist to the stage so he can shred!");

var rockstar = {
	name: "Cliff",
	id: "bassist",
	age: 24;
};

function partCrowd(rockstar) {
	rockstar.moveUp();
	rockstar.moveRight();
	rockstar.moveUp();
	rockstar.moveUp();
	rockstar.moveLeft();
	rockstar.moveLeft();
	rockstar.moveUp();
};


function beerMe(beerCold, rockstar){
	if (beerCold = true){
		rockstar.chugBeer();
	}
	else {
		console.log("This beer is warm, guess I have to shred sober!");
	}
};

function rockOut(rockstar) {
	rockstar.moveUp();
	rockstar.grabAxe();
	rockstar.shred();
};

function moveUp(){ /* these functions should be populated with whatever code performs this mvmt */
};

function moveRight() {
};

function moveLeft() {
};

function chugBeer() {
};

function grabAxe() {
};

function shred() {
	console.log("da duh da WAAAHHH wah wah bum baaaa da baa!");
};





// Reflection
// 
/*
Ugh. This solo challenge totally kicked my ass. I feel like there was a huge knowledge gap between solo challenge 4 (which I found totally doable) and this solo challenge, which I feel like was totally beyond my skill level. 

Code Combat was fun, but I feel like examining it didn't give me much insight into HOW it all goes together. You have a character Tharin. You have mission objectives. You have functions like plan(). Inside that plan(), you have a bunch of movements which are conveyed through constructors: this.moveUp(); this.attackNearbyEnemy();
This is all fine and dandy, but HOW does Tharin and this plan() connect?! I feel like my knowledge gaps of JS are huge, because I can't conveive as to how they connect. If you hover over [this] in code combat, it shows that [this] seemingly refers to an object called Thang, with the key value id: Tharin, etc etc. Cool... But... huH?! I did a little research on constructors, and found that if the [this] object is used within a function closure, it will refer to the object that caused the function invocation. But nowhere on code combat does it show this?  So, the [this] refers to the object that caused the function invocation, which should be Tharin, but it doesn't show this in practice anywhere in the code combat code. BAH!

I tried my best. I created a character, rockstar, which I declared as a var using object literal notation, and assigned it a bunch of properties. Now... I have to get the character to meet the mission objectives, to move. How? My first initial code attempt was to use the this.moveUp() function style from code combat, but I knew that the [this] was supposed to refer to the object that caused the function invocation, which was NOT rockstar in the functions I created. So, that was a problem. 

In refactoring, I attempted to resolve this issue by passing rockstar to the functions as parameters, and changing the [this] to rockstar. I also realized that my moveUp() etc functions needed to be defined as well... somewhere. I don't know HOW to move up my character (hence my leaving those functions blank inside), but I know they needed to be defined somewhere, if they were being called. *SIGH*

I wish I had more time to research, and understand more. I plan on looking further into these resources:
http://stackoverflow.com/questions/133973/how-does-this-keyword-work-within-a-javascript-object-literal
http://pivotallabs.com/javascript-constructors-prototypes-and-the-new-keyword/

Sadly, I didn't have any real aha moments. I don't know if I'm completely overthinking this challenge, or not thinking enough? I don't know why I'm finding JS so conceptually difficult. I haz a sad.
*/ 
// 