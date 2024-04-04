// Challenge 1 Part 1
document.getElementById("subscribe").addEventListener("click", function () {
    console.log("this works!")

    if (this.checked) {
        document.getElementById("emailDiv").style.display = "block"
    }
    else {
        document.getElementById("emailDiv").style.display = "none"
        console.log('else works!')
    }
});

// Challenge 1 Part 2
document.addEventListener("click", function () {
    let currentTime = new Date()
    // Add a alart message box
    alert("Wow this works, the current time is: " + currentTime)
});


//Challenge 2
document.getElementById("sameAddress").addEventListener("click", function () {
    var billingAddress = document.getElementById("bill")
    var homeAddress = document.getElementById("home")
    var messageBlock = document.querySelector(".alert")
    console.log("this works!")
    if (this.checked) {
        homeAddress.value = billingAddress.value
        homeAddress.disabled = true
        messageBlock.textContent = "Home Address: " + billingAddress.value // Update message block with home address
    } else {
        homeAddress.disabled = false
        messageBlock.textContent = "If you are using the starter code, there is an accessibility errors on this page. Fix them!!"
    }
});


//Challenge 3
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