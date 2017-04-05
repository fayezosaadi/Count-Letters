var str = process.argv.slice(2).join("");
// console.log(str);


function countLetters(str) {
  var freq = {};
  for (var i=0; i<str.length;i++) {
    var character = str.charAt(i).toLowerCase();
    if (character !== " "){
    if (freq[character]) {
      freq[character]++; }
      else {
        freq[character] = 1;
      }
    }
  }
  return freq;
};
console.log(countLetters(str));