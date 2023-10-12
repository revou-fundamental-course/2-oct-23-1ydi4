function convert(){
  var celsius = parseFloat(document.getElementById("inputCelsius").value);
  if (celsius == 0){
    var fahrenheit= (celsius * 9/5) + 32;
    document.getElementById("outputFahrenheit").innerHTML = fahrenheit.toFixed(2) + " Fahrenheit.";
  
  } else {
    document.getElementById("error-input").innerText=" "
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").innerHTML = fahrenheit.toFixed(2) + " Fahrenheit.";
  }

}

function reset(){
  document.getElementById("error-input").innerText=" "
  document.getElementById("inputCelsius").value = "";
  document.getElementById("outputFahrenheit").innerHTML = "";
}

function reverse(){
  var fahrenheit = parseFloat(document.getElementById("input").value);
  
}if (fahrenheit == 0){
  var celsius= (fahrenheit -32) + 2;
  document.getElementById("outputFahrenheit").innerHTML = celsius.toFixed(2) + " celsius.";

} else {
  var celsius = (fahrenheit - 32) * 5/9;
  document.getElementById("result").innerHTML = celsius.toFixed(2) + " celsius.";
  
}