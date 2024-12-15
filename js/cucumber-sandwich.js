document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Cucumber Sandwich
    const recipeDetails = {
        ingredients: [
            "2 slices of bread (white, whole wheat, or your choice)",
            "1/2 cucumber, thinly sliced",
            "2 tablespoons cream cheese or vegan cream cheese",
            "Salt and pepper to taste",
            "Optional: fresh dill or parsley for garnish"
        ],
        steps: [
            "Step 1: Spread cream cheese on one slice of bread.",
            "Step 2: Arrange thin cucumber slices on top of the cream cheese.",
            "Step 3: Sprinkle with salt and pepper, and add fresh dill or parsley if desired.",
            "Step 4: Place the second slice of bread on top and press gently.",
            "Step 5: Cut into halves or quarters and serve."
        ],
        time: "5:00", // Cooking time in minutes:seconds format
        tips: [
            "Use fresh, firm cucumbers for the best texture.",
            "For a more flavorful sandwich, add a thin spread of mustard or a squeeze of lemon juice.",
            "Serve with a side of fresh fruit or a light salad for a complete meal."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Cucumber Sandwich";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: 5 minutes, Cook time: ${recipeDetails.time}`;

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
