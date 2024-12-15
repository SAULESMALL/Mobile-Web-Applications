document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for BLT Sandwich
    const recipeDetails = {
        ingredients: [
            "2 slices of bread (your choice)",
            "3 slices of cooked bacon",
            "2 leaves of lettuce",
            "2 slices of tomato",
            "1 tablespoon mayonnaise",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Toast the bread slices until golden brown.",
            "Step 2: Cook the bacon until crispy.",
            "Step 3: Spread mayonnaise on one slice of bread.",
            "Step 4: Layer the lettuce, tomato, and bacon on top of the mayonnaise.",
            "Step 5: Top with the second slice of bread and serve."
        ],
        time: "10:00", // Cooking time in minutes:seconds format
        tips: [
            "Toast the bread for extra crunch.",
            "Use thick-cut bacon for more flavor.",
            "Spread a thin layer of mayonnaise for a creamy texture."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "BLT Sandwich";

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
        // Navigate to step-by-step page in the 'pages' folder
        window.location.href = '../pages/step-by-step.html'; // Correct path to 'step-by-step.html'
    });
});
