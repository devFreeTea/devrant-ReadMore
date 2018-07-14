// ==UserScript==
// @name         DevRant reduce amount of text generated
// @namespace    http://devrant.com/
// @version      0.1
// @description  Replace a text from a rant that is to long into a read more
// @author       devTea
// @match        *devrant.com/*
// @match        *devrant.io/*
// @run-at       document-end
// ==/UserScript==

(function() {
   var text = document.querySelectorAll('.rantlist-title-text');
   for (var i = 0; i < text.length; i++) {
       if (text[i].innerHTML.length > 300) {
           text[i].innerHTML = text[i].innerHTML.substring(0, 300) + ' (read more)';
       }
   }
})();