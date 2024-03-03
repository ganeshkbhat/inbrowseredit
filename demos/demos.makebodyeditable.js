/**
 * 
 * Package: inbrowseredit
 * Author: Ganesh B
 * Description: 
 * Install: npm i inbrowseredit --save
 * Github: https://github.com/ganeshkbhat/inbrowseredit
 * npmjs Link: https://www.npmjs.com/package/inbrowseredit
 * File: index.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

function BE() {
  function makeBodyEditable() {
    document.body.contentEditable = true;
  }

  function disableBodyEditing() {
    document.body.contentEditable = true;
  }

  return {
    makeBodyEditable,
    disableBodyEditing
  }  
}

BE().makeBodyEditable()
BE().disableBodyEditing()
