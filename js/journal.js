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

exports.entryModule = Entry;
