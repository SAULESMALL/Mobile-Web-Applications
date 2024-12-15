document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegan Smoothie
    const recipeDetails = {
        ingredients: [
            "1 ripe banana",
            "1/2 cup almond milk (or any plant-based milk)",
            "1 tablespoon peanut butter",
            "1/2 cup frozen berries (strawberries, blueberries, etc.)",
            "1 tablespoon chia seeds (optional)",
            "Ice cubes (optional, for a thicker smoothie)"
        ],
        steps: [
            "Step 1: Add all ingredients into a blender.",
            "Step 2: Blend until smooth and creamy.",
            "Step 3: Pour into a glass and serve immediately.",
            "Step 4: Garnish with extra berries or seeds if desired."
        ],
        time: "5:00", // Cooking time in minutes:seconds format
        tips: [
            "For a creamier smoothie, add a little bit of avocado.",
            "Adjust the sweetness by adding a drizzle of maple syrup or agave if needed.",
            "Try other frozen fruits like mango or peach for a different flavor."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegan Smoothie";

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

    // Handle the "Start Making" button
    document.getElementById('startCookingBtn').addEventListener('click', () => {
        // Navigate to step-by-step page in the 'pages' folder
        window.location.href = '../pages/step-by-step.html'; // Correct path to 'step-by-step.html'
    });
});
