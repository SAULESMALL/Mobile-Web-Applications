document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Classic BLT Sandwich
    const recipeDetails = {
        ingredients: [
            "2 slices whole wheat bread (or your preferred bread)",
            "3 slices cooked bacon",
            "1/2 cup lettuce",
            "2 slices tomato",
            "1 tablespoon mayonnaise",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Toast the bread slices until golden brown.",
            "Step 2: Spread mayonnaise on one side of each slice of bread.",
            "Step 3: Layer the bacon, lettuce, and tomato on one slice of bread.",
            "Step 4: Top with the second slice of bread.",
            "Step 5: Slice the sandwich in half and serve."
        ],
        time: "10:00", // Cooking time in minutes:seconds format
        tips: [
            "Use crispy bacon for a better texture.",
            "Toast the bread for extra crunch.",
            "For a healthier version, use whole-grain bread or add avocado."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Classic BLT Sandwich";

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
