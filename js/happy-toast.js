document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Happy Toast
    const recipeDetails = {
        ingredients: [
            "2 slices of bread",
            "2 tablespoons butter",
            "1 tablespoon cinnamon sugar",
            "1 tablespoon honey"
        ],
        steps: [
            "Step 1: Spread butter on both slices of bread.",
            "Step 2: Sprinkle cinnamon sugar evenly on top of the buttered bread.",
            "Step 3: Toast the bread until golden brown.",
            "Step 4: Drizzle honey over the toast and serve."
        ],
        time: "5:00", // Cooking time in minutes:seconds format
        tips: [
            "Use thick-cut bread for a more hearty toast.",
            "For extra flavor, use flavored butter.",
            "Try adding a sprinkle of cocoa powder for a chocolatey twist."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Happy Toast";

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
        // Navigate to step-by-step page in the 'pages' folder
        window.location.href = '../pages/step-by-step.html'; // Correct path to 'step-by-step.html'
    });
});
