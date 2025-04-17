import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WorkoutTracker = ({ userId }) => {
    const [exercises, setExercises] = useState([{ name: '', duration: '', caloriesBurned: '' }]);
    const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
    const [workouts, setWorkouts] = useState([]);

    const handleChange = (index, field, value) => {
        const updated = [...exercises];
        updated[index][field] = value;
        setExercises(updated);
    };

    const addExercise = () => {
        setExercises([...exercises, { name: '', duration: '', caloriesBurned: '' }]);
    };

    const saveWorkout = async () => {
        try {
            const res = await axios.post('http://localhost:5001/api/workouts', {
                userId,
                exercises,
                date
            });
            alert("Workout saved!");
            setWorkouts([...workouts, res.data]);
            setExercises([{ name: '', duration: '', caloriesBurned: '' }]);
        } catch (err) {
            console.error(err);
            alert("Failed to save workout");
        }
    };

    return (
        <div>
            <h2>Workout Tracker</h2>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            {exercises.map((exercise, i) => (
                <div key={i}>
                    <input placeholder="Exercise Name" value={exercise.name} onChange={(e) => handleChange(i, 'name', e.target.value)} />
                    <input placeholder="Duration (mins)" value={exercise.duration} onChange={(e) => handleChange(i, 'duration', e.target.value)} />
                    <input placeholder="Calories Burned" value={exercise.caloriesBurned} onChange={(e) => handleChange(i, 'caloriesBurned', e.target.value)} />
                </div>
            ))}
            <button onClick={addExercise}>Add Exercise</button>
            <button onClick={saveWorkout}>Save Workout</button>
        </div>
    );
};

export default WorkoutTracker;
