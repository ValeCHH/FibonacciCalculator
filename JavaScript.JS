var n = document.getElementById("userInput").value;
function fibCalculator(n) {
  if (n < 2) return 1;

  return fibCalculator(n - 1) + fibCalculator(n - 2);
}

function Answer() {
  var n = document.getElementById("userInput").value;
  document.getElementById("Answer").innerHTML = fibCalculator(n);
}
/*got it from https://embed.plnkr.co/plunk/SrkCGh only changed ids */
