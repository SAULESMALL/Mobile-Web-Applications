document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Baked Salmon with Veggies
    const recipeDetails = {
        ingredients: [
            "2 salmon fillets",
            "1 tablespoon olive oil",
            "1 teaspoon lemon zest",
            "1 tablespoon fresh lemon juice",
            "1/2 teaspoon garlic powder",
            "1/2 teaspoon paprika",
            "Salt and pepper to taste",
            "1 cup broccoli florets",
            "1 cup baby carrots",
            "1 tablespoon olive oil (for veggies)",
            "1 teaspoon dried thyme",
            "1/2 teaspoon salt",
            "1/2 teaspoon pepper"
        ],
        steps: [
            "Step 1: Preheat oven to 400°F (200°C). Line a baking sheet with parchment paper.",
            "Step 2: Rub the salmon fillets with olive oil, lemon zest, lemon juice, garlic powder, paprika, salt, and pepper.",
            "Step 3: Arrange salmon fillets on the baking sheet and surround with broccoli florets and baby carrots.",
            "Step 4: Drizzle veggies with olive oil, then sprinkle with dried thyme, salt, and pepper.",
            "Step 5: Bake for 18-20 minutes, or until the salmon is cooked through and flakes easily with a fork."
        ],
        time: "Prep time: 10 minutes, Cook time: 20 minutes",
        tips: [
            "For crispier veggies, bake them separately on a separate sheet tray.",
            "Make sure the salmon is cooked through by checking for flakiness.",
            "Feel free to swap the veggies for others like asparagus or zucchini."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Baked Salmon with Veggies";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: 10 minutes, Cook time: 20 minutes`;

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
