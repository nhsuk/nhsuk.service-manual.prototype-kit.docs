module.exports = function (env) { /* eslint-disable-line func-names,no-unused-vars */
  const filters = {};

  filters.sentenceCase = function (input){
    // check the input
    // blank: do not do anything
    if (!input) return ''; 
     // not text: do not do anything
    if (typeof input !== 'string') return input;
    // is a string/text
    // text: change first character to uppercase and put it back in the string
    return input.charAt(0).toUpperCase() + input.slice(1); 
  }; 

  filters.shorten = function(str, count) {
    return str.slice(0, count || 5);
};

  return filters;
};
