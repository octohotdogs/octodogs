// COMMENTED OUT FOR FRONT END
// var mongoose = require('mongoose');
// var ObjectId = mongoose.Types.ObjectId;

// var octodogUserId = new ObjectId;
// var tentacatUserId = new ObjectId;
// var helloWorldItinId = new ObjectId;
// var anotherJourneyItinId = new ObjectId;

module.exports.users = [
  {
    name: 'Octodog',
    bio: 'woof woof',
    password: '', // FILL ME IN LATER
    itineraries: [],
    comments: [ /* FILL ME IN LATER */ ],
    users_blocked: [ /* FILL ME IN LATER */ ],
  },

  {
    name: 'tentacat',
    bio: '...',
    password: '', // FILL ME IN LATER
    itineraries: [],
    comments: [ /* FILL ME IN LATER */ ],
    users_blocked: [ /* FILL ME IN LATER */ ],
  },
];

// stop locations taken from https://developers.google.com/places/web-service/search
module.exports.itineraries = [
  {
    name: 'Hello World',
    user: null,
    description: 'my first itinerary!',
    dates: {
      start: new Date(2017, 11, 1),
      end: new Date(2017, 11, 17),
    },
    last_updated: new Date(2017, 11, 18),
    created_at: new Date(2017, 10, 29),
    privacy: 'private',
    stops: [
      {
        name: 'Rhythmboat Cruises',
        location: {
          lat: -33.870775,
          lng: 151.199025,
          place_id: '21a0b251c9b8392186142c798263e289fe45b4aa',
        },
        date: new Date(2017, 11, 14),
        notes: 'it\'s a stop!',
        comments: [ /* FILL ME IN LATER */ ],
      },
      {
        name: 'Private Charter Sydney Habour Cruise',
        location: {
          lat: -33.866891,
          lng: 151.200814,
          place_id: '45a27fd8d56c56dc62afc9b49e1d850440d5c403',
        },
        date: new Date(2017, 11, 15),
        notes: 'take a hike',
        comments: [ /* FILL ME IN LATER */ ],
      },
      {
        name: 'Bucks Party Cruise',
        location: {
          lat: -33.870943,
          lng: 151.190311,
          place_id: '30bee58f819b6c47bd24151802f25ecf11df8943',
        },
        date: new Date(2017, 11, 16),
        notes: 'or maybe a swim?',
        comments: [ /* FILL ME IN LATER */ ],
      },
    ]
  },

  {
    name: 'Another Journey',
    user: null,
    description: 'this itinerary has only one stop',
    dates: {
      start: new Date(2018, 3, 1),
      end: new Date(2018, 3, 8),
    },
    last_updated: new Date(2018, 1, 1),
    created_at: new Date(2018, 1, 1),
    privacy: 'unlisted',
    stops: [
      {
        name: 'Australian Cruise Group',
        location: {
          lat: -33.867591,
          lng: 151.201196,
          place_id: 'a97f9fb468bcd26b68a23072a55af82d4b325e0d',
        },
        date: new Date(2018, 3, 5),
        notes: 'can I even afford this',
        comments: [ /* FILL ME IN LATER */ ],
      },
    ]
  },

];