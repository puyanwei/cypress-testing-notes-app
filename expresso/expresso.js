var describe = function(description, test) {
  document.getElementById("output").innerHTML += "<b>" + description + "</b>";
  try {
    test();
  } catch (err) {
    document.getElementById("output").innerHTML +=
      "<br><li>error: " + err.message + "</li></br>";
  }
};

var expect = {
  isEqual: function(description, first, second) {
    if (first === second) {
      document.getElementById("output").innerHTML +=
        description +
        "<br><li><font color='green'>PASS: [" +
        first +
        "] is equal to [" +
        second +
        "]</li></br>";
    } else {
      document.getElementById("output").innerHTML +=
        "<br><li><font color='red'>FAIL: [" +
        first +
        "] is not equal to [" +
        second +
        "]</li></br>";
    }
  },

  isNull: function(description, element) {
    if (element === null) {
      document.getElementById("output").innerHTML +=
        description +
        "<br><li><font color='green'>PASS: [" +
        element +
        "] is null</li></br>";
    } else {
      document.getElementById("output").innerHTML +=
        description +
        "<br><li><font color='red'>FAIL: [" +
        element +
        "] is not null</li></br>";
    }
  },

  isTrue: function(description, test) {
    if (test) {
      document.getElementById("output").innerHTML +=
        description +
        "<br><li><font color='green'>PASS: [" +
        test +
        "] is true</li></br>";
    } else {
      document.getElementById("output").innerHTML +=
        description +
        "<br><li><font color='red'>FAIL: [" +
        test +
        "] is false</li></br>";
    }
  }
};
