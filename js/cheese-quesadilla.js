document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Cheese Quesadilla
    const recipeDetails = {
        ingredients: [
            "2 large flour tortillas",
            "1 cup shredded cheese (cheddar, mozzarella, or a blend)",
            "1 tablespoon butter or olive oil",
            "Sour cream and salsa (for serving, optional)"
        ],
        steps: [
            "Step 1: Heat a non-stick skillet over medium heat and add butter or olive oil.",
            "Step 2: Place one tortilla in the skillet, sprinkle with cheese, and top with the second tortilla.",
            "Step 3: Cook for 2-3 minutes on each side until golden brown and the cheese has melted.",
            "Step 4: Remove from the pan and cut into wedges.",
            "Step 5: Serve with sour cream and salsa on the side."
        ],
        time: "5:00", // Cooking time in minutes:seconds format
        tips: [
            "Use a non-stick skillet to prevent sticking.",
            "Don’t overfill with cheese to make flipping easier.",
            "For extra flavor, add a pinch of garlic powder or herbs."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Cheese Quesadilla";

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
        window.location.href = '../pages/step-by-step.html';  // Correct path to 'step-by-step.html'
    });
});
