$( document ).ready(function() {
    console.log( "ready!" );
    addHandlers();
});

function addHandlers(){
    // openNav();
    // closeNav();
    hamburgerMenuClick();
    saveProductClick();
}

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function hamburgerMenuClick(){
$('#hamburgerMenu').click(function(){
    openNav();
});
}

function saveProductClick(){
    $("#saveProductDetails").click(function(){
        saveProductDetails();
    })
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
})

}