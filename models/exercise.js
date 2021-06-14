const mongoose = require('mongoose');
const {Schema} = mongoose;

const exerciseSchema = new Schema({
    // name type weight sets reps duration distance 
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
    },
    distance: {
        type: Number,
        default: null,
    }
})
const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;