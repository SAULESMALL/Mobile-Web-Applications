document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Gluten-Free Pasta with Pesto
    const recipeDetails = {
        ingredients: [
            "8 oz gluten-free pasta",
            "1/2 cup fresh basil leaves",
            "1/4 cup pine nuts",
            "1/4 cup grated parmesan cheese",
            "2 cloves garlic",
            "1/4 cup olive oil",
            "Salt and pepper to taste",
            "1/4 cup cherry tomatoes (for garnish, optional)"
        ],
        steps: [
            "Step 1: Cook the gluten-free pasta according to package instructions.",
            "Step 2: In a food processor, blend the basil, pine nuts, parmesan, garlic, and olive oil until smooth.",
            "Step 3: Season with salt and pepper to taste.",
            "Step 4: Drain the pasta and toss with the pesto sauce.",
            "Step 5: Garnish with cherry tomatoes and additional parmesan, if desired."
        ],
        time: "15:00", // Cooking time in minutes:seconds format
        tips: [
            "For a creamier pesto, add a bit of heavy cream or coconut milk.",
            "Toast the pine nuts for a richer flavor.",
            "Serve with extra parmesan on top for added richness."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Gluten-Free Pasta with Pesto";

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
