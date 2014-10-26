define(function defineDemoFocusableExpected(require) {
  'use strict';

  // This file contains all the selectors of focusable/index.html that we expect to be focusable

  return {
    name: 'expected',
    userAgent: 'Rodney\'s brain',
    focusable: [
      "BODY",
      "[contenteditable]",
      "[tabindex= +2]",
      "[tabindex=+2]",
      "[tabindex=-1]",
      "[tabindex=-2]",
      "[tabindex=0]",
      "[tabindex=1]",
      "a.image-map",
      "a[href=\"\"]",
      "a[href]",
      "audio[controls]",
      "button[type=button]",
      "embed",
      "iframe",
      "input[type=checkbox]",
      "input[type=password]",
      "input[type=radio]",
      "input[type=radio]",
      "input[type=submit]",
      "input[type=text]",
      "input[type=text]",
      "keygen",
      "link[itemprop][href]",
      "object",
      "object[usemap]",
      "select",
      "svg a[xlink|href]",
      "table tr td a",
      "table tr{collapse} td a{visible}",
      "textarea",
      "video[controls]",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a"
    ],
    tabOrder: []
  };
});