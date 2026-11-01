let input = document.getElementById("textInput");

input.addEventListener("input", function() {

    input.value = input.value.replace(/[^a-zA-Z]/g, "");

});