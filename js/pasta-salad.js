document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Pasta Salad
    const recipeDetails = {
        ingredients: [
            "1 cup cooked pasta (e.g., fusilli or penne)",
            "1/2 cup cherry tomatoes (halved)",
            "1/2 cup cucumber (diced)",
            "1/4 cup black olives (sliced)",
            "1/4 cup feta cheese (crumbled)",
            "2 tablespoons Italian dressing",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: In a large bowl, combine the cooked pasta, cherry tomatoes, cucumber, black olives, and feta cheese.",
            "Step 2: Drizzle with Italian dressing and toss gently to coat.",
            "Step 3: Season with salt and pepper to taste.",
            "Step 4: Chill the salad for 15 minutes before serving for better flavor.",
            "Step 5: Serve and enjoy!"
        ],
        time: "Prep time: 10 minutes, Cook time: 10 minutes",
        tips: [
            "Use whole wheat or gluten-free pasta if preferred.",
            "Chill the salad for 15 minutes before serving for better flavor.",
            "Add grilled chicken or chickpeas for extra protein."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Pasta Salad";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = recipeDetails.time;

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
