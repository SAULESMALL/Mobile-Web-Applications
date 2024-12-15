document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Chicken and Rice Soup
    const recipeDetails = {
        ingredients: [
            "2 tablespoons olive oil",
            "1 small onion, chopped",
            "2 cloves garlic, minced",
            "2 medium carrots, diced",
            "2 celery stalks, diced",
            "4 cups chicken broth (gluten-free)",
            "1 cup cooked chicken, shredded",
            "1/2 cup cooked rice (preferably short-grain)",
            "Salt and pepper to taste",
            "Fresh parsley for garnish (optional)"
        ],
        steps: [
            "Step 1: Heat olive oil in a large pot over medium heat.",
            "Step 2: Add the onion, garlic, carrots, and celery. Cook until softened.",
            "Step 3: Add chicken broth and bring to a simmer.",
            "Step 4: Add cooked chicken and rice. Simmer for 20 minutes.",
            "Step 5: Season with salt and pepper to taste. Garnish with fresh parsley before serving."
        ],
        time: "30:00", // Cooking time in minutes:seconds format
        tips: [
            "Use pre-cooked chicken for a quicker preparation.",
            "If the soup becomes too thick, add more chicken broth to adjust the consistency.",
            "For added depth of flavor, include a bay leaf while simmering and remove before serving."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Chicken and Rice Soup";

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
