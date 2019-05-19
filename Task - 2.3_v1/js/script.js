function TicketBookingApp() {
  var totalSeats = 20;
  var seatsRemaining;
  var totalNumberOfSeatSelected = 0;
  var bookedTickets = [];
  var dateOfJourney;
  var amountToBePaid = 0;
  var fares;

  var $showAvailableSeats = $('.show-available-seats');
  var $form = $('form');
  var $ticketConfirm = $('.ticket-confirm');
  var $bookAnotherSeat = $('.book-another-seat');
  var $availableSeats = $('.available-seats');
  var $totalAmount = $('.total-amount');
  var $busLayout = $('.bus-layout');
  var $payment = $('.payment');
  var $vacantSeats = $('.vacant-seats');
  var $bookingDate = $('.booking-date');
  var $datepicker = $('#datepicker');
  /**
   * Seat Booking Section
   */
  toggleInitialData();

  function toggleInitialData(){
    $busLayout.hide();
    $showAvailableSeats.text(seatsRemaining);
    $form.hide();
    $vacantSeats.html('');
    $ticketConfirm.hide();
    $bookAnotherSeat.hide();
  }
  function toggleBusLayout() {
    $busLayout.show();
    $showAvailableSeats.text(seatsRemaining);
    $form.hide();
    // $vacantSeats.html('');
    $ticketConfirm.hide();
    $bookAnotherSeat.hide();
  }
  /**
   * Adding a datepicker to select a date to check seat availability and select date of journey
   */

  $datepicker.datepicker({
    onSelect:  function showBookedTicketsByDate() {
      dateOfJourney = $datepicker.val();
      validateSelectedDate();
    },
    minDate: 0,
    maxDate: '+1M',
    required: 'true'
  });

 

  function validateSelectedDate() {
    if(dateOfJourney !== '') {
      showAvailableSeats();
      showBookedSeats();
      getNumberOfSeatsAvailable();
      toggleBusLayout();
  }
}
  function showBookedSeats() {
    var seatBookingArray = bookingsData.filter((booking) => {
      return dateOfJourney === booking.date;
    });
    for (let i = 0; i < seatBookingArray.length; i++) {
      for (let j = 0; j < seatBookingArray[i].bookedTickets.length; j++) {
        $(`[data-seat="${seatBookingArray[i].bookedTickets[j]}"]`).addClass('bookedSeats');
      }
    }
  }

  function showAvailableSeats() {
    for (let j = 0; j < 20; j++) {
      $(`[data-seat="${j}"]`)
        .removeClass('selected-seats bookedSeats')
        .addClass('available-seats');
    }
  }

  function getNumberOfSeatsAvailable() {
    $vacantSeats.html('');
    $vacantSeats.append('<span>Available Seats : <span class="show-available-seats">' + `${ totalSeats - totalNumberOfSeatSelected}` + '</span>')
    .show()
    .css({
      fontSize: '30px',
      fontWeight: 'bold',
    });
    $vacantSeats.show();
  }
  /**
   * Selecting a seat on click 
   */
  function selectSeat(e) {
    for (let i = 0; i < availableSeats.length; i++) {
      var currentSeatSelected = 0;
      if (availableSeats[i].id == e.currentTarget.attributes[0].nodeValue && availableSeats[i].isAvalable) {
        totalNumberOfSeatSelected += 1;
        currentSeatSelected += 1;
        $totalAmount.html('');
        $(this).toggleClass('selected-seats');
        bookedTickets.push(i + 1);
        seatsRemaining = bookedSeats.splice(bookedSeats[i], 1);
        if (availableSeats[i].isWindowSeat === 'true') {
          calculateAmountForWindowSeat(currentSeatSelected);
        } else {
          calculateAmountForNormalSeat(currentSeatSelected);
        }
      }
    }
  }
  /**
   * Calculating fares of booked seats
   */
  function calculateAmountForWindowSeat(seatSelected) {
    currentSeatSelected = seatSelected;
    amountToBePaid += currentSeatSelected * (900 + ((10 / 100) * 900));
    $totalAmount.append('<span class="amount">Total Amount :' + `${ amountToBePaid}` + '</span>');
  }

  function calculateAmountForNormalSeat(seatSelected) {
    currentSeatSelected = seatSelected;
    amountToBePaid += currentSeatSelected * 900;
    $totalAmount.append('<span class="amount">Total Amount :' + `${ amountToBePaid}` + '</span>');
  }
  /**
   * Payment section
   */
  function toggleForm() {
    $busLayout.hide();
    $vacantSeats.hide();
    $bookingDate.hide();
    $bookAnotherSeat.hide();
    $form.show();
  }

  function makePayment() {
    validateSeats();
    $payment.addClass('booking');
    //dateOfJourney = $datepicker.val();
    toggleForm();
    fares = amountToBePaid;
    amountToBePaid = 0;
  }
  function validateSeats() {
    if(totalNumberOfSeatSelected === 0){
      alert('Please select the seat.');
    }else{
      return false;
    }
  }
  /**
   * Seat confirmation section
   */

  function getConfirmTicketMsg() {
    var customerName = $('#name').val();
    $('.confirm').addClass('booking');
    addBooking(customerName, bookedTickets, dateOfJourney, amountToBePaid);
    printCustomerData(customerName);
  }

  function printCustomerData(customerName) {
    var $displayName = $(".display-name");
    var $displayPrice = $(".display-price");
    var $displayDOJ = $(".display-doj");
    var $displaySeatNum = $(".display-seat");
    $displayName.text(customerName);
    $displaySeatNum.text(bookedTickets.join(','));
    $displayDOJ.text(dateOfJourney);
    $displayPrice.text(fares);
    bookedTickets = [];
    dateOfJourney = '';
    toggleConfirmMsg();
  }

  function addBooking(customerName, bookedTickets, dateOfJourney, amountToBePaid) {
    var objBooking = {
      name: customerName,
      date: dateOfJourney,
      price: fares,
      bookedTickets: bookedTickets
    };
    bookingsData.push(objBooking);
    return objBooking;
  }

  function toggleConfirmMsg() {
    $form.hide();
    $busLayout.hide();
    $ticketConfirm.show();
    $bookAnotherSeat.show();
  }

  /**
   * Book another seat button
   */
  function bookAnotherSeat() {
    $datepicker.attr('placeholder', 'Select a date').val("").focus().blur();;
    toggleBookingDate();
  }

  function toggleBookingDate() {
    $bookingDate.show();
    $busLayout.hide();
    $ticketConfirm.hide();
    $bookAnotherSeat.hide();
  }
  /**
   * Form validation
   */

  function validateForm(e) {
    var name = $('#name').val();
    var cardNo = $('#cardNo').val();
    var month = $('#month').val();
    var year = Number($('#year').val());
    var regExr = /^(?:\d[ -]*?){12}$/;
    if (name === '') {
      alert("Enter a name.");
      return false;
    }
    else if(!regExr.test(cardNo)){
      alert("Enter a valid card number.");
      return false;
    }
    else if(month === '' || month < 1 || month > 12){
      alert("Enter a proper month.");
      return false;
    }
    else if(year === ''){
      alert("Enter a proper year.");
      return false;
    }
    getConfirmTicketMsg(); 
    e.preventDefault();
  }
  /**
   * Start your booking here!
   */
  function initiateBookingSeat() {
    $availableSeats.on('click', selectSeat);
    $('#paymentButton').on('click', makePayment);
    $('#paynow').click(validateForm);
    $bookAnotherSeat.click(bookAnotherSeat);
  }
  return {
    initiateBookingSeat: initiateBookingSeat
  }
}
/**
 * Initialize booking
 */
$(document).ready(function () {
  var ticketBookingAppObj = TicketBookingApp();
  ticketBookingAppObj.initiateBookingSeat();
});