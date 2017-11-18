$( document ).ready(function() {
    console.log( "ready!" );
    addHandlers();
});

function addHandlers(){
    saveProductClick();
}

function saveProductClick(){
    $("#saveProductDetails").click(function(){
        saveProductDetails();
    });
}

//MOVE TO A SEPARATE JAVASCRIPT FILE PRODUCT-DETAIL.JS
function saveProductDetails(){
    var data = $('#productDetailForm').serialize();
    debugger;
    $.ajax({
        type: "POST",
        url: "/product/create",
        data: data,
        success: function(data){

        },
        error: function(xhr){
            alert('Unable to create product')
        }
    });
}