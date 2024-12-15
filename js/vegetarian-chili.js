document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegetarian Chili
    const recipeDetails = {
        ingredients: [
            "1 tablespoon olive oil",
            "1 large onion, chopped",
            "2 cloves garlic, minced",
            "1 bell pepper, chopped",
            "1 can kidney beans, drained and rinsed",
            "1 can black beans, drained and rinsed",
            "1 can diced tomatoes",
            "1 can tomato sauce",
            "1 cup vegetable broth",
            "1 tablespoon chili powder",
            "1 teaspoon cumin",
            "1 teaspoon smoked paprika",
            "Salt and pepper to taste",
            "1/2 cup corn kernels (optional)",
            "Fresh cilantro for garnish (optional)",
            "Avocado slices and sour cream for serving (optional)"
        ],
        steps: [
            "Step 1: Heat olive oil in a large pot over medium heat. Add onion and bell pepper, cooking until softened.",
            "Step 2: Add garlic and cook for another minute until fragrant.",
            "Step 3: Add the kidney beans, black beans, diced tomatoes, tomato sauce, and vegetable broth. Stir to combine.",
            "Step 4: Add chili powder, cumin, smoked paprika, salt, and pepper. Bring to a simmer and cook for 20-30 minutes.",
            "Step 5: Add corn kernels (optional) and cook for an additional 5 minutes. Garnish with fresh cilantro and serve with avocado slices and sour cream."
        ],
        time: "10 minutes prep, 30 minutes cook", // Cooking time in minutes:seconds format
        tips: [
            "Let the chili simmer for at least 20 minutes for the best flavor.",
            "Top with shredded cheese, sour cream, and fresh cilantro for extra flavor.",
            "Feel free to add some jalapeños for extra heat."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegetarian Chili";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: 10 minutes, Cook time: 30 minutes`;

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
        window.location.href = '../pages/step-by-step.html'; // Adjust path to step-by-step.html
    });
});
