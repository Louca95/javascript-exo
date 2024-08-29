document.addEventListener("DOMContentLoaded", function () {
    let colorbox = document.getElementById("color-box");

    function clickBTN() {
        colorbox.style.height = "40px";
        colorbox.style.width = "40px";
    }
    colorbox.addEventListener("click", clickBTN);

     function hover() {
        const random = (Math.random () * 0xFFFFFF << 0).toString(16);
        colorbox.style.backgroundColor = "#" + random;
    }
    colorbox.addEventListener("mouseover",  hover)
   
    function dblclick() {
        colorbox.style.height = "20rem";
        colorbox.style.width = "20rem";
    }
    colorbox.addEventListener("dblclick", dblclick);
  



});