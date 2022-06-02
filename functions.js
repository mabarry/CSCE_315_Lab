var num = 0;

function style_button() {
    num++;
    if(num % 2 == 0) {
        document.getElementById("filename").setAttribute("href", "style.css");
    }
    else {
        document.getElementById("filename").setAttribute("href", "style2.css");
    }
    
}