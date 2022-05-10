var ado = document.getElementById("Ado");
var rgl = document.getElementById("Rev");

//Function to read more or less At & T
function read(){
    var x = document.getElementById("Atat");
    if (x.style.display === "none"){
        ado.classList.add("spin");
        x.style.display = "block";
        document.getElementById("btn_ado").innerHTML = "Tap to read less";
    }
    else{
        ado.classList.remove("spin");
        x.style.display = "none";
        document.getElementById("btn_ado").innerHTML = "Tap to read more";
    }
}

//Function to read more or less for Rgl
function readm(){
    var x = document.getElementById("rgl");
    if (x.style.display === "none"){
        rgl.classList.add("spin");
        x.style.display = "block";
        document.getElementById("btn_rgl").innerHTML = "Tap to read less";
    }
    else{
        rgl.classList.remove("spin");
        x.style.display = "none";
        document.getElementById("btn_rgl").innerHTML = "Tap to read more";
    }
}

//Function for fixed navbar
var navbar = document.getElementById("nav_scroll");
var sticky = navbar.offsetTop;
window.addEventListener("scroll", function stickynav(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky")
    }
});

//Function for fixed back to top button
var btn = document.getElementById("btn-up");
window.addEventListener("scroll", function scrollbtn(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        btn.style.display = "block";
    }
    else{
        btn.style.display = "none";
    }
});

//Function to go back to top
document.getElementById("btn-up").addEventListener("click",function backtotop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//Function for graphics
var hidden_p = document.querySelectorAll(".hidden-p");
var design = document.querySelectorAll(".design");
for (var i = 0; i < design.length; i++){
    design[i].addEventListener("click",
function pullup(){
    for (var i = 0; i < hidden_p.length; i++){
    
    if(hidden_p[i].style.display ==="none"){
        hidden_p[i].style.display = "block";
    }
    else{
        hidden_p[i].style.display = "none";
    }
}
});
}

//Function for search
// var search = document.querySelector(".search");
var search = document.querySelector("body");
let input = document.getElementById("input");
const charac = /[\\{().+?,*|^%-_=$&@#!}]/g;
input_val = input.value;
document.getElementById("enter").addEventListener("click",
function(){
        input_val = input.value;
        if (input_val != '' && search.textContent.toLowerCase().includes(input_val.toLowerCase())){
            if (charac.test(input_val)) input_val = input_val.replace(
                charac, "\\$&");
            let highlight = new RegExp(input_val, "gi");
            search.innerHTML = (search.textContent).replace(highlight, '<mark>$&</mark>');
        }
        else{
            window.alert("Cannot find word");
        }
});

//animation for section 2 in pages
var vision = document.querySelectorAll(".vision");
var windowHeight = window.innerHeight;
window.addEventListener("scroll", 
    function(){
        for (var i = 0; i < vision.length; i++){
            var dispTop = vision[i].getBoundingClientRect().top;
            if (dispTop < windowHeight - 180){
                vision[i].classList.add("fadein");
            }
            else{
                vision[i].classList.remove("fadein");
            }
        }
      
    });


read();
readm();
