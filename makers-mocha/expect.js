var expect = {
  equals: function(first, second) {
    if (first === second) {
      document.getElementById("output").innerHTML =
        "<font color='green'>PASS: [" +
        first +
        "] is equal to [" +
        second +
        "]";
    } else {
      document.getElementById("output").innerHTML =
        "<font color='red'>FAIL: [" +
        first +
        "] is not equal to [" +
        second +
        "]";
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
