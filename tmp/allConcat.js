$(document).ready(function() {
  $('.input-journal').submit(function(event) {
    event.preventDefault();
    var words = $('#words').val();
    var counted = new Entry('words');
    var output = counted.findWords(words);
    output.forEach(function(element) {
      $('#counted').append("There are " + element + " words in your entry");
    });
  });
});

