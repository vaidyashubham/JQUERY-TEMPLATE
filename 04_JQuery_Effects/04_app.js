// Hide & Show
$('#btn-1').click(function() {
    if($(this).text() === 'HIDE'){
        $('#card-1').hide(1000);
        $(this).text('SHOW');
    }
    else{
        $('#card-1').show(1000);
        $(this).text('HIDE');
    }
});

    // Hide & Show = Toggle
$('#btn-2').click(function() {
    $('#card-2').toggle(1000);
    ($(this).text() === 'HIDE') ? $(this).text('SHOW') : $(this).text('HIDE');
});

// fadeOut & fadeIn
$('#btn-3').click(function() {
    if($(this).text() === 'FADEOUT'){
        $('#card-3').fadeOut(1000);
        $(this).text('FADEIN');
    }
    else{
        $('#card-3').fadeIn(1000);
        $(this).text('FADEOUT');
    }
});

// fadeOut & fadeIn = fadeToggle
$('#btn-4').click(function() {
    $('#card-4').fadeToggle(1000);
    ($(this).text() === 'FADEOUT') ? $(this).text('FADEIN') : $(this).text('FADEOUT');
});

// slideUp & slideDown
$('#btn-5').click(function() {
    if($(this).text() === 'SLIDEUP'){
        $('#card-5').slideUp(1000);
        $(this).text('SLIDEDOWN');
    }
    else{
        $('#card-5').slideDown(1000);
        $(this).text('SLIDEUP');
    }
});

// slideUp & slideDown = slideToggle
$('#btn-6').click(function() {
    $('#card-6').slideToggle(1000);
    ($(this).text() === 'SLIDEUP') ? $(this).text('SLIDEDOWN') : $(this).text('SLIDEUP');
});