/*
1. Start with the number 42 and set that equal to 'value' */
var value = 42;
console.log("Step 1: " + value);


//2. Create condition logic to check if the value is great or equal to 53
if( value >= 53){
	//2-1. If true, add 42 to 'value'
	value = value + 42;	
} 
else {
	//2-2. If false, subtract 13 from 'value'
	value = value - 13
}
console.log("Step 2: " + value);


//3. Create a string that is set to 11, add it to 'value'
var  firstString = "11";
value = value + firstString;
console.log("Step 3: " + value);


console.log(value);
//4. Create an array, loop through 'value' using charAt, set array[i] to each value
var array1 = [];
for (var i = 0; i < value.length; i++){
	temp = value.charAt(i);
	array1.push(temp);
}	

console.log("Step 4: " + array1);

// 5. Remove the first and last values off the array
array1.shift();
array1.pop();

console.log("Remove first and last: " + array1);

// 6. Create a new variable. Loop backwards through the array and store each value into the new Variable, 
//combining each of the values of that array (backwards remember!)

var newVariable = "";
for(var y = array1.length-1; y >= 0; y--){
	newVariable = newVariable + array1[y];
	console.log(newVariable);
}

//7. parseInt both the 'value' and the new variable created in Step 6, ensure that both 'value' 
// and the new variable are set to these new parsed values;
newVariable = parseInt(newVariable);
value = parseInt(value);
console.log(newVariable);
console.log(value);


// ******* SWITCH PROGRAMMERS *******
// 8. Add 'value' and the new variable created in Step 6 together and store them in 'value'
value = newVariable + value;
console.log(value);

// 9. If the new value of 'value' is less than 60, set 'value' equal to 14. 
// If not, check to see if it is equal to 2930, 
// if it is, set 'value' equal to 27. If neither of these are true, set the value to 2.
if(value < 60){
	value = 14;
}
else if (value == 2930){
	value = 27;
}
else {
	value = 2;
}
console.log(value);

// 10. Create a while loop that counts down from 10 and increments 'value' by 1.
var count = 10;
while(count >=1){
	value++;
	count--;
}
console.log(value);
console.log(count);
// 11. Create a function that accepts an argument 'val'. 
// The function should convert 'val' to a String, then drop the first character off the String, 
// but only if there is more than 1 character in the String. Return 'val' and set the 'value' to the returned value.
function stringy(val){
var n =val.toString();
	if (n.length>0){
		n=n.substring(1,n.length);
	}
	return n;
}

// 12. Call the function.
console.log(stringy(value)); 

// 13. Console log value. Create an index.html file, link the this Javascript file. Load in the browser, check the value.

// 14. Your answer should be a String value that equals 7. Is that what you got?

