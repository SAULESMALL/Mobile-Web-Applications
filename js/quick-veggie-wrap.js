document.addEventListener('DOMContentLoaded', () => {
    const recipeDetails = {
        ingredients: [
            "1 whole wheat tortilla",
            "1/2 cup hummus",
            "1/2 cup mixed greens (spinach, lettuce, etc.)",
            "1/4 cup shredded carrots",
            "1/4 cup cucumber, thinly sliced",
            "1/4 avocado, sliced",
            "1 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Lay the whole wheat tortilla flat on a clean surface.",
            "Step 2: Spread hummus evenly over the entire surface of the tortilla.",
            "Step 3: Layer the mixed greens, shredded carrots, cucumber, and avocado on top.",
            "Step 4: Drizzle with olive oil and season with salt and pepper.",
            "Step 5: Roll the tortilla tightly, folding in the edges as you go.",
            "Step 6: Slice the wrap in half and serve."
        ],
        time: "5:00", // Cooking time in minutes:seconds format
        tips: [
            "Use a gluten-free tortilla if preferred.",
            "For extra flavor, sprinkle some lemon juice or balsamic vinegar.",
            "You can also add your favorite cheese or protein source like chickpeas."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Quick Veggie Wrap";

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
