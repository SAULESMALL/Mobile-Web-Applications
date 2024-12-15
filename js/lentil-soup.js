document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Lentil Soup
    const recipeDetails = {
        ingredients: [
            "1 cup dry lentils",
            "1 tablespoon olive oil",
            "1 onion, diced",
            "2 carrots, diced",
            "2 celery stalks, diced",
            "3 cloves garlic, minced",
            "1 teaspoon ground cumin",
            "1/2 teaspoon smoked paprika",
            "4 cups vegetable broth",
            "1 can diced tomatoes (14 ounces)",
            "Salt and pepper to taste",
            "Fresh parsley for garnish (optional)"
        ],
        steps: [
            "Step 1: Heat olive oil in a large pot over medium heat and sauté onion, carrots, and celery until softened.",
            "Step 2: Add garlic, cumin, and paprika, cooking for 1-2 minutes until fragrant.",
            "Step 3: Add lentils, vegetable broth, and diced tomatoes. Stir to combine.",
            "Step 4: Bring to a boil, then reduce to a simmer. Cook for 25 minutes, or until lentils are tender.",
            "Step 5: Season with salt and pepper, and garnish with fresh parsley before serving."
        ],
        time: "25:00", // Cooking time in minutes:seconds format
        tips: [
            "Rinse lentils thoroughly before cooking.",
            "Add more vegetable broth if you prefer a thinner soup.",
            "For extra flavor, add a squeeze of lemon juice before serving."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Lentil Soup";

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
