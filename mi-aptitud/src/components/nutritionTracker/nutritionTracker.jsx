import React, { useState, useEffect } from "react";
import axios from "axios";

const NutritionTracker = ({ userId }) => {
    const [meals, setMeals] = useState([{ name: "", calories: "" }]);
    const [history, setHistory] = useState([]);

    const addMeal = () => setMeals([...meals, { name: "", calories: "" }]);

    const handleMealChange = (i, field, value) => {
        const updatedMeals = [...meals];
        updatedMeals[i][field] = value;
        setMeals(updatedMeals);
    };

    const totalCalories = meals.reduce((acc, m) => acc + Number(m.calories || 0), 0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5001/api/nutrition", {
            userId,
            meals,
            totalCalories
        });
        setMeals([{ name: "", calories: "" }]);
        fetchNutrition();
    };

    const fetchNutrition = async () => {
        const res = await axios.get(`http://localhost:5001/api/nutrition/${userId}`);
        setHistory(res.data);
    };

    useEffect(() => {
        fetchNutrition();
    }, []);

    return (
        <div>
            <h3>Nutrition Tracker</h3>
            <form onSubmit={handleSubmit}>
                {meals.map((meal, i) => (
                    <div key={i}>
                        <input
                            type="text"
                            placeholder="Meal Name"
                            value={meal.name}
                            onChange={(e) => handleMealChange(i, "name", e.target.value)}
                            required
                        />
                        <input
                            type="number"
                            placeholder="Calories"
                            value={meal.calories}
                            onChange={(e) => handleMealChange(i, "calories", e.target.value)}
                            required
                        />
                    </div>
                ))}
                <button type="button" onClick={addMeal}>Add Meal</button>
                <p>Total Calories: {totalCalories}</p>
                <button type="submit">Log Nutrition</button>
            </form>

            <ul>
                {history.map((entry, idx) => (
                    <li key={idx}>
                        {entry.totalCalories} kcal - {new Date(entry.date).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NutritionTracker;
