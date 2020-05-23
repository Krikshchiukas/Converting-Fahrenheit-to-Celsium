

//CONVERT FAHRENHEIT TO CELSIUS

var form = document.forms.conversion;

  form.fahrenheit.oninput = toCelsius;
  //console.log(form);

function toCelsius() {
  let initial = +form.fahrenheit.value;
  if (!initial) return;
let result = Math.round((initial - 32) / 1.8);

document.getElementById('cels').innerHTML = result;
};

toCelsius();