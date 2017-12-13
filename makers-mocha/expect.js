var expect = {
  isEqual: function(first, second) {
    if (first === second) {
      document.getElementById("output").innerHTML +=
        "<br><font color='green'>PASS: [" +
        first +
        "] is equal to [" +
        second +
        "]</br>";
    } else {
      document.getElementById("output").innerHTML +=
        "<br><font color='red'>FAIL: [" +
        first +
        "] is not equal to [" +
        second +
        "]</br>";
    }
  },

  isNull: function(element) {
    if (element === null) {
      document.getElementById("output").innerHTML +=
        "<br><font color='green'>PASS: [" + element + "] is null</br>";
    } else {
      document.getElementById("output").innerHTML +=
        "<br><font color='red'>FAIL: [" + element + "] is not null</br>";
    }
  },

  isTrue: function(test) {
    if (test) {
      document.getElementById("output").innerHTML +=
        "<br><font color='green'>PASS: [" + test + "] is true</br>";
    } else {
      document.getElementById("output").innerHTML +=
        "<br><font color='red'>FAIL: [" + test + "] is false</br>";
    }
  }
};
