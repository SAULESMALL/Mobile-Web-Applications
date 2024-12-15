document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Chickpea Salad Sandwich
    const recipeDetails = {
        ingredients: [
            "1 can chickpeas, drained and mashed",
            "1 tablespoon olive oil",
            "2 tablespoons lemon juice",
            "1/4 cup red onion, finely chopped",
            "1/4 cup celery, finely chopped",
            "1/4 cup carrots, grated",
            "1 tablespoon Dijon mustard",
            "1/4 cup parsley, chopped",
            "Salt and pepper to taste",
            "4 slices whole wheat bread (or bread of your choice)",
            "Leafy greens (lettuce, spinach, etc.) for serving"
        ],
        steps: [
            "Step 1: Mash the chickpeas in a bowl until they are mostly mashed, but still a bit chunky.",
            "Step 2: Add olive oil, lemon juice, Dijon mustard, red onion, celery, carrots, and parsley to the mashed chickpeas. Mix well.",
            "Step 3: Season with salt and pepper to taste.",
            "Step 4: Spread the chickpea mixture onto the bread slices.",
            "Step 5: Add leafy greens and close the sandwich. Serve immediately."
        ],
        time: "5:00", // Cooking time in minutes:seconds format
        tips: [
            "Toast the bread slightly for an extra crunch.",
            "For extra protein, add some avocado slices to the sandwich.",
            "Make sure to use fresh lemon juice for the best flavor."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Chickpea Salad Sandwich";

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
        // Navigate to step-by-step page
        window.location.href = '../pages/step-by-step.html'; // Correct path to 'step-by-step.html'
    });
});
