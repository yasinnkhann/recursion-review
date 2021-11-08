// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var result = [];
  var bodyTag = document.body;

  var hasClass = function(elem) {
    if (elem.classList !== undefined) {
      if (elem.classList.contains(className)) {
        result.push(elem);
      }
    }

    elem.childNodes.forEach(function(childNode) {
      hasClass(childNode);
    });
  }

  hasClass(bodyTag);
  return result;
};

// Have to use: childNodes, classList, contains,

// Input: className (string)
// Output: collection of elements (array)
// Constraints: Can't use document.getElementsByClassName(className)
// Edge Case: Elements that don't have class names --> don't push into our array