document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Baked Ziti with Mozzarella
    const recipeDetails = {
        ingredients: [
            "1 lb ziti pasta",
            "2 cups marinara sauce",
            "1 cup ricotta cheese",
            "2 cups shredded mozzarella cheese",
            "1/2 cup grated parmesan cheese",
            "1 tsp dried basil",
            "1 tsp dried oregano",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Cook the ziti pasta according to package instructions until slightly underdone.",
            "Step 2: In a large bowl, mix the marinara sauce, ricotta cheese, mozzarella cheese, parmesan cheese, dried basil, dried oregano, olive oil, and seasoning.",
            "Step 3: Layer the cooked ziti pasta and cheese mixture in a baking dish.",
            "Step 4: Bake at 375°F for 20-25 minutes or until the cheese is bubbly and golden brown.",
            "Step 5: Let the baked ziti cool for 5 minutes before serving."
        ],
        time: "Prep time: 15 minutes, Cook time: 30 minutes",
        tips: [
            "Cook the ziti until slightly underdone to avoid overcooking in the oven.",
            "Layer the cheese evenly for a gooey, cheesy bake.",
            "Let the ziti cool for 5 minutes before serving for easier portions."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Baked Ziti with Mozzarella";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: 15 minutes, Cook time: 30 minutes`;

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
        window.location.href = '../pages/step-by-step.html';  // Correct path to 'step-by-step.html'
    });
});
