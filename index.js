//NUMBER1
function InstagramPost(handle, content, imageLink, numberOfViews, numberOfLikes) {
   this.handle = handle;
   this.content = content;
   this.imageLink = imageLink;
   this.numberOfViews = numberOfViews;
   this.numberOfLikes = numberOfLikes;
}

//Number 2
let IGpost1 = new InstagramPost(
  "Moyodare_mua",
  "makeup PRO",
  "https://www.pexels.com/photo/woman-in-black-t-shirt-3681538/",
  "43K",
  "16K"
);
console.log(IGpost1);

let IGpost2 = new InstagramPost(
  "faceflip_",
  "Best MUA in the UK",
  "https://www.pexels.com/photo/woman-taking-selfie-458766/",
  "1.5M",
  "509K"
);
console.log(IGpost2);

//NUMBER 3
function createPerson(name, age, location) {
   return {
      name: name,
      age: age,
      location: location,
   };
}
const Musa = createPerson("Musa Dawodu", 19, "Lekki");
console.log(Musa);

function createJambScores(ENG, GOVT, LIT, CRK) {
   return {
      ENG: ENG,
      GOVT: GOVT,
      LIT: LIT,
      CRK: CRK,
   };
}
const Scores = createJambScores(70, 85, 82, 94);
console.log(Scores);


//NUMBER 4
//Ways to clone an object are Object.assign() Method, Spread Method, JSON parse()

//Object.assign()
const musa1 = Object.assign({}, Musa);
console.log(musa1);

//Spread method
const musa2 = { ...Musa };
console.log(musa2);

//JSON.parse()
const musa3 = JSON.parse(JSON.stringify(Musa));
console.log(musa3);



//NUMBER 5
const presidentialCandidates = {
   AAC: "Omoyele Sowore",
   ACCORD: "Christopher Imumolen",
   APC: "Bola Ahmed Tinubu",
   LP: "Peter Obi",
   NNPP: "Rabiu Kwankwaso",
   PDP: "Atiku Abubakar",
};
for (let key in presidentialCandidates) {
   console.log(presidentialCandidates[key] + ' for ' + key );
}
