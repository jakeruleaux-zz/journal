function Entry(wordsEntered) {
  this.words = wordsEntered;
}

Entry.prototype.findWords = function(words) {
  var output = [];
  var inputWord = words;
  var separated = inputWord.split(" ");
  for(var i = 0; i < separated.length; i++) {
    output.push(i);
  }
  return output.length;
};

Entry.prototype.findVowels = function getVowels(words) {
  var vowels = words.match(/[aeiou]/gi);

  return vowels.length;
};

Entry.prototype.findConsonents = function getConsonents(words) {
  var consonents = words.match(/[bcdfghjklmnpqrstvwxyz]/gi);

  return consonents.length;
};

Entry.prototype.findFirst = function getTeaser(words) {
  return words.split(/\s+/).slice(0,8).join(" ");
  // var firstEight = [];
  // var inputWord = words;
  // var seperated = inputWord.split(" ");
  // for(var i = 0; i < 9; i++) {
  //   firstEight.push(i);
  //   console.log(firstEight)
  // } return firstEight;

};


exports.entryModule = Entry;
