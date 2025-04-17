import React, { useState } from 'react';
import axios from 'axios';

const WorkoutTracker = ({ userId }) => {
    const [exercises, setExercises] = useState([
        { name: '', duration: '', caloriesBurned: '' }
    ]);

    const handleChange = (index, field, value) => {
        const updated = [...exercises];
        updated[index][field] = value;
        setExercises(updated);
    };

    const addExercise = () => {
        setExercises([...exercises, { name: '', duration: '', caloriesBurned: '' }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/workouts', {
                userId,
                exercises
            });
            alert('Workout saved!');
            setExercises([{ name: '', duration: '', caloriesBurned: '' }]);
        } catch (err) {
            console.error(err);
            alert('Error saving workout');
        }
    };

    return (
        <div>
            <h2>Workout Tracker</h2>
            <form onSubmit={handleSubmit}>
                {exercises.map((exercise, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            placeholder="Exercise Name"
                            value={exercise.name}
                            onChange={(e) => handleChange(index, 'name', e.target.value)}
                            required
                        />
                        <input
                            type="number"
                            placeholder="Duration (minutes)"
                            value={exercise.duration}
                            onChange={(e) => handleChange(index, 'duration', e.target.value)}
                            required
                        />
                        <input
                            type="number"
                            placeholder="Calories Burned"
                            value={exercise.caloriesBurned}
                            onChange={(e) => handleChange(index, 'caloriesBurned', e.target.value)}
                        />
                    </div>
                ))}
                <button type="button" onClick={addExercise}>Add Exercise</button>
                <button type="submit">Save Workout</button>
            </form>
        </div>
    );
};

export default WorkoutTracker;
