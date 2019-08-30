
document.getElementById("button").addEventListener("click", function() {
  var initialString = document.getElementById("message").value;
    /* -- Analyse du code étape par étape -- */
      // var lowerString = initialString.toLowerCase();
      // var firstChar = lowerString[0];
      // var upFirstChar = firstChar.toUpperCase();
      // var restString = lowerString.slice(1);
      // var finalString = upFirstChar + restString;
    /* -- Synthèse -- */
  var finalString = initialString[0].toUpperCase()+initialString.slice(1).toLowerCase();
  var result = document.getElementById("result");
  result.innerHTML = finalString;
});
