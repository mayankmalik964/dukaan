
document.addEventListener("mouseover", function (event) {
    var obj = document.getElementById("insideproduct");
    if (!obj.contains(event.target)) {
        document.getElementById("product").style.display = "none";
    }
    else {
        document.getElementById("product").style.display = "flex";
    }
});
document.addEventListener("mouseover", function (event) {
    var obj = document.getElementById("insidecompany");
    if (!obj.contains(event.target)) {
        document.getElementById("company").style.display = "none";
    }
    else {
        document.getElementById("company").style.display = "flex";
    }
});
    document.addEventListener("mouseover", function (event) {
    var obj = document.getElementById("insidecompany");
    if (!obj.contains(event.target)) {
        document.getElementById("company").style.display = "none";
    }
    else {
        document.getElementById("company").style.display = "flex";
    }
});
function opentab(){
     var btn=document.getElementById('nav');
     var btn2=document.getElementById('closebtn');
     btn.style.display="flex";
     btn2.style.display="flex";
    var target=document.getElementById('navbar')
     target.classList.add("adds");
    
    
}
function closetab(){
     var btn=document.getElementById('closebtn');
     var btn2=document.getElementById('nav');
    
     btn.style.display="none";
     btn2.style.display="none";
   
    }