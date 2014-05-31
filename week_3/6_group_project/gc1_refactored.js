// My role in the group is: Person 4, Refactor and Translate

// Here is my part of the challenge:

var sum = function(arrayA) {
	if(arrayA.length === 0) {
		return 0;
	} else {
		//return arrayA[0] + (eval(arrayA.join('+')) - arrayA[0]); // This seemed overcomplicated to me. Why not just simply sum all the numbers?
		return eval(arrayA.join('+')); 
	}
};


var mean = function(arrayB) {
	if(arrayB === 0) {
		return 0;
	} else {
		//return eval(arrayB.join('+')) / arrayB.length; // We can use the function sum we just created here
		return sum(arrayB) / arrayB.length;	
	}
};


var median = function(arrayC) {
	arrayC.sort();
	var middle = arrayC.length / 2;
	//if((arrayC.length % 2) !== 0) {
	//	return arrayC[middle - 0.5]; 
	//} else {
	//	return (arrayC[middle] + arrayC[middle - 1]) / 2;
	//}
	if ((arrayC.length % 2) == 0) {
		return (arrayC[middle] + arrayC[middle - 1]) / 2;
	} else {
		return arrayC[middle - 0.5];
	}
	
};

// User Stories: 
// sum: As a user, I want to take a bunch of numbers, add them together, and get the total.

// mean: As a user, I want to take the total of a bunch of numbers, and divide it by the amount of numbers I have, to get the average.

// median: As a user, I want to take a bunch of numbers, and sort them from smallest to largest. If the amount of numbers I have is even, then I want to find the
// two numbers in the middle of my sorted bunch of numbers, and find the average of those two. However, if the amount of numbers I have is odd, then I want to find the middle number.