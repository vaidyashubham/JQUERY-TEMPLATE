// JavaScript AJAX in Javascript way
let theButton = document.querySelector('#js-ajax');
let imageGalleyDiv = document.querySelector('#image-gallery-div');

theButton.addEventListener('click',function() {
    // AJAX Process

    // Create an AJAX request
    let http = new XMLHttpRequest();

    // Prepare the AJAX Request
    http.open('GET','https://api.myjson.com/bins/1bi2uu' , true);

    // Send the Request
    http.send();

    // Trace the AJAX Request
    http.onreadystatechange = () => {
        // Response is ready n status is OK
        if(http.readyState === 4 && http.status === 200){
            let theData = http.responseText;
            let jsonObject = JSON.parse(theData);
            let contactList = jsonObject.contacts;
            processData(contactList);
        }
    };
});

            // process the data
let processData = (contactList) => {
    let imageTags = '';
    contactList.forEach((contact) => {
        let imageAddress = contact.picture.large;
        imageTags += `<img src="${imageAddress}">\n`;
    });
    imageGalleyDiv.innerHTML = imageTags;
};