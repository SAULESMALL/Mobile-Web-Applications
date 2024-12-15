document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Lazy Wrap
    const recipeDetails = {
        ingredients: [
            "1 large tortilla wrap (gluten-free if needed)",
            "1/2 cup hummus",
            "1 cup mixed greens (spinach, arugula, etc.)",
            "1/4 cup shredded carrots",
            "1/4 cup cucumber, thinly sliced",
            "1/4 cup bell pepper, thinly sliced",
            "1/4 cup avocado, mashed",
            "1 tbsp olive oil (for drizzling)",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Spread hummus evenly over the tortilla wrap.",
            "Step 2: Layer mixed greens, carrots, cucumber, bell pepper, and mashed avocado.",
            "Step 3: Drizzle olive oil over the filling, and season with salt and pepper to taste.",
            "Step 4: Fold the sides of the wrap inward and roll tightly.",
            "Step 5: Slice in half and serve immediately."
        ],
        time: "Prep time: 10 minutes, Cook time: 0 minutes",
        tips: [
            "Use your favorite hummus flavor for extra taste.",
            "Add some chili flakes for a spicy kick.",
            "Try adding roasted vegetables for a heartier wrap."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Lazy Wrap";

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
