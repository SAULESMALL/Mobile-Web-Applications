document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Shrimp Stir Fry
    const recipeDetails = {
        ingredients: [
            "1 lb shrimp, peeled and deveined",
            "2 cups bell peppers, sliced",
            "1 medium onion, sliced",
            "2 cloves garlic, minced",
            "1 tbsp soy sauce",
            "1 tbsp oyster sauce",
            "1 tbsp sesame oil",
            "2 tbsp olive oil",
            "1 tsp ginger, grated",
            "Salt and pepper to taste",
            "2 cups cooked rice (optional)"
        ],
        steps: [
            "Step 1: Heat sesame oil and olive oil in a wok or large pan over medium-high heat.",
            "Step 2: Add garlic and ginger, sauté until fragrant.",
            "Step 3: Add the shrimp and cook until pink and opaque.",
            "Step 4: Add the bell peppers and onion, stir-fry for 3-4 minutes.",
            "Step 5: Stir in soy sauce, oyster sauce, and season with salt and pepper.",
            "Step 6: Serve hot, optionally over cooked rice."
        ],
        time: "15:00", // Cooking time in minutes:seconds format
        tips: [
            "Use a wok or large pan to cook the stir fry for better heat distribution.",
            "For extra flavor, add a squeeze of lime juice before serving.",
            "Serve with rice or noodles for a complete meal."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Shrimp Stir Fry";

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
        window.location.href = '../pages/step-by-step.html'; // Correct path to 'step-by-step.html'
    });
});
