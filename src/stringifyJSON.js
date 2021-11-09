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

    obj.forEach(function(item) {
      result += stringifyJSON(item) + ',';
    })
    return '[' + result.slice(0, result.length - 1) + ']';
  }

  if (!Array.isArray(obj) && typeof obj === 'object') {
    var ans = '';
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
        ans += (stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',');
      }
    }
    return '{' + ans.slice(0, ans.length - 1) + '}';
  }
};

// Input: obj
// Output: A stringified version of the input object
// Constraints: Can't use the native JSON method
// Edge Cases: If obj is a primitive, then don't use recursion
