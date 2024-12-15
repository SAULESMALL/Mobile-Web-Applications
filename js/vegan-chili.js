document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegan Chili
    const recipeDetails = {
        ingredients: [
            "2 tablespoons olive oil",
            "1 medium onion, diced",
            "2 cloves garlic, minced",
            "1 red bell pepper, diced",
            "1 yellow bell pepper, diced",
            "1 zucchini, diced",
            "1 can (15 oz) black beans, drained and rinsed",
            "1 can (15 oz) kidney beans, drained and rinsed",
            "1 can (15 oz) diced tomatoes",
            "2 cups vegetable broth",
            "2 tablespoons chili powder",
            "1 teaspoon cumin",
            "1 teaspoon smoked paprika",
            "1/2 teaspoon cayenne pepper (optional)",
            "Salt and pepper to taste",
            "Fresh cilantro for garnish",
            "1 tablespoon lime juice"
        ],
        steps: [
            "Step 1: Heat olive oil in a large pot over medium heat. Add onion, garlic, and bell peppers, and sauté for 5 minutes.",
            "Step 2: Add zucchini and cook for another 3 minutes.",
            "Step 3: Stir in black beans, kidney beans, diced tomatoes, vegetable broth, chili powder, cumin, smoked paprika, cayenne, salt, and pepper.",
            "Step 4: Bring to a boil, then reduce heat and simmer for 30 minutes, stirring occasionally.",
            "Step 5: Stir in lime juice and garnish with fresh cilantro before serving."
        ],
        time: "Prep time: 15 minutes, Cook time: 45 minutes",
        tips: [
            "For extra flavor, top with avocado or vegan sour cream.",
            "Serve with tortilla chips or cornbread for a heartier meal.",
            "Let the chili sit for a few hours to enhance the flavors."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegan Chili";

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
