function challenge3() {
    // Check if any radio button in each group is selected
    const isStandingSelected = document.querySelector('input[name="standing"]:checked') !== null;
    const isGradDateSelected = document.querySelector('input[name="gradDate"]:checked') !== null;

    if (!isStandingSelected || !isGradDateSelected) {
      alert("Please select an option for both class standing and graduation date.");
      return false; // Prevent form submission
    }
    return true; // Allow form submission
  }