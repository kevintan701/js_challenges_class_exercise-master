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