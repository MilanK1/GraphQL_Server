const mongoose = require('mongoose');

const clientSchema = mongoose.Schema(
  
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: false,
        },
        name: {
            type: String,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            required: true,
        },
        phone: {
            type: String,
            trim: true,
            required: true,
        }
    },
  

  { timestamps: {}, versionKey: false },
);

module.exports = mongoose.model('Client', clientSchema);
