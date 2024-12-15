document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Avocado Toast with Egg
    const recipeDetails = {
        ingredients: [
            "2 slices of whole-grain bread",
            "1 ripe avocado",
            "2 eggs",
            "1 tbsp olive oil",
            "Salt and pepper to taste",
            "Red pepper flakes (optional)",
            "Fresh lemon juice (optional)"
        ],
        steps: [
            "Step 1: Toast the slices of bread to your preferred crispiness.",
            "Step 2: Mash the avocado with a fork, adding salt, pepper, and lemon juice (if desired).",
            "Step 3: Heat olive oil in a pan and cook the eggs to your preferred style (fried or poached).",
            "Step 4: Spread the mashed avocado on the toasted bread.",
            "Step 5: Top with the cooked eggs, and sprinkle with red pepper flakes (if desired)."
        ],
        time: "10:00", // Cooking time in minutes:seconds format
        tips: [
            "Toast the bread to your preferred crispiness.",
            "For a creamy texture, mash the avocado with a fork, adding salt, pepper, and lemon juice.",
            "Top with a fried or poached egg for extra richness."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Avocado Toast with Egg";

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
