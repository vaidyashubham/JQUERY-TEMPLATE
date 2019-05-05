$('#username').keyup(function () {
    let theVal = $(this).val();
    $('#user_text').text(theVal);
});

$('#password').keyup(function () {
    let theVal = $(this).val();
    $('#pass_text').text(theVal);
});

$('#email').keyup(function () {
    let theVal = $(this).val();
    $('#email_text').text(theVal);
});
