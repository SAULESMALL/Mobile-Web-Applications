document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Egg and Avocado Toast
    const recipeDetails = {
        ingredients: [
            "2 slices gluten-free bread",
            "1 ripe avocado",
            "2 eggs",
            "1 tablespoon olive oil",
            "Salt and pepper to taste",
            "Optional: red pepper flakes or lemon juice"
        ],
        steps: [
            "Step 1: Toast the bread slices until golden brown.",
            "Step 2: While the bread is toasting, heat olive oil in a pan over medium heat and fry the eggs to your liking.",
            "Step 3: Mash the avocado in a bowl with salt, pepper, and optional lemon juice.",
            "Step 4: Spread the mashed avocado on the toasted bread.",
            "Step 5: Place a fried egg on top of each toast and season with red pepper flakes, if desired."
        ],
        time: "5:00", // Cooking time in minutes:seconds format
        tips: [
            "For extra flavor, add a pinch of red pepper flakes on top.",
            "To make it more filling, add a handful of spinach or arugula.",
            "For a creamier texture, mash the avocado with a bit of lemon juice."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Egg and Avocado Toast";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: 5 minutes, Cook time: ${recipeDetails.time}`;

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
