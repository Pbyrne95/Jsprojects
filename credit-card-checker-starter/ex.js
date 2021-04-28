const alwaysTheSameMem = function(x,y){
    return x * y;
}; // -> always point to this memory address 

console.log(alwaysTheSameMem(1,2));

let betterForVariables = 2 ;// -> memory address may change 

var thisIsOld = "4";

console.log( betterForVariables === thisIsOld );

const array = [10,281,2739,193,2,3,4,5,9109,3084];
const sortFunction = (x,y) => {
    return x > y ; 
}
// for each loop --> for x in blehehehheheheheheh
console.log( array.sort( function(x,y){return x-y} ) );

// factory function 

// -> getters + setters + method and object logic 