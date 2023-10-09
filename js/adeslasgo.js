const titChar = document.getElementsByClassName("titChar");
const carsChar = document.getElementsByClassName("carsChar");

for (let i = 0; i < carsChar.length; i++) {
    carsChar[i].style.display = "none";

    titChar[i].addEventListener("click", function() {
        console.log("aaaa");
        if (carsChar[i].style.display == "block") {
            carsChar[i].style.display = "none";
        }else{
            carsChar[i].style.display = "block";
        }
        
      });
    
};



//document.write(carsChar[0].innerHTML);
//document.write(titChar[0].innerHTML);
