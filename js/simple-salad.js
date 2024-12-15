document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Simple Salad
    const recipeDetails = {
        ingredients: [
            "4 cups mixed greens (lettuce, spinach, arugula)",
            "1 cucumber, sliced",
            "1 cup cherry tomatoes, halved",
            "1/2 red onion, thinly sliced",
            "1/4 cup olive oil",
            "2 tbsp balsamic vinegar",
            "Salt and pepper to taste",
            "1/4 cup roasted sunflower seeds (optional)"
        ],
        steps: [
            "Step 1: In a large bowl, combine the mixed greens, cucumber, tomatoes, and red onion.",
            "Step 2: In a small bowl, whisk together the olive oil, balsamic vinegar, salt, and pepper.",
            "Step 3: Drizzle the dressing over the salad and toss to coat.",
            "Step 4: Sprinkle with roasted sunflower seeds if desired and serve."
        ],
        time: "10:00", // Prep time in minutes:seconds format
        tips: [
            "For more protein, add chickpeas or tofu cubes.",
            "Use fresh lemon juice instead of balsamic vinegar for a different flavor.",
            "Make the dressing ahead of time for a quicker meal."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Simple Salad";

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
        // Navigate to step-by-step page
        window.location.href = '../pages/step-by-step.html'; // Correct path to 'step-by-step.html'
    });
});
