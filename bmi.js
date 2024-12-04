 const form = document.querySelector('form')

 form.addEventListener('submit', function (e) {
e.preventDefault()
  
 const height = parseInt(document.querySelector('#heightInp').value);
 const weight = parseInt(document.querySelector('#weightInp').value);
 const result = document.querySelector('.result')
  
if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`
    
} else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`
    
} else {
  const bmi =  (weight / ((height*height)/10000)).toFixed(2)
  // show the result
  let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

  result.innerHTML = `<span>${bmi}</span> <br> <span>${category}</span>`
}


 } )