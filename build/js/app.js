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

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
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


},{"./../js/journal.js":1}]},{},[2]);
