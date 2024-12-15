document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Joyful Smoothie
    const recipeDetails = {
        ingredients: [
            "1 banana",
            "1 cup almond milk",
            "1 tablespoon honey",
            "1/2 cup spinach",
            "1/2 cup ice",
            "1/4 cup Greek yogurt"
        ],
        time: "5:00", // Cooking time in minutes:seconds format
        steps: [
            "Step 1: Add the banana, almond milk, and honey to the blender.",
            "Step 2: Add spinach, ice, and Greek yogurt.",
            "Step 3: Blend until smooth.",
            "Step 4: Pour into a glass and enjoy!"
        ],
        tips: [
            "Use frozen bananas for a thicker smoothie.",
            "For extra protein, add a scoop of protein powder.",
            "Adjust sweetness with more or less honey."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Joyful Smoothie";

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
