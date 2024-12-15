document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Rice Bowl
    const recipeDetails = {
        ingredients: [
            "1 cup cooked rice (white or brown)",
            "1/2 cup chickpeas, cooked or canned",
            "1/4 cup sliced cucumber",
            "1/4 cup sliced avocado",
            "1/4 cup shredded carrots",
            "1 tbsp olive oil",
            "1 tbsp soy sauce (or tamari for gluten-free)",
            "1 tsp sesame oil",
            "1 tsp lemon juice",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Heat olive oil in a pan over medium heat.",
            "Step 2: Add the chickpeas and soy sauce to the pan and sauté for 2-3 minutes.",
            "Step 3: Assemble the rice bowl by placing cooked rice in a bowl.",
            "Step 4: Add the sautéed chickpeas, cucumber, avocado, and shredded carrots.",
            "Step 5: Drizzle sesame oil and lemon juice on top, then season with salt and pepper.",
            "Step 6: Optionally, add sesame seeds or crushed peanuts on top for a crunch."
        ],
        time: "Prep time: 10 minutes, Cook time: 5 minutes",
        tips: [
            "For extra protein, add tofu or tempeh.",
            "Top with sesame seeds or crushed peanuts for a crunch.",
            "Feel free to swap the vegetables for your favorites like spinach or bell peppers."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Rice Bowl";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = recipeDetails.time;

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
