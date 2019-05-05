// Tag / ID / ClassSelector
$('.test').click(function() {
    $(this).css({
        backgroundColor: 'coral',
        padding: '10px',
        boxShadow: '0 0 10px black'
    });
});

// Attribute Selector
let textBox = $('input[type="text"]');
textBox.focus(function () {
    $(this).css({
        backgroundColor: 'lightgreen'
    });
}).blur(function () {
    $(this).css({
        backgroundColor: 'white'
    });
});

