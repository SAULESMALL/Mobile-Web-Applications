document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Grilled Cheese Sandwich
    const recipeDetails = {
        ingredients: [
            "2 slices of bread",
            "2 slices of cheese (cheddar, mozzarella, or your choice)",
            "1 tablespoon butter",
            "Optional: a pinch of salt or pepper"
        ],
        steps: [
            "Step 1: Heat a non-stick skillet over medium heat.",
            "Step 2: Butter one side of each slice of bread.",
            "Step 3: Place a slice of cheese between the slices of bread, butter side facing out.",
            "Step 4: Grill the sandwich in the skillet until golden brown and the cheese is melted.",
            "Step 5: Flip the sandwich and grill the other side until golden and crispy."
        ],
        time: "5:00", // Cooking time in minutes:seconds format
        tips: [
            "Use a non-stick skillet for the best results when grilling.",
            "For a crispier sandwich, butter the outside of the bread slices generously.",
            "Try adding herbs like garlic or thyme to the butter for extra flavor."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Grilled Cheese Sandwich";

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
