const mongoose = require('mongoose');
const Booking = require("../models/booking");

class Slot {
      constructor(slot_time,
            target,
            venue,
            players_allowed,
            booking_details,
            places_left) {
            this.slot_time = slot_time;
            this.target = target;
            this.venue = venue;
            this.players_allowed = players_allowed;
            this.booking_details = booking_details;
            this.places_left = places_left;
      }

}

class Details {
      constructor(ldap, booking_time, name) {
            this.ldap = ldap;
            this.booking_time = booking_time;
            this.name = name;
      }

}

function addSlots(request, response) {
      dates = request.body.dates;
      target = request.body.target;
      players_allowed = require('./booking_data.json')['players_allowed'];
      facility = request.body.facility;
      times = require('./booking_data.json')['facility']['times'];
      details = new Details("", 0, "");
      booking_details = Array(players_allowed).fill(booking_details);

      slots = [];
      for (let i = 0; i < dates.length; i++) {
            for (let j = 0; j < times.length; j++) {
                  total_time = new Date(dates[i].getTime() + times[i] * 60000);
                  slot = new Slot(dates[i] + times[j], target, facility, players_allowed, booking_details, players_allowed);
                  slots.push(slot);
            }
      }
      Booking.insertMany(slots).then(result => {
            response.status(200).json(result);
      }).catch(err => {
            response.status(500).send(err);
      })

}

function removeSlots(request, response) {
      var id = request.body.id;
      Bookings.findByIdAndRemove(
            { id: id },
            (err, doc) => {
                  if (err) {
                        return response.status(500).send(err);

                  }
                  return response.status(200).send(doc);
            }
      );

}

function addBooking(request, response) {
      ldap = request.body.ldap;
      name = request.body.name;
      booking_time = new Date();
      slot_id = request.body.slot_id;
      Booking.findById({ _id: slot_id }).then(result => {
            booking_details = result.booking_details;
            places_left = result.places_left;
            if (places_left == 0) {
                  response.send("Sorry, this was just booked");
            }
            else {
                  day_start = result.slot_time;
                  day_start.setHours(0, 0, 0);
                  day_end = day_start;
                  day_end.setHours(23, 59, 59);
                  Booking.findOne({ slot_time: { $gt: day_start, $lt: day_end }, 'booking_data.ldap': { $elemMatch: { ldap: ldap } } }).exec(doc => {
                        if (doc.length) {
                              response.status(200).send("already has a booking for this day");
                        }
                        else {
                              for (let i = 0; i < booking_details.length; i++) {
                                    if (booking_details[i]['ldap'] == 0) {
                                          details = new Details(ldap, booking_time, name);
                                          booking_details[i] = details;
                                          Booking.findByIdAndUpdate({ _id: slot_id }, { booking_details: booking_details, places_left: places_left - 1 }).then(doc => {
                                                response.status(200).json(doc);
                                                return 0;
                                          }).catch(err => {
                                                response.status(500).send(err);
                                          })
                                    }
                              }
                        }
                  })
            }

      }).catch(err => {
            res.status(500).send(err);
      })

}

function removeBooking(request, response) {
      slot_id = request.body.slot_id;
      ldap = request.body.ldap;
      current_time = new Date();
      Booking.findOne({ _id: slot_id, slot_time: { $gt: current_time } }).then(doc => {
            booking_data = doc.booking_data;
            places_left = doc.places_left;
            for (var i = 0; i < booking_data.length; i++) {
                  if (booking_data[i].ldap == ldap) {
                        booking_data[i]['ldap'] = "";
                        booking_data[i]['name'] = "";
                        booking_data[i]['booking_time'] = 0;
                  }
                  Booking.findByIdAndUpdate({ _id: slot_id }, { booking_data: booking_data, places_left: places_left + 1 }).then(doc => {
                        response.status(200).json(doc);
                  }).catch(err => {
                        response.status(500).send(err);
                  })
            }

      }).catch(err => {
            response.status(500).send(err);
      })
}

function getBookings(request, response) {
      filter_by = request.body.filter_by;
      facility = reqeust.body.facility;
      ldap = request.body.ldap;
      secy = require('./booking_data.json')[facility]['secy'];
      if (secy != ldap) {
            response.status(402).send("not authorised");
            return;
      }
      if (filter_by == 'time') {
            time_start = request.body.time_start;
            time_end = request.body.time_end;
            Booking.find({ slot_time: { $gt: time_start, $lt: time_end } }).exec(docs => {
                  response.status(200).json(docs);
            }).catch(err => {
                  response.status(500).send(err);
            })
      }
      else {
            ldap = request.body.ldap;
            Booking.find({ ldap: ldap }).exec(docs => {
                  response.status(200).send(docs);
            }).catch(err => {
                  response.status(500).send(err);
            })
      }
}

function getSlots(request, response) {
      ldap = request.query.ldap;
      facility = request.query.facility;
      time = new Date();
      day_start = time;
      day_end = time;
      plus_24 = new Date(time + 60 * 60 * 24 * 1000);
      day_start.setHours(0, 0, 0);
      day_end.setHours(23, 59, 59);
      Booking.findOne({ slot_time: { $gt: day_start, $lt: day_end }, 'booking_data.ldap': { $elemMatch: { ldap: ldap } } }).exec(doc => {
            if (doc) {
                  start_time = day_end;
                  end_time = plus_24;
            }
            else {
                  start_time = time;
                  end_time = plus_24;
            }
            Booking.find({ slot_time: { $gt: start_time, $lt: end_time } }).exec(docs => {
                  response.status(200).send(docs);

            }).catch(err => {
                  res.status(500).send(err);
            })
      }).catch(err => {
            res.status(500).send(err);
      })
}

module.exports = { addBooking, addSlots, removeBooking, removeSlots, getBookings, getSlots };