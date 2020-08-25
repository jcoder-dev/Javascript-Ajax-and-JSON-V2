window.onload = init;

function init()
{
    var colors = ["red","blue","green","yellow"];
    var container = document.getElementById("container");
    var fragment = document.createDocumentFragment();
    
    for(i=0;i<4;i++)
    {
        var box = document.createElement("div");
        box.setAttribute("class","box");
        box.style.backgroundColor = colors[i];
       // container.appendChild(box);
        fragment.appendChild(box);
    }

      container.appendChild(fragment);
}