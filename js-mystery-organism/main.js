// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
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

const pAequorFactory = (number, dna) => {
  return {
    _specimenNum: number,
    _dna: dna,
    get specimenNum() {
      return this._specimenNum;
    },
    set specimenNum(newSpecimenNum) {
      this._name = newSpecimenNum;
    },
    get dna() {
      return this._dna;
    },
    set dna(newDna) {
      this._dna = newDna;
    },
    mutate() {
      console.log(this.dna); //Initial DNA
      let newElement = returnRandBase();
      let posicionActual = Math.floor(Math.random() * dna.length);
      if (newElement === this.dna[posicionActual]) {
        while (newElement === this.dna[posicionActual]) {
          newElement = returnRandBase();
        }
      }
      this.dna[posicionActual] = newElement;
      return this.dna; //Mutated DNA
    },
    compareDNA(dnaToCompare) {
      let total = this.dna.length;
      let simBases = 0;
      let porSim = 0;
      for (let i = 0; i < this.dna.length; i++) {
        for (let j = 0; j < dnaToCompare.length; j++) {
          if (i === j) {
            if (dnaToCompare[j] === this.dna[i]) {
              simBases++;
              console.log(
                "Compara a " +
                  this.dna[i] +
                  " = " +
                  dnaToCompare[j] +
                  " pos " +
                  i
              );
            }
          }
        }
      }
      porSim = ((simBases / total) * 100).toFixed(2);
      return `specimen #1 and specimen #2 have ${porSim}% DNA in common`;
    },
    willLikelySurvive() {
      let counter = 0;
      let survival = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          counter++;
        }
      }
      survival = (counter / this.dna.length) * 100;
      console.log(`Survival ${survival.toFixed(2)}%`);
      if (survival >= 0.6) {
        return true;
      } else {
        return false;
      }
    },
    complementStrand() {
      let arrComplement = [];
      console.log(this.dna);
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C") {
          arrComplement[i] = "G";
        } else if (this.dna[i] === "G") {
          arrComplement[i] = "C";
        } else if (this.dna[i] === "A") {
          arrComplement[i] = "T";
        } else if (this.dna[i] === "T") {
          arrComplement[i] = "A";
        }
      }
      return arrComplement;
    },
  };
};

const sampleStrand = [
  "C",
  "C",
  "C",
  "A",
  "A",
  "G",
  "A",
  "T",
  "C",
  "A",
  "T",
  "C",
  "T",
  "T",
  "A",
];

const sampleStrand2 = [
  "C",
  "C",
  "C",
  "G",
  "G",
  "G",
  "G",
  "G",
  "C",
  "A",
  "T",
  "C",
  "T",
  "T",
  "A",
];

const objectToCompare = [
  "A",
  "T",
  "C",
  "A",
  "A",
  "T",
  "A",
  "T",
  "C",
  "A",
  "T",
  "C",
  "T",
  "T",
  "A",
];

const newDNA = pAequorFactory(30, sampleStrand);

console.log(newDNA.mutate());
console.log(newDNA.compareDNA(objectToCompare));

console.log(newDNA.willLikelySurvive());

console.log(newDNA.complementStrand());
