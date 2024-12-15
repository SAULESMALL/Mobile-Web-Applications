document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegan Lentil Stew
    const recipeDetails = {
        ingredients: [
            "1 cup dried lentils, rinsed",
            "1 medium onion, diced",
            "2 carrots, peeled and diced",
            "2 celery stalks, diced",
            "4 garlic cloves, minced",
            "1 can (14.5 oz) diced tomatoes",
            "6 cups vegetable broth",
            "1 teaspoon cumin",
            "1 teaspoon smoked paprika",
            "1/2 teaspoon turmeric",
            "Salt and pepper to taste",
            "2 tablespoons olive oil",
            "Fresh parsley for garnish"
        ],
        steps: [
            "Step 1: Heat olive oil in a large pot over medium heat. Add the onion, carrots, and celery. Sauté until softened.",
            "Step 2: Add the garlic and cook for another minute.",
            "Step 3: Add the lentils, diced tomatoes, vegetable broth, cumin, smoked paprika, turmeric, salt, and pepper.",
            "Step 4: Bring to a boil, then reduce to a simmer. Cook for 30-40 minutes, or until the lentils are tender.",
            "Step 5: Garnish with fresh parsley before serving."
        ],
        time: "Prep time: 15 minutes, Cook time: 45 minutes",
        tips: [
            "Add more vegetable broth if you prefer a thinner stew.",
            "For extra heat, add a pinch of cayenne pepper or red pepper flakes.",
            "Top with fresh cilantro for added flavor."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegan Lentil Stew";

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
        window.location.href = '../pages/step-by-step.html';  // Correct path to step-by-step.html
    });
});
