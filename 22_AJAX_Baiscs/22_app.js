// click on the button
let callAJAX = () => {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            let person = data.results[0];
            displayCard(person);
        }
    });
};

setInterval(callAJAX,1000);

// display a Card
let displayCard = (person) => {
    let personCard = `<div class="col-md-3 mt-5">
                            <div class="card text-center t_card">
                                <div class="card-body">
                                    <img src="${person.picture.large}" class="img-fluid img-thumbnail rounded-circle w-50 t_img">
                                    <h4 class="mt-2">${person.name.first} ${person.name.last}</h4>
                                    <p class="lead">${person.dob.age}</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolore, ducimus eos esse eum explicabo ipsum nihil recusandae reiciendis soluta.</p>
                                    <div class="d-flex flex-row text-center justify-content-between">
                                        <div class="p-3">
                                            <i class="fab fa-facebook-f fa-2x text-teal"></i>
                                        </div>
                                        <div class="p-3">
                                            <i class="fab fa-twitter fa-2x text-teal"></i>
                                        </div>
                                        <div class="p-3">
                                            <i class="fab fa-github fa-2x text-teal"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
    $('#card-row').append(personCard);
};