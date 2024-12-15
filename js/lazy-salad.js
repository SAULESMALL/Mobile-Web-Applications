document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Lazy Salad
    const recipeDetails = {
        ingredients: [
            "2 cups mixed greens (spinach, arugula, etc.)",
            "1/2 cup cherry tomatoes, halved",
            "1/4 cup sliced cucumber",
            "1/4 cup shredded carrots",
            "1/4 cup red onion, thinly sliced",
            "1/4 cup avocado, sliced",
            "2 tbsp olive oil",
            "1 tbsp balsamic vinegar",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Place mixed greens in a large salad bowl.",
            "Step 2: Add cherry tomatoes, cucumber, carrots, red onion, and avocado on top.",
            "Step 3: Drizzle with olive oil and balsamic vinegar.",
            "Step 4: Sprinkle with salt and pepper, then toss to combine.",
            "Step 5: Serve immediately."
        ],
        time: "5:00", // Total preparation time in minutes:seconds format
        tips: [
            "Use pre-washed greens to save time.",
            "Add nuts or seeds for some crunch.",
            "For a zesty flavor, drizzle with lemon juice."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Lazy Salad";

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

    // Handle the "Start Making" button
    document.getElementById('startCookingBtn').addEventListener('click', () => {
        // Navigate to step-by-step page in the 'pages' folder
        window.location.href = '../pages/step-by-step.html'; // Adjust the path if needed
    });
});
