document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Cucumber and Hummus Cups
    const recipeDetails = {
        ingredients: [
            "2 large cucumbers, sliced into 1-inch thick rounds",
            "1 cup hummus (store-bought or homemade)",
            "1 tbsp olive oil",
            "1 tbsp fresh parsley, chopped",
            "1 tbsp sesame seeds (optional)",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Slice the cucumbers into 1-inch thick rounds.",
            "Step 2: Scoop out a small portion from the center of each cucumber slice to create a cup shape.",
            "Step 3: Fill each cucumber cup with hummus.",
            "Step 4: Drizzle with olive oil and garnish with chopped parsley and sesame seeds.",
            "Step 5: Season with salt and pepper to taste and serve."
        ],
        time: "10:00", // Cooking time in minutes:seconds format
        tips: [
            "For extra crunch, add a sprinkle of paprika or smoked paprika on top.",
            "Use a melon baller to scoop out a little bit of the cucumber for a more cup-like shape.",
            "Try adding a little lemon juice to the hummus for extra flavor."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Cucumber and Hummus Cups";

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
