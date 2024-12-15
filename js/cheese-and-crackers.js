document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Cheese and Crackers
    const recipeDetails = {
        ingredients: [
            "1 box of your favorite crackers",
            "100g of cheese (e.g., cheddar, brie, gouda, or a mix)",
            "1 tablespoon honey (optional)",
            "A handful of fresh grapes or dried fruits (optional)",
            "A few sprigs of fresh herbs (optional, for garnish)"
        ],
        steps: [
            "Step 1: Arrange the crackers on a plate or serving tray.",
            "Step 2: Slice the cheese into small pieces or wedges and place on top of the crackers.",
            "Step 3: Drizzle honey over the cheese if desired.",
            "Step 4: Garnish with fresh herbs and serve with grapes or dried fruits."
        ],
        time: "5 minutes", // Prep time in minutes
        tips: [
            "Choose a variety of cheeses for a more interesting flavor profile.",
            "Add a drizzle of honey on top of the cheese for a sweet contrast.",
            "Pair with fresh fruits like grapes or apple slices for extra freshness."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Cheese and Crackers";

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

    // Handle the "Start Cooking" button
    document.getElementById('startCookingBtn').addEventListener('click', () => {
        // Navigate to step-by-step page in the 'pages' folder
        window.location.href = '../pages/step-by-step.html';  // Correct path to 'step-by-step.html'
    });
});
