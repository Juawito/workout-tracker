const mongoose = require('mongoose');

const {Schema} = mongoose;

const workoutSchema = new Schema({
    exercises: [{
        name: {
            type: String,
            trim: true,
            required: "Enter the name of the new exercise.",
        },
        type: {
            type: String,
            required: 'Enter what type of workout this is.'
        },
        weight: {
            type: Number,
            default: null,
        },
        sets: {
            type: Number,
            default: null,
        },
        reps: {
            type: Number,
            default: null,
        },
        duration: {
            type: Number,
            default: null,
            required: 'Enter a duration for the exercise.'
        },
        distance: {
            type: Number,
            default: null,
        }
    }],
    day: {
        type: Date,
        default: new Date(Date.now()).toISOString()
    }
})

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;