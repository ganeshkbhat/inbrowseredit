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
  function makeEditable() {
    document.designMode = 'on';
  }

  function disableEditing() {
    document.designMode = 'off';
  }

  return {
    makeEditable,
    disableEditing
  }  
}


BE().makeEditable()
BE().disableEditing()
