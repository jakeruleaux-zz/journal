function Entry(wordsEntered) {
  this.words = wordsEntered;
}

Entry.prototype.findWords = function(words) {
  var output = [];
  explode(words);
  for(var i = 0; i < words.length; i++) {
    output.push(i);
  }
  return output;
};
