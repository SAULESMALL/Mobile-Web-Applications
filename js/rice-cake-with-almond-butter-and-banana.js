document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Rice Cake with Almond Butter and Banana
    const recipeDetails = {
        ingredients: [
            "2 rice cakes",
            "2 tbsp almond butter",
            "1 banana, sliced",
            "1 tsp honey (optional)",
            "1/4 tsp cinnamon (optional)"
        ],
        time: "Prep time: 5 minutes",
        tips: [
            "Use unsweetened almond butter for a healthier option.",
            "Feel free to drizzle honey for a touch of sweetness.",
            "Try adding chia seeds or flaxseeds for an extra boost."
        ],
        steps: [
            "Step 1: Spread almond butter evenly on each rice cake.",
            "Step 2: Top with banana slices.",
            "Step 3: Drizzle honey and sprinkle cinnamon if desired.",
            "Step 4: Serve immediately and enjoy!"
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Rice Cake with Almond Butter and Banana";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = recipeDetails.time;

    // Tips
    const tipsList = document.getElementById('tipsList');
    recipeDetails.tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });

    // Store the recipe steps and time in localStorage
    localStorage.setItem('recipeSteps', JSON.stringify(recipeDetails.steps));
    localStorage.setItem('recipeTime', recipeDetails.time);

    // Handle the "Start Making" button
    document.getElementById('startCookingBtn').addEventListener('click', () => {
        // Navigate to step-by-step page in the 'pages' folder
        window.location.href = '../pages/step-by-step.html'; // Correct path to 'step-by-step.html'
    });
});
