document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegetarian Quesadilla
    const recipeDetails = {
        ingredients: [
            "2 large flour tortillas",
            "1 cup shredded cheese (cheddar or Mexican blend)",
            "1/2 cup cooked black beans",
            "1/2 cup diced bell peppers",
            "1/4 cup diced onions",
            "1/4 cup chopped fresh cilantro (optional)",
            "1 tablespoon olive oil",
            "Sour cream and salsa (for serving)"
        ],
        steps: [
            "Step 1: Heat olive oil in a non-stick skillet over medium heat.",
            "Step 2: Place one tortilla in the skillet, then sprinkle with cheese, beans, peppers, onions, and cilantro.",
            "Step 3: Place the second tortilla on top and press gently.",
            "Step 4: Cook until the bottom is golden brown, then flip and cook the other side until golden.",
            "Step 5: Remove from the pan and slice into wedges. Serve with sour cream and salsa."
        ],
        time: "10:00", // Cooking time in minutes:seconds format
        tips: [
            "Use a non-stick skillet to prevent the tortilla from sticking.",
            "Don't overfill the quesadilla to make flipping easier.",
            "Experiment with additional fillings like corn, spinach, or jalapeños for extra flavor."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegetarian Quesadilla";

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
