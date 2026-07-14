var calButton = document.getElementById("convertButton");
calButton.addEventListener("click", function() {
  var amount = document.getElementById("amount").value;
  var fromCurrency = document.getElementById("fromCurrency").value;
  var toCurrency = document.getElementById("toCurrency").value;

  // Perform currency conversion logic here
  // For demonstration purposes, let's assume a simple conversion rate
  var conversionRate = 0.85; // Example conversion rate from USD to EUR
  var convertedAmount = amount * conversionRate;
  document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;

  showDate()
});

function showDate() {
  var currentDate = Temporal.Now.plainDateISO();
  var element = document.createElement('div')
  element.innerText = `Conversion performed on: ${currentDate}`;
  document.getElementById("result").appendChild(element)
}