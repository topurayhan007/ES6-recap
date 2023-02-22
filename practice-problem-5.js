/* 
5) How will you display
  a) programming er coddogosti
  b) VW
  c) Bangladesh
*/

let instructor = {
  name: "Jhankar Mahbub",
  entrepreneur: true,
  additionalData: {
    writer: true,
    favoriteHobbies: ["travelling", "Coding"],
    books: ["programming er bolod to bos", "programming er coddogosti"],
    moreDetails: {
      favoriteBasketballTeam: "XYZ",
      isYoungest: true,
      hometown: {
        city: "ABC",
        state: "VW",
      },
      countriesLivedIn: ["Bangladesh", "New York"],
    },
  },
};

// a)
const prog = instructor.additionalData.books[1];
console.log(prog);

// b)
const vw = instructor.additionalData.moreDetails.hometown.state;
console.log(vw);

// c)
const bangla = instructor.additionalData.moreDetails.countriesLivedIn[0];
console.log(bangla);
