document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Baked Caprese Stuffed Bell Peppers
    const recipeDetails = {
        ingredients: [
            "4 large bell peppers (halved and seeds removed)",
            "1 cup cherry tomatoes (halved)",
            "1 cup mozzarella balls (or shredded mozzarella)",
            "1/4 cup fresh basil leaves (chopped)",
            "3 tbsp balsamic glaze",
            "1 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Preheat oven to 375°F (190°C).",
            "Step 2: Prepare the bell peppers by cutting them in half and removing the seeds.",
            "Step 3: In a bowl, mix together the cherry tomatoes, mozzarella, basil, balsamic glaze, olive oil, salt, and pepper.",
            "Step 4: Stuff each bell pepper half with the mixture.",
            "Step 5: Place the stuffed peppers on a baking sheet and bake for 20 minutes or until the peppers are tender and cheese is melted.",
            "Step 6: Drizzle extra balsamic glaze before serving."
        ],
        time: "10:00", // Cooking time in minutes:seconds format
        tips: [
            "Use colorful bell peppers for a vibrant presentation.",
            "Drizzle extra balsamic glaze before serving for added flavor.",
            "Try adding a sprinkle of grated Parmesan for extra cheesiness."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Baked Caprese Stuffed Bell Peppers";

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
        window.location.href = '../pages/step-by-step.html';  // Correct path to 'step-by-step.html'
    });
});
