document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Simple Avocado Toast
    const recipeDetails = {
        ingredients: [
            "2 slices of whole grain bread (or gluten-free if preferred)",
            "1 ripe avocado",
            "1 tbsp lemon juice",
            "Salt and pepper to taste",
            "Red pepper flakes (optional)",
            "Olive oil drizzle (optional)"
        ],
        steps: [
            "Step 1: Toast the bread slices to your desired crispiness.",
            "Step 2: Mash the avocado with a fork and add lemon juice, salt, and pepper.",
            "Step 3: Spread the mashed avocado on the toasted bread.",
            "Step 4: Optionally drizzle olive oil and sprinkle red pepper flakes on top.",
            "Step 5: Serve immediately and enjoy."
        ],
        time: "5:00", // Prep time in minutes:seconds format
        tips: [
            "For a creamier texture, mash the avocado with a fork.",
            "Use fresh sourdough bread for extra flavor.",
            "Top with sliced tomatoes for added freshness."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Simple Avocado Toast";

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
        window.location.href = '../pages/step-by-step.html'; // Correct path to 'step-by-step.html'
    });
});
