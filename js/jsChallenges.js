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

