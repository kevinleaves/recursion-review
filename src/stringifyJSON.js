// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //input: primitive value || object || array
  //output: string
  //constraints: if function or undefined value,
  //edge cases:

  if (typeof obj === 'string') {
    var newStr = '"' + obj + '"';
    return newStr;
  }

  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }

  // if given null
  if (obj === null) {
    return 'null';
  }

  //if given array
  if (Array.isArray(obj)) {
    var result = '['
    //iterate through array, recursive call on each obj in the array
    obj.forEach(function (item, index) {
      result += stringifyJSON(item)
      if (index !== obj.length - 1) {
        result += ','
      }
    })
    result += ']'
    return result;
  }

  //if given obj
  if (typeof obj === 'object') {
    var result = '{'
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (typeof obj[key] === 'function' || typeof obj[key] === "undefined") {
        continue;
      }

      result += stringifyJSON(key)
      result += ':'
      result += stringifyJSON(obj[key])

      if (i !== keys.length - 1) {
        result += ','
      }
    }

    result += '}'
    return result;
  }
};
