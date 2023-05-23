       document.addEventListener("DOMContentLoaded", () => //tjekker inden om DOM er loaded
           {
               //burger + animation
               document.querySelector("#burgercontainer").addEventListener("click", myFunction);


               function myFunction() {
                   var x = document.getElementById("myLinks");
                   var element = document.getElementById("burgercontainer");
                   element.classList.toggle("change")
                   if (x.style.display === "block") {
                       x.style.display = "none";
                   } else {
                       x.style.display = "block";
                   }
               }

           })
