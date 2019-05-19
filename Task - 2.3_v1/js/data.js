function BusSeatsData() {
  var totalSeats = [{
      id: 1,
      isAvalable: 'true',
      isWindowSeat: 'true'
    },
    {
      id: 2,
      isAvalable: 'true',
      isWindowSeat: 'true'
    },
    {
      id: 3,
      isAvalable: 'true',
      isWindowSeat: 'true'
    },
    {
      id: 4,
      isAvalable: 'true',
      isWindowSeat: 'true'
    },
    {
      id: 5,
      isAvalable: 'true',
      isWindowSeat: 'true'
    },
    {
      id: 6,
      isAvalable: 'true',
      isWindowSeat: 'false'
    },
    {
      id: 7,
      isAvalable: 'true',
      isWindowSeat: 'false'
    },
    {
      id: 8,
      isAvalable: 'true',
      isWindowSeat: 'false'
    },
    {
      id: 9,
      isAvalable: 'true',
      isWindowSeat: 'false'
    },
    {
      id: 10,
      isAvalable: 'true',
      isWindowSeat: 'false'
    },
    {
      id: 11,
      isAvalable: 'true',
      isWindowSeat: 'false'
    },
    {
      id: 12,
      isAvalable: 'true',
      isWindowSeat: 'false'
    },
    {
      id: 13,
      isAvalable: 'true',
      isWindowSeat: 'false'
    },
    {
      id: 14,
      isAvalable: 'true',
      isWindowSeat: 'false'
    },
    {
      id: 15,
      isAvalable: 'true',
      isWindowSeat: 'false'
    }, {
      id: 16,
      isAvalable: 'true',
      isWindowSeat: 'true'
    },
    {
      id: 17,
      isAvalable: 'true',
      isWindowSeat: 'true'
    },
    {
      id: 18,
      isAvalable: 'true',
      isWindowSeat: 'true'
    },
    {
      id: 19,
      isAvalable: 'true',
      isWindowSeat: 'true'
    },
    {
      id: 20,
      isAvalable: 'true',
      isWindowSeat: 'true'
    }
  ];
  
  var bookingsData = [];

  function getAvailableSeats() {
    var vacantSeats = totalSeats.slice();
    return vacantSeats;
  }

  function getBookedSeats() {
    var bookedSeats = totalSeats.slice();
    return bookedSeats;
  }
  return {
    getAvailableSeats: getAvailableSeats,
    getAvailableSeats: getBookedSeats,
    bookingsData: bookingsData
  }
}
var seatsObj = BusSeatsData();
var availableSeats = seatsObj.getAvailableSeats();
var bookedSeats = seatsObj.getAvailableSeats();
var bookingsData = seatsObj.bookingsData;