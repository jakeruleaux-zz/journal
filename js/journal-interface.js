var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('.input-journal').submit(function(event) {
    event.preventDefault();
    var words = $('#words').val();
    var counted = new Entry(words);
    var vowels = new Entry(words);
    var consonents = new Entry(words);
    var firstEight = new Entry(words);
    var begin = firstEight.findFirst(words);
    var totalVowels = vowels.findVowels(words);
    var output = counted.findWords(words);
    var totalConsonents = consonents.findConsonents(words);

      $('#vowels').append("There is " + totalVowels + " vowels in yer words");
      $('#counted').append("There are " + output  + " words in your entry");
      $('#consonents').append("There is " + totalConsonents + " things in yer words");
      $('#teaser').append("This is what you started to say '" + begin + "' and it was boring.");
    });
  // });
});
