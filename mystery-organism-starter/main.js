// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (num,array) => {
  return {
    _num: num,
    _array: array,
    mutate() {
      let randomIndex = Math.floor(Math.random() * 15);
      console.log(this._array[randomIndex],randomIndex);
      let temp = returnRandBase();
      console.log(temp);
      if(this._array[randomIndex] === temp){
          temp = returnRandBase();
      }
      this._array[randomIndex] = temp
      return this._array;
    },
    compareDNA(arrayCompare){
      if(arrayCompare.toString() === this._array.toString()){
        return true;
      }
      else{
        return false;
      }
    },
    willLikelySurvive(){
      let gcCount = 0; 
      
      for(let i = 0; i < this._array.length; i++){
        if(this._array[i] === 'G' || this._array[i] === 'C'){
          gcCount++;
        }
      }
      
      let percentCheck = Math.ceil(gcCount / this._array.length * 100);
      if(percentCheck >= 60){
        return true;
      }
      else{
        return false
      }
    }
  
  };

};


let permList = mockUpStrand();
const newSpecies = pAequorFactory(1,permList);





