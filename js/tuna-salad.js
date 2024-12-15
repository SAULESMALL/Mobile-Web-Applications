document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Tuna Salad
    const recipeDetails = {
        ingredients: [
            "1 can of tuna in water (drained)",
            "1/4 cup mayonnaise",
            "1 tablespoon Dijon mustard",
            "1 tablespoon lemon juice",
            "2 tablespoons diced red onion",
            "1/4 cup chopped celery",
            "Salt and pepper to taste",
            "Optional: lettuce leaves for serving"
        ],
        steps: [
            "Step 1: Drain the tuna and place it in a large bowl.",
            "Step 2: Add mayonnaise, Dijon mustard, and lemon juice to the bowl.",
            "Step 3: Stir in the diced red onion, chopped celery, salt, and pepper.",
            "Step 4: Mix everything until well combined.",
            "Step 5: Serve on a bed of lettuce or with crackers for a quick meal."
        ],
        time: "10:00", // Prep time in minutes:seconds format
        tips: [
            "For added flavor, try adding a boiled egg or chopped pickles to the salad.",
            "Serve the salad on crackers or as a sandwich if desired.",
            "If you prefer a creamier texture, add more mayonnaise or use Greek yogurt instead."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Tuna Salad";

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
