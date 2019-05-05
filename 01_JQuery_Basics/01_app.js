    $('#green-btn').click(function() {
    let btnText = $(this).text();
    if(btnText === 'HIDE'){
        $(this).text('SHOW');
    }
    else{
        $(this).text('HIDE');
    }
    $('#green-card').toggle(1000);
});