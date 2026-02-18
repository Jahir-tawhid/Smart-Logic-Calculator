/**
 * Function to handle arithmetic calculations
 * @param {string} operation - The type of math operation
 */
function calculate(operation) {
  // 1. Get raw values from input fields
  const input1 = document.getElementById("num1").value;
  const input2 = document.getElementById("num2").value;

  // 2. Validation: Ensure fields are not empty
  if (input1 === "" || input2 === "") {
    alert("Please enter values in both fields.");
    return;
  }

  // 3. Variables: Convert inputs to decimal numbers
  let n1 = parseFloat(input1);
  let n2 = parseFloat(input2);
  let result = 0;

  // 4. Logic: Perform calculation based on operation type
  if (operation === "add") {
    result = n1 + n2;
  } else if (operation === "sub") {
    result = n1 - n2;
  } else if (operation === "mul") {
    result = n1 * n2;
  } else if (operation === "div") {
    // Edge Case: Handling division by zero
    if (n2 === 0) {
      alert("Mathematics Error: Cannot divide by zero.");
      return;
    }
    result = n1 / n2;
  }

  // 5. Output: Update the UI with the final result
  document.getElementById("result-value").innerText = result;
}

/**
 * Function to reset all inputs and results
 */
function clearFields() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result-value").innerText = "0";
}
