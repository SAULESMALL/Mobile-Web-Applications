document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegan Stuffed Peppers
    const recipeDetails = {
        ingredients: [
            "4 large bell peppers (any color)",
            "1 cup cooked quinoa",
            "1 can black beans (drained and rinsed)",
            "1 cup diced tomatoes",
            "1/2 cup corn kernels",
            "1 teaspoon chili powder",
            "1 teaspoon cumin",
            "1 tablespoon olive oil",
            "Salt and pepper to taste",
            "Fresh cilantro for garnish (optional)"
        ],
        steps: [
            "Step 1: Preheat the oven to 375°F (190°C).",
            "Step 2: Cut the tops off the bell peppers and remove the seeds.",
            "Step 3: In a bowl, combine the cooked quinoa, black beans, diced tomatoes, corn, chili powder, cumin, olive oil, salt, and pepper.",
            "Step 4: Stuff each bell pepper with the quinoa mixture.",
            "Step 5: Place the stuffed peppers in a baking dish and cover with foil. Bake for 30 minutes.",
            "Step 6: Remove the foil and bake for an additional 5-10 minutes to brown the tops.",
            "Step 7: Garnish with fresh cilantro and serve."
        ],
        time: "Prep time: 15 minutes, Cook time: 35 minutes",
        tips: [
            "Top with avocado or vegan cheese for extra creaminess.",
            "If you prefer a spicy kick, add jalapeños to the filling.",
            "Feel free to use brown rice or couscous instead of quinoa."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegan Stuffed Peppers";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: 15 minutes, Cook time: ${recipeDetails.time}`;

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
        window.location.href = '../pages/step-by-step.html';  // Correct path to 'step-by-step.html'
    });
});
