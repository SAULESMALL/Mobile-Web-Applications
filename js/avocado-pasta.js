document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Avocado Pasta
    const recipeDetails = {
        ingredients: [
            "1 pound pasta (gluten-free if desired)",
            "2 ripe avocados",
            "1/4 cup olive oil",
            "1 tablespoon lemon juice",
            "2 cloves garlic, minced",
            "1/4 cup fresh basil, chopped",
            "1/4 cup nutritional yeast",
            "Salt and pepper, to taste",
            "1/4 cup cherry tomatoes, halved (optional)",
            "1/4 cup pine nuts (optional)"
        ],
        steps: [
            "Step 1: Cook the pasta according to package instructions. Drain and set aside.",
            "Step 2: In a blender, combine the avocados, olive oil, lemon juice, garlic, and fresh basil. Blend until smooth.",
            "Step 3: Toss the cooked pasta with the avocado sauce, adding salt and pepper to taste.",
            "Step 4: Garnish with cherry tomatoes, pine nuts, and extra basil.",
            "Step 5: Serve immediately and enjoy!"
        ],
        time: "15:00", // Cooking time in minutes:seconds format
        tips: [
            "Use whole wheat or gluten-free pasta for a healthier option.",
            "For extra creaminess, add a tablespoon of vegan cream cheese or coconut cream.",
            "Top with roasted vegetables for added flavor and texture."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Avocado Pasta";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: 10 minutes, Cook time: ${recipeDetails.time}`;

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
        // Navigate to step-by-step page
        window.location.href = 'pages/step-by-step.html';  // Correct path to step-by-step.html
    });
});
