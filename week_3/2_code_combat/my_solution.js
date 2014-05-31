// I worked on this challenge [by myself, with:] by myself
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 

// Rescue Mission
 // move down x2
 // move right
 // move up x2
 // move right x2
 // move down
 // ATTACK!
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

//Grab the Mushroom
 // move up
 // move right
 // move left
 // move up
 // ATTACK!
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

//Drink Me
 // ATTACK!
 // move right
 // move down
 // move up
 // move right
 // ATTACK!
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//Taunt the Guards
 // move right
 // bust down the door
 // move right
 // taunt gaurd
 // move left x2
 // yell attack
 // move right
 // say follow me to Phoebe
 // move right x2
 // move up
 // move right
 // taunt guards
 // move down
 // move right
 // move up
 // move right
 this.moveRight();
 this.bustDownDoor();
 this.moveRight();
 this.moveRight();
 this.say("Hey there!");
 this.moveLeft();
 this.moveLeft();
 this.say("Attack!");
 this.moveRight();
 this.say("Follow me.");
 this.moveRight();
 this.moveRight();
 this.moveUp();
 this.moveRight();
 this.say("Hey there!");
 this.moveDown();
 this.moveRight();
 this.moveUp();
 this.moveRight();

//It's a Trap!
 // move down x2
 // taunt ogre
 // move up x2
this.moveDown();
this.moveDown();
this.say("You smell!");
this.moveUp();
this.moveUp();

//Break the Prison
 //free William
 // skip Krogg
 // free Lucas
 // skip Brack
 // free Marcus
 // skip MARCUS
 // free Gordon
if(name === "William")
    return true;
if(name === "Krogg")
    return false;
if(name == "Lucas")
    return true;
if (name == "Brack")
    return false;
if (name == "Marcus")
    return true;
if (name == "MARCUS")
    return false;
if (name == "Gordon")
    return true;

//Taunt
 // taunt ogre x4
 this.say("Hey!");
 this.say("You smell!");
 this.say("Really bad!");
 this.say("Yeah, you heard me!");

//Cowardly Taunt
 //move to coord where ogres can hear
 //taunt ogres
 //move to coord where safe
 this.moveXY(53, 28);
 this.say("Over here!");
 this.moveXY(70, 10);

//Commanding Followers
 //tell troops to follow
 //move to coord to attack
 //tell troops to attack
 //move to coord where safe
 this.say("Follow!");
 this.moveXY(63, 40);
 this.say("Attack!");
 this.moveXY(80, 39);

//Mobile Artillery
 //move to coord to hit first batch of ogres
 //attack coord x2
 //move to coord to hit second batch of ogres
 //attack coord x2
 this.moveXY(41, 44);
 this.attackXY(46, 62);
 this.attackXY(46, 55);
 this.moveXY(60, 27);
 this.attackXY(69, 56);
 this.attackXY(63, 38);

// Release 3
// this 
	//refers to the global object. Like a keyword shortcut, to refer to an object. Analogous to
	//the way we use pronouns. 
// () 
	//Javascript syntax requires a function to have a pair of () even if the function doesn't 
	//need any arguments. Next to the function name, you'll always have (). 
	//When you send/receive parameters, we use ().
// ; 
	//the ; ends every javascript statement.

// Reflection:
// Write your reflection here.

// I had fun with this challenge! It was more time consuming than I thought, since I had to write out the pseudocode, then fiddle with the actual code until it worked, then copy and paste it. The most annoying part was trying to locate the correct coordinates for either the move or attack functions. 

// While it was super fun, I don't know how much it helped my javascript abilities. I didn't get a chance to do much javascript during prep (oops, dammit!) so I am definitely way nervous about this week's solo challenges. Especially since I got a late start on this week's challenges. It's 1:30AM and I am only finishing Challenge 2 :(

// At the moment I feel relatively ok with this section's learning competencies, but who knows! As I said, while fun, I'm not sure how much substance I learned in this section. 