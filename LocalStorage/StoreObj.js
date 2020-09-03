window.onload = init;

function init(){

  var myObject = {
        name:"trish",
        age: "29",
        favColor: "blue"
    }

    myObjectJSON = JSON.stringify(myObject);
    localStorage.setItem("Trish", myObjectJSON);

    var newMyObjectJSON = localStorage.getItem("Trish");
    var newMyObject = JSON.parse(newMyObjectJSON);

    alert("Name: " + newMyObject.name + " Age: "+ newMyObject.age + " FavColor:"+ newMyObject.favColor);

}