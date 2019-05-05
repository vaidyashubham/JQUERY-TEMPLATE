let imageRow = $('#images-row');

// JQuery AJAX for Random User
let callAJAX = () => {
    // JQuery AJAX for random User
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            let person = data.results[0];
            processData(person);
        }
    });
};

setInterval(callAJAX,1000);


// Process the Data
let processData = (person) => {
        let imageTag = '';
        let imageAddress = person.picture.large;
         imageTag = `<div class="col-md-2">
                         <img src="${imageAddress}" class="img-fluid rounded-circle img-thumbnail">
                         <h6>${person.name.first} ${person.name.last}</h6>
                     </div>`;
        imageRow.append(imageTag);
};