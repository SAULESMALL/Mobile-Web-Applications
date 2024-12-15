document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Gluten-Free Pizza
    const recipeDetails = {
        ingredients: [
            "1 gluten-free pizza base",
            "1/2 cup pizza sauce",
            "1 cup shredded mozzarella cheese",
            "1/4 cup sliced bell peppers",
            "1/4 cup sliced mushrooms",
            "1/4 cup sliced black olives",
            "1/2 tsp oregano",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Preheat your oven to 400°F (200°C).",
            "Step 2: Spread the pizza sauce evenly on the pizza base.",
            "Step 3: Sprinkle the shredded mozzarella cheese over the sauce.",
            "Step 4: Add sliced bell peppers, mushrooms, and black olives.",
            "Step 5: Sprinkle oregano, salt, and pepper on top.",
            "Step 6: Bake for 12-15 minutes until the crust is golden brown."
        ],
        time: "15:00", // Cooking time in minutes:seconds format
        tips: [
            "Preheat the oven to 400°F (200°C) for perfect baking.",
            "Customize the toppings to your liking (pepperoni, spinach, etc.).",
            "Use parchment paper to prevent sticking during baking."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Gluten-Free Pizza";

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
