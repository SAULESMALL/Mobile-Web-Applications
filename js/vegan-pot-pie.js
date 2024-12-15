document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegan Pot Pie
    const recipeDetails = {
        ingredients: [
            "1 package vegan puff pastry",
            "2 tablespoons olive oil",
            "1 small onion, diced",
            "2 cloves garlic, minced",
            "2 medium carrots, diced",
            "1 cup green peas",
            "1 cup vegetable broth",
            "1/2 cup coconut milk (or any plant-based milk)",
            "2 tablespoons flour (for thickening)",
            "Salt and pepper to taste",
            "1 tablespoon fresh thyme (optional)"
        ],
        steps: [
            "Step 1: Preheat your oven to 375°F (190°C).",
            "Step 2: Heat olive oil in a pan and sauté onions, garlic, and carrots until soft.",
            "Step 3: Add peas, vegetable broth, and coconut milk. Bring to a simmer.",
            "Step 4: Stir in flour to thicken the sauce and cook for 2-3 minutes.",
            "Step 5: Roll out the puff pastry and place it on top of the mixture in a pie dish.",
            "Step 6: Bake for 30-40 minutes, or until the pastry is golden brown."
        ],
        time: "Prep time: 15 minutes, Cook time: 40 minutes",
        tips: [
            "Make sure to roll the puff pastry thin enough to cover the pie.",
            "Feel free to add other vegetables like corn or potatoes for extra flavor.",
            "If you prefer a thicker filling, increase the amount of flour slightly."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegan Pot Pie";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: 15 minutes, Cook time: 40 minutes`;

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

    // Handle the "Start Cooking" button
    document.getElementById('startCookingBtn').addEventListener('click', () => {
        // Navigate to step-by-step page in the 'pages' folder
        window.location.href = '../pages/step-by-step.html'; // Correct path to 'step-by-step.html'
    });
});
