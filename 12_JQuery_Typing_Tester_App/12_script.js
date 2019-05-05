// Get the HTML elements
let clapAudio = $('#clap-sound');
let congratsAudio = $('#congrats-sound');
let originalTextElement = $('#original-text');
let textArea = $('#text-area');
let messageCard = $('#message-card');
let messageElement = $('#message');
let resetButton = $('#reset-button');
let minutesElement = $('#minutes');
let secondsElement = $('#seconds');
let milliSecondsElement = $('#m-seconds');
let timerRunning = false;
let timer = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let interval = 0;
let textArray = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem culpa,',
    'deleniti fugit labore laudantium nobis odit porro praesentium quasi quia sapiente ',
    'sed suscipit tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi',
    'cumque doloremque eligendi, facere obcaecati optio perferendis voluptatum. ',
    'Accusamus accusantium ad, assumenda, eius et fugiat inventore ipsam maxime minima ',
    'minus nesciunt optio provident quisquam quod saepe sed suscipit totam. Accusantium',
    'consectetur dolorem ducimus earum iste laborum molestias porro tempora. A amet,',
    'animi, consectetur cumque dolore exercitationem explicabo ipsa iure maiores odit',
    'perspiciatis provident quisquam quod ratione repellendus saepe tempora vel veniam ',
    'quisquam quod ratione repellendus saepe tempora vel veniam voluptas voluptatum! Labore obcaecati sequi veniam.',
    'tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi cumque doloremque eligendi'];

// Keyup event for TextArea
textArea.keyup(function() {
    let textEnteredLength = $(this).val().length;
    let originalText = originalTextElement.text();
    let textEntered = $(this).val();
    let partialText = originalText.substr(0,textEntered.length);
    callTimer(textEnteredLength);
    evaluateText(originalText,partialText,textEntered);
});

// Click on Reset Button
resetButton.click(function() {
    clearInterval(interval);
    clearFields();
    textArea.val('');
    messageCard.removeClass('bg-success').removeClass('bg-danger').removeClass('bg-primary').addClass('bg-light');
    messageElement.text('');
    minutesElement.text('00');
    secondsElement.text('00');
    milliSecondsElement.text('00');
    generateRandomText();
});

// Evaluate Text
let evaluateText = (originalText,partialText,textEntered) => {
    if(textEntered === ''){
        // gray
        messageCard.removeClass('bg-success').removeClass('bg-danger').removeClass('bg-primary').addClass('bg-light');
        messageElement.text('');
    }
    else{
        if(textEntered === originalText){
            // success
            messageCard.removeClass('bg-light').removeClass('bg-danger').removeClass('bg-primary').addClass('bg-success');
            messageElement.text('Congratulations');
            // Stop The Timer
            clearInterval(interval);
            // Play the Sound
            congratsAudio.trigger('play');
        }
        else{
            if(textEntered === partialText){
                // primary
                messageCard.removeClass('bg-light').removeClass('bg-danger').removeClass('bg-success').addClass('bg-primary');
                messageElement.text('Correct !!');
            }
            else{
                // danger
                messageCard.removeClass('bg-light').removeClass('bg-primary').removeClass('bg-success').addClass('bg-danger');
                messageElement.text('Wrong !!');
                clapAudio.trigger('play');
            }
        }
    }
};

// Call Timer
let callTimer = (textEnteredLength) => {
    if(textEnteredLength === 1 && !timerRunning){
        // start Timer
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
};

// Start Timer
let startTimer = () => {
    timer++;

    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));
    milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));

    minutesElement.text(leadingZero(minutes));
    secondsElement.text(leadingZero(seconds));
    milliSecondsElement.text(leadingZero(milliSeconds));
};

// Leading Zero Function
let leadingZero = (time) => {
    if(time <= 9){
        return '0' + time;
    }
    else{
        return time;
    }
};

// Clear Fields
let clearFields = () => {
    timerRunning = false;
    timer = 0;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    interval = 0;
};

// Generate Random Text
let generateRandomText = () => {
    let randomIndex = Math.round(Math.random() * 10);
    let randomString = textArray[randomIndex];
    originalTextElement.text(randomString.trim());
};