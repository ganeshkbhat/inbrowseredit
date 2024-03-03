/**
 * 
 * Package: editablebrowser
 * Author: Ganesh B
 * Description: 
 * Install: npm i editablebrowser --save
 * Github: https://github.com/ganeshkbhat/inbrowseredit
 * npmjs Link: https://www.npmjs.com/package/editablebrowser
 * File: index.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

function BE() {

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

