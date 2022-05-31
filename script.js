function myFunction(){
    x = document.getElementById("Ninth");
    if (x.style.backgroundColor == "")
    {
        x.style.backgroundColor = "red";
        x.style.color = "purple";
    }
    else
    {
        x.style.backgroundColor = "";
        x.style.color = "";
    }
}

function myFunction2(){
    x = document.querySelector(".Tenth");
    if (x.style.backgroundColor == "")
    {
        x.style.backgroundColor = "yellow";
        x.style.color = "blue";
    }
    else
    {
        x.style.backgroundColor = "";
        x.style.color = "";
    }
}

function imageBigger(){
    try{
        var x = document.querySelector(".Volos");
        style = window.getComputedStyle(x);
        temp = style.getPropertyValue("width");
        var y = parseInt(temp.slice(0, -2)) + 100;
        z = y.toString()  + "px";
        x.style.width = z;    
    }
    catch{}
}

function imageSmaller(){
    try{
        var x = document.querySelector(".Volos");
        style = window.getComputedStyle(x);
        temp = style.getPropertyValue("width");
        var y = parseInt(temp.slice(0, -2)) - 100;
        z = y.toString()  + "px";
        x.style.width = z;    
    }
    catch{}
}

function imageAdd(){
    var img = document.createElement("img");
    img.src="Volos.jpg";
    img.classList.add("Volos");
    var block = document.getElementById("x");
    block.appendChild(img);
    
}

function imageRemove(){
    try{
        var x = document.querySelector(".Volos");
        x.parentNode.removeChild(x);    
    }
    catch{}
}