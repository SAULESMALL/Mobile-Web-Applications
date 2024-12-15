document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegetarian Avocado Toast
    const recipeDetails = {
        ingredients: [
            "2 slices of whole-grain bread",
            "1 ripe avocado",
            "1 tablespoon lemon juice",
            "Salt and pepper to taste",
            "1/4 teaspoon red pepper flakes",
            "1 tablespoon olive oil",
            "1 small tomato, sliced",
            "Fresh basil leaves (optional)"
        ],
        steps: [
            "Step 1: Toast the whole-grain bread slices until golden brown.",
            "Step 2: Mash the ripe avocado in a bowl with lemon juice, salt, and pepper.",
            "Step 3: Spread the mashed avocado mixture evenly over the toasted bread.",
            "Step 4: Drizzle olive oil on top and add sliced tomatoes.",
            "Step 5: Sprinkle with red pepper flakes and garnish with basil leaves if desired."
        ],
        time: "5-10 minutes",
        tips: [
            "For extra protein, add a poached egg on top.",
            "Use a ripe avocado for the best texture and flavor.",
            "Feel free to experiment with other toppings like radishes or cucumber."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegetarian Avocado Toast";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: ${recipeDetails.time}`;

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
        window.location.href = '../pages/step-by-step.html';  // Correct path to step-by-step.html
    });
});
