var str = process.argv.slice(2).toString().toLowerCase().split(",").join("");
console.log(str);


function getFrequency(str) {
    var freq = {};
    for (var i=0; i<str.length;i++) {
        var character = str.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};
console.log(getFrequency(str));