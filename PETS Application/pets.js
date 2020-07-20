window.onload = init;


function init()
{
    getPetData();
    
}

function getPetData()
{
    var request = new XMLHttpRequest;
    request.open("GET","pets.xml");
    request.onreadystatechange = function()
    {
      var div = document.getElementById("pets");
      if(request.readyState == this.DONE && request.status == 200)
      {
          var type = request.getResponseHeader("Content-Type");
          console.log("Content-Type:" + type);
          console.log("Status: " + this.statusText);
          if(this.responseText != null)
          {
            div.textContent = this.responseText;
          }

          else
              div.innerText = "Error:No Data"
      }
    };

    request.send();
}
