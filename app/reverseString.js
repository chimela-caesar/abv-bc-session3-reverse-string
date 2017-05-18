'use strict';

var exports = module.exports = {};

exports.reverseString = function(str)
{
  if (str === "") return null;   
   
  let reverseStr = str.split("").reverse().join("");
  
  if (reverseStr === str) return true;
  
  return reverseStr;
};
