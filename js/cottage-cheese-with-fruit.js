document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Cottage Cheese with Fruit
    const recipeDetails = {
        ingredients: [
            "1 cup cottage cheese",
            "1/2 cup strawberries, sliced",
            "1/2 cup blueberries",
            "1/2 cup pineapple chunks",
            "1 tbsp honey (optional)",
            "1/2 tsp cinnamon (optional)"
        ],
        steps: [
            "Step 1: Add cottage cheese to a bowl.",
            "Step 2: Top with sliced strawberries, blueberries, and pineapple chunks.",
            "Step 3: Drizzle with honey and sprinkle cinnamon if desired.",
            "Step 4: Mix gently and serve immediately."
        ],
        time: "5:00", // Cooking time in minutes:seconds format
        tips: [
            "Use fresh fruit for the best flavor, or substitute with frozen fruit if necessary.",
            "Add chia seeds or nuts for extra crunch and nutrition.",
            "Sweeten with agave or maple syrup if you prefer a different sweetener."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Cottage Cheese with Fruit";

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
