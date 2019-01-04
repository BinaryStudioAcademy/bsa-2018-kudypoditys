const propertyService = require("./property");
const reservationService = require("./reservation");
const availabilityService = require("./availability");
const roomService = require("./room");
const moment = require("moment");
const dateHelpers = require("../helpers/date-helpers")

class PropertyReservationService {

    async updatePropertyLastBooking(id,date) {
       return await propertyService.updateById(id, {'lastBooked' : date})
    }

    //Сount of booked rooms: Implement! 
    async wasBookedLastDay(propertyId) {
      try {
          const rooms = await roomService.findByOptions({
              propertyId: propertyId
          });
          let booked = 0;
          for (let i = 0; i < rooms.length; i++) {
              const reservations = await reservationService.findByOptions({
                  roomId: rooms[i].id
              });
              for (let i = 0; i < reservations.length; i++) {
                  if (
                      moment(reservations[i].createdAt).add(1, "days") >
                      moment()
                  )
                      booked++;
              }
          }
          return Promise.resolve(booked);
      } catch (err) {
          return Promise.reject(err);
      }
  }

  async getLastReservation(room, checkIn, checkOut){
      try {
          const bookings = await reservationService.findByRoomAndDates(room, checkIn, checkOut);
          bookings.sort( (a, b) => {
              return b.id - a.id;
          });
          const lastBooking = bookings[0];
          return Promise.resolve(lastBooking);
      } catch (err) {
          return Promise.reject(err);
      }
  }

  async available(room, checkIn, checkOut) { // TODO: Rostik avalibility rooms logic
      try {
          const bookings = await reservationService.findByRoomAndDates(room, checkIn, checkOut);
          const availabilities = await availabilityService.findByOptions({
              roomId: room.id
          });

          if (availabilities.length) {
              for (
                  let i = moment(checkIn);
                  i <= moment(checkOut);
                  i = moment(i).add(1, "day")
              ) {
                  let availability = await availabilities.find(item => {
                      return item.date === moment(i).date();
                  });
                  let roomAmount = availability.amount;

                  for (let i = 0; i < bookings.length; i++) {
                      if (
                          moment(bookings[i].dateIn).date() <
                              availability.date &&
                          moment(bookings[i].dateOut).date() >
                              availability.date
                      )
                          roomAmount--;
                  }
                  if (roomAmount <= 0) return Promise.resolve(false);
              }
              return Promise.resolve(true);
          } else {
              // TODO: fix reservation calculation
              // actually both options are wrong. reservations should be counted for each day of booking separately
              //
              // let roomAmount = room.amount;
              // for (let i = 0; i < bookings.length; i++) {
              //     if (
              //         reservationService.datesIntersect(
              //             checkIn,
              //             checkOut,
              //             bookings[i].dateIn,
              //             bookings[i].dateOut
              //         )
              //     )
              //         roomAmount--;
              // }
              let roomAmount = room.amount - bookings.length;
              return Promise.resolve(roomAmount);
              // if (roomAmount <= 0) return Promise.resolve(false);
              // return Promise.resolve(true);
          }
      } catch (err) {
          return Promise.reject(err);
      }
  }

  async checkAvailability(value) {
   try {
       let result = [];
       const rooms = await roomService.findByOptions({
           propertyId: value.propertyId
       });

       for (let i = 0; i < rooms.length; i++) {
           //ТУТА
           rooms[i].available = await this.available(
               rooms[i],
               value.checkIn,
               value.checkOut
           );
           //ТУТА
           const lastReservation = await this.getLastReservation(rooms[i], value.checkIn, value.checkOut);
           if (lastReservation) {
               const daysTotal = dateHelpers.dateDiff('d',lastReservation.dateIn, lastReservation.dateOut);
               const bookedDaysAgo = dateHelpers.dateDiff('d',lastReservation.createdAt, dateHelpers.getEndOfTodayDate());
               rooms[i].lastReservation = {
                   // dateBooked: lastReservation.createdAt,
                   bookedDaysAgo: bookedDaysAgo,
                   pricePerNight: lastReservation.priceTotal / daysTotal,
                   // dateIn: lastReservation.dateIn,
                   // dateOut: lastReservation.dateOut,
                   // daysTotal: daysTotal,
                   // priceTotal: lastReservation.priceTotal,
               };
           };
           result.push(rooms[i]);
       }
       return Promise.resolve(result);
   } catch (err) {
       return Promise.reject(err);
   }
   }
 }

module.exports = new PropertyReservationService();