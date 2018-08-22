var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/itinisaver');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose connected!');
});

var userSchema = new mongoose.Schema({
  name: String,
  bio: String,
  password: String,
  itineraries: [
    {type: Schema.Types.ObjectId, ref: 'Itinerary'}
  ],
  comments: [
    {type: Schema.Types.ObjectId, ref: 'Comment'}
  ],
  users_blocked: [
    {type: Schema.Types.ObjectId, ref: 'User'}
  ],
});

var itinerarySchema = new mongoose.Schema({
  name: String,
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  description: String,
  dates: {
    start: Date,
    end: Date,
  },
  last_updated: Date,
  created_at: Date,
  privacy: String,
  stops: [
    name: String,
    location: {
      lat: Number,
      lng: Number,
      place_id: String, //this is not a Mongo ID, but the ID returned by the Google Maps Place API
    }
    date: Date,
    notes: String,
    comments: [
      {type: Schema.Types.ObjectId, ref: 'Comment'}
    ],
    //Photos: photos uploaded by the user for the stop (figure out how to implement this some other day)
  ],
});

var commentSchema = new mongoose.Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  date: Date,
  location: {
    itinerary: {type: Schema.Types.ObjectId, ref: 'Itinerary'},
    stop: String, //name of the stop itself, not an ID
  },
  text: String,
});

var User = mongoose.model('User', userSchema);
var Itinerary = mongoose.model('Itinerary', itinerarySchema);
var Comment = mongoose.model('Comment', commentSchema);

module.exports = {
  User: User,
  Itinerary: Itinerary,
  Comment: Comment,
}