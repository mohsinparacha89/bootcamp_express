const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'name cannot be more than 50 characters']
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'description cannot be more than 500 characters']
  },
  website: String,
  phone: {
    type: String,
    maxlength: [20, 'Phone number cannot be longer than 20 characters']
  },
  email: String,
  address: {
    type: String,
    required: [true, 'Please enter an address']
  },
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'] // 'location.type' must be 'Point'
    },
    coordinates: {
      type: [Number],
      index: `2dsphere`
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String
  },

  careers: {
    //array of string
    type: [String],
    required: true,
    enum: [
      'Web Development',
      'Mobile Development',
      'UI/UX',
      'Data Science',
      'Business',
      'Other'
    ]
  },
  averageRating: {
    type: Number,
    min: [1, 'rating must at least be 1'],
    max: [10, 'rating cannot be greater than 10']
  },
  averageCost: Number,
  photo: {
    type: String,
    default: 'no-photo-jpeg'
  },
  housing: {
    type: Boolean,
    default: false
  },
  jobAssistance: {
    type: Boolean,
    default: false
  },
  jobGuarentee: {
    type: Boolean,
    default: false
  },
  acceptGi: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);
