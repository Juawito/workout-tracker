const mongoose = require('mongoose');

const {Schema} = mongoose;

const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Enter a name for the new workout'
    },
    all_exercises: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise',
    }],
    date: {
        type: Date,
        default: Date.now()
    }
})

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;