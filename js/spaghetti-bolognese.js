document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Spaghetti Bolognese
    const recipeDetails = {
        ingredients: [
            "250g gluten-free spaghetti",
            "1 tablespoon olive oil",
            "500g ground beef",
            "1 onion, chopped",
            "2 garlic cloves, minced",
            "1 can (400g) crushed tomatoes",
            "1 tablespoon tomato paste",
            "1 teaspoon dried oregano",
            "1 teaspoon dried basil",
            "Salt and pepper to taste",
            "Fresh basil for garnish (optional)",
            "Grated parmesan cheese (optional)"
        ],
        steps: [
            "Step 1: Heat olive oil in a pan and sauté chopped onion and garlic until softened.",
            "Step 2: Add the ground beef and cook until browned.",
            "Step 3: Add the crushed tomatoes, tomato paste, oregano, and basil. Simmer for 15 minutes.",
            "Step 4: Cook the gluten-free spaghetti according to package instructions.",
            "Step 5: Serve the sauce over the cooked spaghetti, garnish with fresh basil and grated parmesan."
        ],
        time: "Prep time: 10 minutes, Cook time: 25 minutes",
        tips: [
            "Simmer the sauce for longer for a richer flavor.",
            "Use a gluten-free pasta of your choice if you prefer a different type.",
            "Add a splash of red wine to the sauce for extra depth of flavor (optional)."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Spaghetti Bolognese";

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
        // Navigate to step-by-step page
        window.location.href = '../pages/step-by-step.html';  // Correct path to 'step-by-step.html'
    });
});
