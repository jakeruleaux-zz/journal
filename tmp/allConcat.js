var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('.input-journal').submit(function(event) {
    event.preventDefault();
    var words = $('#words').val();
    console.log(words);
    var counted = new Entry(words);
    var output = counted.findWords(words);
    console.log(output);
    // output.text(function(element) {
      $('#counted').append("There are " + output  + " words in your entry");
    });
  // });
});

