// JavaScript AJAX
$('#js-ajax-btn').click(function() {
    // JavaScript AJAX

    // Create an AJAX Request
    let http = new XMLHttpRequest();

    // Prepare the Request
    http.open('GET', 'https://api.myjson.com/bins/1fnlkm' , true);

    // Send the Request
    http.send();

    // Track the Request
    http.onreadystatechange = () => {
        // Get the data if server is ready
        if(http.readyState === 4 && http.status === 200){
            let theData = http.responseText;
            processData(JSON.parse(theData));
        }
    };
});

// JQuery AJAX
$('#jquery-ajax-btn').click(function() {
    $.ajax({
        method : 'GET',
        url : 'https://api.myjson.com/bins/620cm',
        success : function(data) {
            processData(data);
        }
    });
});



// Process the Data
let processData = (persons) => {
    let theRows = '';
    persons.forEach((person) => {
        theRows += `<tr>
                        <td>${person.id}</td>
                        <td>${person.first_name}</td>
                        <td>${person.last_name}</td>
                        <td>${person.email}</td>
                        <td>${person.email}</td>
                        <td>${person.ip_address}</td>
                    </tr> \n`;

    });
    $('#table-body').empty().append(theRows);
};