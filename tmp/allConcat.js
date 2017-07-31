var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('.input-journal').submit(function(event) {
    event.preventDefault();
    var words = $('#words').val();
    console.log(words);
    var counted = new Entry(words);
    console.log(counted);
    var output = counted.findWords(words);
    output.forEach(function(element) {
      $('#counted').append("There are " + element + " words in your entry");
    });
  });
});

