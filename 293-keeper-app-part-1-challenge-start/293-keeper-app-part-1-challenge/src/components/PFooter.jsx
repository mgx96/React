import React from "react";

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
console.log(currentYear);

function PFooter(){
    return(<footer>Copyright ⓒ {currentYear}</footer>)
}

export default PFooter;