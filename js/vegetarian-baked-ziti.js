document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegetarian Baked Ziti
    const recipeDetails = {
        ingredients: [
            "1 pound ziti pasta",
            "2 cups marinara sauce",
            "1 cup ricotta cheese",
            "1 cup shredded mozzarella cheese",
            "1/2 cup grated Parmesan cheese",
            "1 tablespoon olive oil",
            "1/2 teaspoon garlic powder",
            "1/2 teaspoon dried basil",
            "Salt and pepper to taste",
            "Fresh basil for garnish (optional)"
        ],
        steps: [
            "Step 1: Cook ziti pasta according to package instructions and drain.",
            "Step 2: In a large bowl, mix marinara sauce, ricotta cheese, mozzarella cheese, Parmesan cheese, olive oil, garlic powder, and dried basil.",
            "Step 3: Combine the cooked pasta with the sauce mixture and stir until well combined.",
            "Step 4: Transfer the mixture to a baking dish and bake at 375°F (190°C) for 20-25 minutes.",
            "Step 5: For a crispy top, broil for the last 3 minutes of baking.",
            "Step 6: Garnish with fresh basil before serving."
        ],
        time: "Prep time: 15 minutes, Cook time: 30 minutes",
        tips: [
            "For a crispy top, broil the ziti for the last 3 minutes of cooking.",
            "Add some spinach or mushrooms for extra flavor and nutrition.",
            "If you like a bit of spice, add red pepper flakes to the sauce."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegetarian Baked Ziti";

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
