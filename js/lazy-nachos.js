document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Lazy Nachos
    const recipeDetails = {
        ingredients: [
            "1 bag tortilla chips",
            "1 cup vegan cheese, shredded",
            "1/2 cup salsa",
            "1/4 cup sliced jalapeños",
            "1/4 cup black beans, rinsed and drained",
            "1/4 cup guacamole",
            "1/4 cup vegan sour cream",
            "Salt to taste"
        ],
        steps: [
            "Step 1: Preheat your oven to 375°F (190°C).",
            "Step 2: Spread the tortilla chips evenly on a baking sheet.",
            "Step 3: Sprinkle the shredded vegan cheese over the chips.",
            "Step 4: Add black beans, jalapeños, and salsa on top.",
            "Step 5: Bake for 8-10 minutes or until the cheese is melted.",
            "Step 6: Remove from oven, top with guacamole, sour cream, and serve."
        ],
        time: "Prep time: 5 minutes, Cook time: 10 minutes",
        tips: [
            "For extra flavor, add some diced onions or cilantro on top.",
            "Use your favorite vegan cheese or make your own for a creamier texture.",
            "Serve with extra salsa and guacamole on the side."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Lazy Nachos";

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

    // Handle the "Start Cooking" button
    document.getElementById('startCookingBtn').addEventListener('click', () => {
        // Navigate to step-by-step page in the 'pages' folder
        window.location.href = '../pages/step-by-step.html'; // Adjust path to step-by-step.html
    });
});
