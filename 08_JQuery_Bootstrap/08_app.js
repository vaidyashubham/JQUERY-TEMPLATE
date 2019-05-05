const cardHeader = $('#form-card-header');
const cardTitle = $('#card-title');
const theButton = $('#submit-button');

// Login Button Click event
$('#login-button').click(function() {
    cardHeader.removeClass('bg-teal').removeClass('bg-warning').addClass('bg-success');
    cardTitle.text('Login Here');
    theButton.removeClass('btn-teal').removeClass('btn-warning').addClass('btn-success').text('Login');
});

// Register Button Click event
$('#register-button').click(function() {
    cardHeader.removeClass('bg-teal').removeClass('bg-success').addClass('bg-warning');
    cardTitle.text('Register Here');
    theButton.removeClass('btn-teal').removeClass('btn-success').addClass('btn-warning').text('Register');
});

// SignUp Button Click event
$('#signup-button').click(function() {
    cardHeader.removeClass('bg-success').removeClass('bg-warning').addClass('bg-teal');
    cardTitle.text('Signup Here');
    theButton.removeClass('btn-success').removeClass('btn-warning').addClass('btn-teal').text('SignUp');
});