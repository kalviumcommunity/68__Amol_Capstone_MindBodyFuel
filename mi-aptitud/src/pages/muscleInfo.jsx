import React from 'react';

const MuscleInfo = () => {
    const muscleData = [
        { muscle: "Chest", workouts: ["Bench Press", "Push-ups", "Incline Press"] },
        { muscle: "Back", workouts: ["Pull-ups", "Deadlifts", "Rows"] },
        { muscle: "Legs", workouts: ["Squats", "Lunges", "Leg Press"] },
        { muscle: "Arms", workouts: ["Curls", "Tricep Dips", "Hammer Curls"] },
        { muscle: "Shoulders", workouts: ["Overhead Press", "Lateral Raises"] },
    ];

    return (
        <div>
            <h2>Muscle Building Guide</h2>
            {muscleData.map((item, idx) => (
                <div key={idx}>
                    <h3>{item.muscle}</h3>
                    <ul>
                        {item.workouts.map((w, i) => <li key={i}>{w}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default MuscleInfo;
