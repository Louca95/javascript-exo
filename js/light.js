document.addEventListener("DOMContentLoaded", function () {
    // let img = document.getElementById("lightbulb");
    // img.src = "./img/off.png";
    // img.alt =  "Ampoule";

    let button1 = document.getElementById("toggle-button");
    let title = document.querySelector("div");
    let body = document.querySelector("body")
    let light = true 
    


    button1.addEventListener("click", function () {
        let img = document.getElementById("lightbulb");
        switch(light){
            case true:
            img.src = "./img/off.png";
             img.alt =  "Ampoule eteinte";
             body.style.backgroundColor = "#edd37c";
            title .style.color = "black"
             light = false
             break;
             case false:
                img.src = "./img/on.png";
             img.alt =  "Ampoule eteinte";
             body.style.backgroundColor = "black";
            title .style.color = "red" 
            light = true
            break;
        }
            
            
        });

        
        // if (light){
        //     img.src = "./img/on.png";
        //     img.alt =  "Ampoule eteinte";
        // }
        // else if(!light){
        //     img.src = "./img/off.png";
        //     img.alt =  "Ampoule allumer";
        //     modifier()
        // }


});