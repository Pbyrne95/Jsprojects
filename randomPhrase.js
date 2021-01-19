const { Console } = require("console");

// first create a random number generator 
let randomGenerator= getRndInteger =  (max) => {
    return Math.floor(Math.random() * max);
  }

// create an object or nested list that will create random phrases 
const iterObject = [ 
                    ['you are','They are','This is','Maybe you are','could it be','No comment'],
                    ['The best','incredible','HAHA','a good person','whacky','Watch for the'],
                    ['of them all','pasta','karate chop','kick in the chops','people in the televesion','chicken']
];

// created a function that iterates through the the nested object using the random number
// list will have three nested elements -> iterates randome trough each one
let generateSentences = (iterObject) => {
    let leng = iterObject.length
    let returnThis = [];
    let p1=0;
    for(let elem in iterObject){
        while(p1 < leng){
            let tempIndex = randomGenerator(iterObject[p1].length);
            returnThis.push(iterObject[p1][tempIndex]);
            p1++;
        }}
    return returnThis.join(' ');
}

// call the thrird function and ensure that it works
let all_sentences = [];
all_sentences.push(generateSentences(iterObject));
console.log(all_sentences);
