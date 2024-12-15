document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Tomato Basil Soup
    const recipeDetails = {
        ingredients: [
            "2 tablespoons olive oil",
            "1 medium onion, diced",
            "3 garlic cloves, minced",
            "1 (28-ounce) can of crushed tomatoes",
            "2 cups vegetable broth",
            "1/2 cup heavy cream (optional for creamier soup)",
            "1/4 cup fresh basil leaves, chopped",
            "Salt and black pepper to taste"
        ],
        time: "Prep time: 10 minutes, Cook time: 20 minutes",
        tips: [
            "For a smoother texture, blend the soup using an immersion blender.",
            "Use fresh tomatoes if in season for a richer flavor.",
            "Pair with gluten-free croutons or bread for a complete meal."
        ],
        steps: [
            "Step 1: Heat olive oil in a large pot over medium heat.",
            "Step 2: Add the diced onion and sauté until softened, about 5 minutes.",
            "Step 3: Stir in the minced garlic and cook for 1 minute until fragrant.",
            "Step 4: Add the crushed tomatoes and vegetable broth, stirring to combine.",
            "Step 5: Bring the mixture to a simmer and let it cook for 15 minutes.",
            "Step 6: Stir in the chopped basil and season with salt and black pepper to taste.",
            "Step 7: If desired, blend the soup until smooth using an immersion blender.",
            "Step 8: Add heavy cream for a creamier texture, and simmer for 2 more minutes.",
            "Step 9: Serve hot, garnished with fresh basil leaves if desired."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Tomato Basil Soup";

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
        window.location.href = '../pages/step-by-step.html'; // Correct path to 'step-by-step.html'
    });
});
