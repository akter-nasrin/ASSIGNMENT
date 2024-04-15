document.getElementById('calculateBtn').addEventListener('click', function() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;
    var resultDiv = document.getElementById('result');
  
    if (isNaN(num1) || isNaN(num2)) {
      resultDiv.innerHTML = '<div class="alert alert-danger" role="alert">Please enter valid numbers.</div>';
      return;
    }
  
    var result;
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          resultDiv.innerHTML = '<div class="alert alert-danger" role="alert">Cannot divide by zero.</div>';
          return;
        }
        result = num1 / num2;
        break;
    }
  
    resultDiv.innerHTML = '<div class="alert alert-success" role="alert">Result: ' + result + '</div>';
  });