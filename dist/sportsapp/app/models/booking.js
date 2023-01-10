const mongoose = require('mongoose');
const schema = mongoose.Schema;

const BookingSchema = new schema({
    datetime: {type: String},
    players_allowed: {type: Number},
    places_left: {type: Number},
    venue: {type: String},
    target: {type: String}, // intended users of this slot may be faculty or students only.
    booking_details: {type: Object},
}, {collection: 'booking'});

const Booking = mongoose.model('booking', BookingSchema);
module.exports= Booking;
