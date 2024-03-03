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


function EE() {

  /**
   *
   *
   */
  function makeBodyEditable() {
    document.body.contentEditable = true;
  }

  /**
   *
   *
   */
  function makeEditable() {
    document.designMode = 'on';
  }

  /**
   *
   *
   */
  function disableBodyEditing() {
    document.body.contentEditable = true;
  }

  /**
   *
   *
   */
  function disableEditing() {
    document.designMode = 'off';
  }

  return {
    makeBodyEditable,
    makeEditable,
    disableBodyEditing,
    disableEditing
  }
}
