const router = require('express').Router();
const Workout = require('../../models/workout.js');

// To Do 
// post route to add excersises to previous workout plan
// post route to add excersises to new workout plan
// get route to view combined weight for last seven workouts on stats page.
// get route to view combined duration for last seven workouts on stats page.

router.post("/workouts", async ({ body }, res) => {
    try {
        let newWorkout = await Workout.create(body)
        if (!newWorkout) {
            res.status(400).json(newWorkout);
        }
        res.status(200).json(newWorkout);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.get('/workouts', async ({ body }, res) => {
    try {
        let allWorkouts = await Workout.find({}).sort({ date: -1 });

        if (!allWorkouts) {
            res.status(500).json({ message: 'No workouts are in the database' })
        }
        res.status(200).json(allWorkouts);
    } catch (error) {
        res.status(400).json(error)
    }
})
router.put('/workouts/:id', async ({ body, params }, res) => {
    try {
        let workoutData = await Workout.findOneAndUpdate({ _id: params.id }, {
            $push: { exercises: body }
        },
            { new: true });
        if (!workoutData) {
            res.status(404).json({ message: 'Could not find the workout.' })
        }
        res.status(200).json(workoutData);


    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/workouts/range', async (req, res) => {
    try {
        const lastSevenWorkouts = await Workout.find({ day: { $lte: new Date(Date.now()).toISOString() } }).
            sort({ day: -1 });

        if (!lastSevenWorkouts) {
            res.status(400).json({ message: 'Your database does not have any workouts' });
        }

        res.status(200).json(lastSevenWorkouts);

    } catch (error) {
        res.status(500).json(error)
    }

})

module.exports = router;