document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Pasta with Pesto
    const recipeDetails = {
        ingredients: [
            "8 oz pasta (any variety)",
            "1 cup fresh basil leaves",
            "1/4 cup pine nuts (or walnuts)",
            "1/2 cup grated parmesan cheese",
            "2 cloves garlic, minced",
            "1/4 cup olive oil",
            "Salt and pepper to taste",
            "1 tbsp lemon juice (optional)"
        ],
        steps: [
            "Step 1: Cook the pasta according to package instructions.",
            "Step 2: In a blender or food processor, combine the basil, pine nuts, parmesan, garlic, and olive oil.",
            "Step 3: Blend until smooth, adding more olive oil if necessary to achieve desired consistency.",
            "Step 4: Drain the pasta and toss it with the pesto sauce.",
            "Step 5: Season with salt, pepper, and lemon juice to taste."
        ],
        time: "15:00", // Cooking time in minutes:seconds format
        tips: [
            "For a creamier pesto, add a bit of heavy cream or cream cheese.",
            "If you don't have pine nuts, you can use almonds or sunflower seeds.",
            "For extra flavor, toast the pine nuts in a dry pan before using."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Pasta with Pesto";

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
