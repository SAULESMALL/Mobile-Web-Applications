document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Cottage Cheese with Berries
    const recipeDetails = {
        ingredients: [
            "1 cup gluten-free cottage cheese",
            "1/2 cup mixed berries (strawberries, blueberries, raspberries)",
            "1 tablespoon honey or maple syrup (optional)",
            "1 tablespoon chia seeds (optional)",
            "1 teaspoon vanilla extract (optional)"
        ],
        steps: [
            "Step 1: Scoop 1 cup of cottage cheese into a bowl.",
            "Step 2: Add mixed berries on top of the cottage cheese.",
            "Step 3: Drizzle honey or maple syrup (optional).",
            "Step 4: Sprinkle chia seeds and vanilla extract (optional).",
            "Step 5: Stir gently to combine, and enjoy."
        ],
        time: "5:00", // Cooking time in minutes:seconds format
        tips: [
            "For extra sweetness, drizzle some honey or maple syrup.",
            "Add chia seeds for extra fiber and omega-3s.",
            "Top with a sprinkle of cinnamon for added flavor."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Cottage Cheese with Berries";

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
