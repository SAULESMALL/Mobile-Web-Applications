document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Crispy Baked Sweet Potato Fries
    const recipeDetails = {
        ingredients: [
            "2 large sweet potatoes, peeled and cut into fries",
            "2 tbsp olive oil",
            "1 tsp paprika",
            "1/2 tsp garlic powder",
            "1/2 tsp salt",
            "1/4 tsp black pepper",
            "1/4 tsp cayenne pepper (optional)",
            "Fresh parsley for garnish (optional)"
        ],
        steps: [
            "Step 1: Preheat the oven to 425°F (220°C).",
            "Step 2: Toss the sweet potato fries in olive oil, paprika, garlic powder, salt, pepper, and cayenne.",
            "Step 3: Spread the fries out in a single layer on a baking sheet.",
            "Step 4: Bake for 20 minutes, flip the fries, and bake for another 10 minutes or until crispy.",
            "Step 5: Garnish with fresh parsley and serve hot."
        ],
        time: "Prep time: 10 minutes, Cook time: 30 minutes",
        tips: [
            "Spread the fries out in a single layer for extra crispiness.",
            "Flip the fries halfway through baking to ensure even cooking.",
            "For extra flavor, sprinkle with parmesan cheese after baking."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Crispy Baked Sweet Potato Fries";

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
        window.location.href = '../pages/step-by-step.html';  // Adjust path if necessary
    });
});
