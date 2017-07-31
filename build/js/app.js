(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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


},{"./../js/journal.js":1}]},{},[2]);
