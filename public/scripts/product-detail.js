$( document ).ready(function() {
    console.log( "ready!" );
    addHandlers();
});

function addHandlers(){
    loadTodos();
    saveTodoClick();
    todoClick();
}

function saveTodoClick(){
    $("#saveTodo").click(function(){
        createTodo();
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
function createTodo(){
    var todoTitle = $('#title').val();
    data = {title: todoTitle}
    $.ajax({
        type: "POST",
        url: "/api/todos",
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

function loadTodos(){
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
            todoClick();
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
        var todoTitle = "<div><a class='todo-title' data-id='"+ id +"'>"+ title + "</a></div>";
        $("#todoContainer").append(todoTitle);
    }
}