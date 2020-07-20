window.onload = init;

function Todo(task, who, dueDate,)
{
    this.task = task;
    this.who = who;
    this.dueDate = dueDate;
    this.done = false;
}

var todos = new Array();
function init(){
    getToDo();

    var buttonSubimit = document.getElementById("submit");
        buttonSubimit.onclick = getFormData;
        getFormData();
        
}


   function getToDo()
{
    var request = new XMLHttpRequest;
    request.open("GET", "todo.json");
    request.onreadystatechange = function()
    {
        //var div = document.getElementById("todo");
        if(this.readyState == this.DONE && this.status == 200 )
        {
            if(this.responseText != null)
            {
               // div.innerText = this.responseText;
               parseToDoItems(this.responseText);
               adTodosToPage();
            }

            else
            div.innerText = "Error: No Data is being passed";
        }
    }
    request.send(); //Enviar a requisição
}

function parseToDoItems(todoJSON)
{
    if(todoJSON == null || todoJSON.trim() == "")
    {
        console.log("Error: No data Found");
        return;
    }
    
   
    var todoArray = JSON.parse(todoJSON);
    if(todoArray.length == 0)
    {
        console.log("Error: No data Found");
        return;
    }

    for(var i=0; i<todoArray.length; i++)
    {
       var todoItem =  todoArray[i];
      
       todos.push(todoItem); 
      
    }

   
}

function adTodosToPage()
{
    var ul = document.getElementById("todoList");
    for(var i=0; i<todos.length; i++)
    {
       var todoItem = todos[i];
       var li = document.createElement("li");
       li.innerText = todoItem.who + " needs to" + todoItem.task + " by" + todoItem.dueDate;
       ul.appendChild(li);
    }
}

function getFormData()
{
    var task = document.getElementById("task").value;
    console.log(task);
    if(checkInputText(task,"Please enter a task")) return;

    var who = document.getElementById("who").value;
    if(checkInputText(who,"Enter the name of the person who's going to do")) return;

    var dueDate = document.getElementById("dueDate").value;
    if(checkInputText(dueDate,"Please enter the due date of the task")) return;
    
    console.log("New task: " + task + " for: " + who + " by: " +dueDate);

    var todoItem = new Todo(task,who,dueDate);
    todos.push(todoItem);
    addTodosToPage(todoItem);
    saveTodoData();
    

}

function checkInputText(value, msg)
{
  if(value == null || value == "")
  {
      alert(msg);
      return true;
  }

  else
  {
    return false;
  }
  

}



function addTodosToPage(todoItem)
{
  var ul = document.getElementById("todoList");
  var li = document.createElement("li");
      li.innerHTML = todoItem.who + " needs to " + todoItem.task + " by " + todoItem.dueDate;
      ul.appendChild(li);

      document.forms[0].reset();
}

function saveTodoData()
{
    var todosJSON = JSON.stringify(todos);
    var request = new XMLHttpRequest;
    var URL = "save.php?data=" + encodeURI(todosJSON);
    request.open("GET",URL);
    request.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
    request.send();
}