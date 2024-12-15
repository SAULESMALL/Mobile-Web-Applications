document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Caprese Salad
    const recipeDetails = {
        ingredients: [
            "4 large tomatoes, sliced",
            "8 oz fresh mozzarella cheese, sliced",
            "Fresh basil leaves",
            "1/4 cup extra virgin olive oil",
            "2 tbsp balsamic vinegar",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Arrange the tomato slices, mozzarella slices, and basil leaves on a plate in an alternating pattern.",
            "Step 2: Drizzle olive oil and balsamic vinegar over the salad.",
            "Step 3: Season with salt and pepper to taste.",
            "Step 4: Serve immediately or chill for a few minutes before serving."
        ],
        time: "10:00", // Prep time in minutes:seconds format
        tips: [
            "Use ripe, in-season tomatoes for the best flavor.",
            "For an extra touch, drizzle some pesto over the salad.",
            "Chill the mozzarella before assembling the salad for better texture."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Caprese Salad";

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
        window.location.href = '../pages/step-by-step.html';  // Correct path to 'step-by-step.html'
    });
});
