document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Shrimp Scampi
    const recipeDetails = {
        ingredients: [
            "1 pound shrimp, peeled and deveined",
            "3 tablespoons butter",
            "3 cloves garlic, minced",
            "1/2 cup dry white wine",
            "1/2 cup chicken broth (or vegetable broth for a lighter option)",
            "1 tablespoon lemon juice",
            "1 teaspoon red pepper flakes (optional)",
            "1/4 cup freshly chopped parsley",
            "Gluten-free pasta (such as rice or quinoa pasta)",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Heat the butter in a large pan over medium heat. Add garlic and sauté until fragrant.",
            "Step 2: Add the shrimp and cook until they turn pink and opaque.",
            "Step 3: Add white wine and chicken broth to the pan. Simmer for 2-3 minutes.",
            "Step 4: Stir in the lemon juice, red pepper flakes, and parsley.",
            "Step 5: Toss the cooked shrimp with gluten-free pasta and serve."
        ],
        time: "15:00", // Cooking time in minutes:seconds format
        tips: [
            "Make sure to cook the shrimp until they are pink and opaque, but avoid overcooking them.",
            "If you prefer a creamier sauce, add a splash of heavy cream or a dollop of cream cheese.",
            "Serve with a side salad or gluten-free bread for a complete meal."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Shrimp Scampi";

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
        // Navigate to step-by-step page in the 'pages' folder
        window.location.href = '../pages/step-by-step.html';  // Correct path to 'step-by-step.html'
    });
});
