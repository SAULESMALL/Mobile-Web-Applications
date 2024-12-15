document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Bagel with Cream Cheese and Jam
    const recipeDetails = {
        ingredients: [
            "1 bagel",
            "2 tbsp cream cheese",
            "1 tbsp fruit jam (your choice)",
            "Optional: Fresh fruit or nuts for topping"
        ],
        steps: [
            "Step 1: Cut the bagel in half and toast it to your preferred crispness.",
            "Step 2: Spread the cream cheese on the toasted bagel halves.",
            "Step 3: Add a tablespoon of fruit jam on top of the cream cheese.",
            "Step 4: Optionally, top with fresh fruit or nuts for added flavor."
        ],
        time: "5:00", // Prep time in minutes:seconds format
        tips: [
            "Toast the bagel for a crunchier texture.",
            "Choose your favorite flavor of jam to personalize the dish.",
            "For added flavor, try adding a sprinkle of cinnamon on top."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Bagel with Cream Cheese and Jam";

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
