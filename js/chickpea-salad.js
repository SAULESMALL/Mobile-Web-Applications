document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Chickpea Salad
    const recipeDetails = {
        ingredients: [
            "1 can (15 oz) chickpeas, drained and rinsed",
            "1/2 cucumber, diced",
            "1/2 red bell pepper, diced",
            "1/4 red onion, finely chopped",
            "1 tablespoon olive oil",
            "1 tablespoon lemon juice",
            "Salt and pepper to taste",
            "1 tablespoon chopped parsley (optional)"
        ],
        steps: [
            "Step 1: Drain and rinse the chickpeas.",
            "Step 2: Dice the cucumber, red bell pepper, and red onion.",
            "Step 3: In a bowl, combine chickpeas, cucumber, red bell pepper, and red onion.",
            "Step 4: Drizzle with olive oil and lemon juice.",
            "Step 5: Season with salt and pepper and mix well.",
            "Step 6: Garnish with parsley (optional) and serve."
        ],
        time: "5:00", // Prep time in minutes:seconds format
        tips: [
            "For extra protein, add some quinoa or tofu cubes.",
            "Feel free to add other vegetables like cherry tomatoes or olives for more flavor.",
            "If you prefer a creamier dressing, mix in some tahini or mashed avocado."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Chickpea Salad";

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
        // Navigate to step-by-step page
        window.location.href = '../pages/step-by-step.html'; // Correct path to 'step-by-step.html'
    });
});
