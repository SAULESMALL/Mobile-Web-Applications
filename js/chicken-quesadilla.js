document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Chicken Quesadilla
    const recipeDetails = {
        ingredients: [
            "2 large flour tortillas",
            "1 lb cooked chicken breast, shredded",
            "1 cup shredded cheddar cheese",
            "1/2 cup diced bell peppers",
            "1/4 cup diced onions",
            "1 tablespoon olive oil",
            "1/4 cup sour cream (optional)",
            "1/4 cup salsa (optional)",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Heat olive oil in a non-stick skillet over medium heat.",
            "Step 2: Place one tortilla in the skillet, and top with shredded chicken, cheese, bell peppers, and onions.",
            "Step 3: Place the second tortilla on top and cook until golden brown on both sides, flipping carefully.",
            "Step 4: Remove from skillet, slice into wedges, and serve with sour cream and salsa if desired."
        ],
        time: "10:00", // Cooking time in minutes:seconds format
        tips: [
            "Use a non-stick skillet to prevent the tortilla from sticking.",
            "Don’t overstuff the quesadilla; it makes flipping easier.",
            "Serve with guacamole or extra salsa for added flavor."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Chicken Quesadilla";

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
        window.location.href = '../pages/step-by-step.html';  // Correct path to 'step-by-step.html'
    });
});
