document.addEventListener('DOMContentLoaded', () => {
    const recipeDetails = {
        ingredients: [
            "1 cup rolled oats",
            "2 cups water or milk (dairy or non-dairy)",
            "1/4 cup raisins or other dried fruits",
            "1 tbsp maple syrup or honey",
            "1/4 tsp cinnamon (optional)",
            "Pinch of salt"
        ],
        steps: [
            "Step 1: Combine oats, water (or milk), and salt in a pot.",
            "Step 2: Bring to a boil, then reduce heat and simmer for 5 minutes.",
            "Step 3: Stir occasionally until oats are soft and creamy.",
            "Step 4: Remove from heat and mix in maple syrup or honey.",
            "Step 5: Top with raisins, cinnamon, or your preferred toppings. Serve warm."
        ],
        time: "Prep time: 5 minutes, Cook time: 5 minutes",
        tips: [
            "For extra creaminess, use coconut milk or almond milk.",
            "Top with fresh fruit, nuts, or seeds for added texture and flavor.",
            "If you prefer a sweeter oatmeal, increase the syrup or honey."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Instant Oatmeal";

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
        window.location.href = '../pages/step-by-step.html'; // Adjust the path as necessary
    });
});
