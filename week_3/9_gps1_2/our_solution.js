// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Jessica Tung
//  2.Frank Shaw


// 0. "YOU SIGNED... WHO?!"
var timothy = { 
    name: "Timothy Smith",
    age: 50,
    quote: "Lets do it big!"
};
var james={
    name: "James Hetfield",
    age:50,
    quote: "YEahhhh!"
}; 

// 1. "Here they Come!"

var adam={
    name:"Adam Sandler",
    age:42,
    quote:"That's your home! Are you too good for your home?"
};

var kristen={
    name:"Kristen Bell",
    age:33,
    quote:"Do you wanna build a snowman?"
};

var jim={
    name:"Jim Carrey",
    age:52,
    quote:"...So you're telling me there's a chance? Ya!"
};


// 2. "TIME IS MONEY!"
var Client = function Client(name, age, quote){
    this.name=name;
    this.age=age;
    this.quote=quote;
};




//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");Hi
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 3. "SHOW 'EM OFF!"

var Client = function Client(name, age, quote){
    this.name=name;
    this.age=age;
    this.quote=quote;
    this.present=function(){
        console.log("Our client is " + name+".");
        console.log("Their age is " + age+"."); 
        console.log("Their fav quote is: " + quote); 
    };
};



// 4. "But wait, there's more!"
function Client(name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
  this.showQuote = function() {
  console.log(quote);
  }
}

// Hey Frank, so I see that you erased our original attempt at release 4, and came
// up with the solution above. I actually tweaked our original attempt,
// and was able to make it work, please see below. All we had to do was put 
// [james.quote] instead of just [quote] in the showQuote function! 

var james={
    name: "James Hetfield",
    age:50,
    quote: "YEahhhh!",
    showQuote: function(){
      console.log("Their fav quote is: " + james.quote);
    }
}; 


// 5.  ** BONUS **
// We didn't get a chance to attempt the bonus round during our GPS. 


//  6.  Your Reflection:
/*
So overall, I feel like the GPS went well. Frank and I were both pretty unfamiliar with JS before this week's challenges, so we were very evenly paired in terms of experience level. We definitely had to reach out to our guide many times for assistance. I feel like communication during the GPS was good, we were able to switch driver/navigator roles easily, and we both listened well.

We had to stop our pair session after 1.5 hours, because I had a bass lesson to get to, and Frank had a pairing session to attend. We both decided we'd think/research on our own (we got stuck on Release 4) and meet up again later to finish our GPS. I was a little upset that when I came back to our Stypi later, my partner had erased our original attempts at Release 4 and replaced it with something new. Luckily, I still had our original attempt in the developer console. I messaged him to let him know that I think I had figured out a way to tweak our original attempt at Release 4 and make it work, and that I want to call him up so we could discuss it and finish our GPS session. I decided I would go ahead and write my reflection now, and hopefully he will contact me back so that we can finish our GPS and discuss Release 4. 

Since it's a time crunch (it's already Sunday evening), we might not have time however, so we might just have to have 2 separate answers for Release 4. In the future, I hope that we can have better communication in this regard, I would like to keep our partnership's attempts at code on the stypi, rather than have the other partner erase and replace it without informing me.
*/

