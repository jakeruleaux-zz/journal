function Entry(wordsEntered) {
  this.words = wordsEntered;
}

Entry.prototype.findWords = function(words) {
  var output = [];
  var inputWord = words;
  var separated = inputWord.split(" ");
  console.log(separated);
  for(var i = 0; i < separated.length; i++) {
    output.push(i);
  }
  return output.length;
};

exports.entryModule = Entry;
