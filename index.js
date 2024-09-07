const input = document.getElementById("input");

function reverseString (str) {
    return str.split("").reverse().join(""); // split => array de caracter , reverse => mot reverse , join => string 
}

function check () {
    const value = input.value;
    const reverse = reverseString (value);

    if (value === reverse) {
        alert ("P A L I N D R O M");
    }else {
        alert ("not today !");
    }
    input.value = "";
}