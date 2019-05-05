
// click event
$('#blue-btn').click(function() {
    $(this).removeClass('btn-primary').addClass('btn-danger').text('register');
});

// DBL CLick
$('#red-btn').dblclick(function() {
    $(this).removeClass('btn-danger').addClass('btn-primary').text('Login');
});

// Click with Toggle
$('#green-btn').click(function() {
    if($(this).hasClass('btn-success')){
        $(this).removeClass('btn-success').addClass('btn-danger').text('signout')
    }
    else{
        $(this).removeClass('btn-danger').addClass('btn-success').text('signin')
    }
});

// Modal with JQuery
$('#btn-1').click(function() {
    $('#category-modal').modal('show');
});

$('#btn-2').click(function() {
    $('#category-modal').modal('hide');
});