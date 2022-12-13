// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, myNode) {
  var outputArr = [];
  if (myNode === undefined) {
    myNode = document.body;
  }
  if (myNode.classList) {
    if (myNode.classList.contains(className)) {
      outputArr.push(myNode);
    }
  }
  if (myNode.hasChildNodes()) {
    for (var i = 0; i < myNode.childNodes.length; i++) {
      var currentChild = myNode.childNodes[i];
      outputArr = outputArr.concat(getElementsByClassName(className, currentChild));
    }
  }
  return outputArr;
};


