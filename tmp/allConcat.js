var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('.input-journal').submit(function(event) {
    event.preventDefault();
    var words = $('#words').val();
    var counted = new Entry(words);
    var vowels = new Entry(words);
    var totalVowels = vowels.findVowels(words);
    var output = counted.findWords(words);
    console.log(totalVowels);
      $('#vowels').append("There is " + totalVowels + " vowels in yer words");
      $('#counted').append("There are " + output  + " words in your entry");
    });
  // });
});

