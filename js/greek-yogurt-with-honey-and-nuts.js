document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Greek Yogurt with Honey and Nuts
    const recipeDetails = {
        ingredients: [
            "1 cup plain Greek yogurt",
            "1 tbsp honey",
            "1/4 cup mixed nuts (e.g., almonds, walnuts, pecans)",
            "1 tbsp chia seeds (optional)",
            "1/2 tsp cinnamon (optional)"
        ],
        steps: [
            "Step 1: Spoon the Greek yogurt into a bowl.",
            "Step 2: Drizzle honey over the yogurt.",
            "Step 3: Add mixed nuts, chia seeds, and cinnamon.",
            "Step 4: Stir everything together and enjoy."
        ],
        time: "5:00", // Cooking time in minutes:seconds format
        tips: [
            "For extra crunch, toast the nuts lightly before adding them to the yogurt.",
            "Try adding some fresh fruit, like berries or banana slices, for extra flavor.",
            "Use a dairy-free yogurt to make the recipe vegan."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Greek Yogurt with Honey and Nuts";

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
