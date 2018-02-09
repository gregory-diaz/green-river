$( document ).ready(function() {
    console.log( "ready!" );
    addHandlers();
});

function addHandlers(){
    loadTodoItems();
    addTodoItem();
    todoClick();
}

function addTodoItem(){
    $("#bAddTodoItem").click(function(){
        createTodoItem();
    });
}

function loadTodoItems(){
    var id = $('#todoId').val();
    var url = "/api/todos/" + id;
    
    $.ajax({
        type: "POST",
        url: "/api/todos/",
        data: data,
        dataType:"json",
        success: function(data){
            window.location.reload();   
        },
        error: function(xhr){
            alert('Unable to create product')
        }
    });
}

function todoClick(){
    $(".todo-title").click(function(){
        debugger;
        var id = $(this).data("id");
        var url = "/todo-detail/"+ id;
        window.location.href = url;
    });
}

//MOVE TO A SEPARATE JAVASCRIPT FILE PRODUCT-DETAIL.JS
function createTodoItem(){
    var id = $('#todoId').val();
    var itemContent = $('#itemContent').val();
    data = {content: itemContent}
    var url = "/api/todos/" + id + "/items";
    console.log("***** Request URL *****");
    console.log(url);
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        dataType:"json",
        success: function(data){
            window.location.reload();
        },
        error: function(xhr){
            alert('Unable to create product')
        }
    });
}

function loadTodoItems(){
    data={}
    $.ajax({
        type: "GET",
        url: "/api/todos",
        data: data,
        dataType:"json",
        success: function(data){
            var todoData = data;
            console.log(data);
            createTodoRows(todoData);
        },
        error: function(xhr){
            alert('Unable to create product');
        }
    });
}

function createTodoRows(data){
    for (i=0;i<data.length;i++){
        // var x = JSON.stringify(data[i].title);
        var title = data[i].title;
        var id = data[i].id;
        var created = data[i].createdAt;
        var todoTitle = "<div><a class='todo-title'>"+ title + "</a></div>";
        $("#todoContainer").append(todoTitle);
    }
}