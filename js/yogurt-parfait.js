document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Yogurt Parfait
    const recipeDetails = {
        ingredients: [
            "1 cup plain yogurt",
            "1/2 cup granola",
            "1/2 cup mixed berries (blueberries, strawberries, raspberries)",
            "1 tbsp honey or maple syrup",
            "1/4 tsp vanilla extract (optional)"
        ],
        steps: [
            "Step 1: In a bowl or glass, layer 1/4 cup of yogurt.",
            "Step 2: Add a layer of granola on top of the yogurt.",
            "Step 3: Add a layer of mixed berries over the granola.",
            "Step 4: Drizzle honey or maple syrup over the berries.",
            "Step 5: Add another layer of yogurt and repeat the layers if needed.",
            "Step 6: Finish with a drizzle of honey, some berries, and a sprinkle of granola on top."
        ],
        time: "5:00", // Prep time in minutes:seconds format
        tips: [
            "Use Greek yogurt for a thicker consistency and extra protein.",
            "Feel free to switch up the fruits depending on your preference or seasonality.",
            "For added crunch, sprinkle some nuts or seeds on top of the parfait."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Yogurt Parfait";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: ${recipeDetails.time}`;

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
