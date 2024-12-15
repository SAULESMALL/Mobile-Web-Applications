document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Egg Salad Lettuce Wraps
    const recipeDetails = {
        ingredients: [
            "4 large eggs, hard-boiled and chopped",
            "1/4 cup mayonnaise (dairy-free if needed)",
            "1 tbsp Dijon mustard",
            "1 tbsp fresh dill, chopped",
            "1/4 cup celery, finely chopped",
            "Salt and pepper to taste",
            "6 large lettuce leaves (romaine or butter lettuce)",
            "1/4 cup red onion, finely chopped (optional)"
        ],
        steps: [
            "Step 1: Peel and chop the hard-boiled eggs into small pieces.",
            "Step 2: In a bowl, combine the eggs, mayonnaise, mustard, dill, celery, salt, and pepper.",
            "Step 3: Mix well until all ingredients are evenly combined.",
            "Step 4: Spoon the egg salad mixture onto the lettuce leaves.",
            "Step 5: Optionally, add chopped red onion on top and serve immediately."
        ],
        time: "10:00", // Cooking time in minutes:seconds format
        tips: [
            "For extra crunch, add a handful of chopped pickles or capers.",
            "Chill the egg salad for 30 minutes before serving for better flavor.",
            "Use a variety of lettuce for different textures (e.g., butter lettuce or iceberg)."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Egg Salad Lettuce Wraps";

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
