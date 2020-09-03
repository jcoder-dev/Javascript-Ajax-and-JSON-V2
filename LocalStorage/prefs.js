window.onload = init;

function init() {
    addItem("nome", "Jorge");
    addItem("Type", "Programmer");
    addItem("girl", "Meury Rafael");
    addItem("serie 0", "Normal People");
    addItem("number", 120);

    //removeItem("number");

    //clearAllItems();
    showAllPrefs();
}

function addItem(key, value) {
    localStorage.setItem(key, value);
    //addToList(key, value);
}

function removeItem(key){
    localStorage.removeItem(key);
}

function addToList(key, value) {
    var ul = document.getElementById("items");
    var li = document.createElement("li");

    li.innerHTML = "Key: " + key + ", value: " + value;
    ul.appendChild(li);
}

function getItem(key) {
    var value = localStorage.getItem(key);
    alert("Item: " + key + ", value: " + value + "(" + typeof value + ")");
}

function showAllPrefs(){

    for(let i = 0; i<localStorage.length; i++){

        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        addToList(key, value);
    }
}

function clearAllItems(){
    localStorage.clear();
}