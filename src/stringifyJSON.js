// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // Primitives
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }

  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  // Collections
  if (Array.isArray(obj)) {
    var result = '';

    // if (obj.length === 0) {
    //   return '[]';
    // }
    obj.forEach(function(item) {
      result += stringifyJSON(item) + ',';
    })
    return '[' + result.slice(0, result.length - 1) + ']';
  }
};

// Input: obj
// Output: A stringified version of the input object
// Constraints: Can't use the native JSON method
// Edge Cases: If obj is a primitive, then don't use recursion
