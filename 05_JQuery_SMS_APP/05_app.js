// SMS App
$('#text-area').keyup(function() {
    $('#span').text(100 - $(this).val().length);
});

// Show Password
$('#check').change(function() {
    let passwordBox = $('#password-box');
    if(passwordBox.attr('type') === 'password'){
        passwordBox.attr('type','text');
    }
    else{
        passwordBox.attr('type','password');
    }
});

// TriangleOne
$('#triangle-one-input').keyup(function () {
    let theVal = $(this).val();
    $('#triangle-one-text').text(triangleOne(theVal));
});
