const mongoose=require("mongoose")
const bookingSchema = new mongoose.Schema({
    name: String,
    image: String,
    rating: Number,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  });
  
  const Booking = mongoose.model('Booking', bookingSchema);
  module.exports=Booking