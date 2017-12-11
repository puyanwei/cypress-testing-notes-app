var expect = {
  equals: function(first, second) {
    if (!(first === second)) {
      console.log(
        "%cFAIL: [" + first + "] is not equal to [" + second + "]",
        "color:red"
      );
    } else {
      console.log(
        "%cPASS: [" + first + "] is equal to [" + second + "]",
        "color:green"
      );
    }
  },

  exists: function(element) {
    if (element === null) {
      console.log("%cFAIL: " + element + " is empty", "color:red");
    } else {
      console.log("%cPASS: " + element + " exists", "color:green");
    }
  },

  isTrue: function(test) {
    if (!test) {
      console.log("%cFAIL: " + test + " is false", "color:red");
    } else {
      console.log("%cPASS: " + test + " is true", "color:green");
    }
  }
};
