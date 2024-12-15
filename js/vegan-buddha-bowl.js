document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegan Buddha Bowl
    const recipeDetails = {
        ingredients: [
            "1 cup quinoa (cooked)",
            "1/2 cup chickpeas (cooked or canned)",
            "1/2 cup roasted sweet potatoes",
            "1/2 avocado, sliced",
            "1/4 cup shredded carrots",
            "1/4 cup cucumber, sliced",
            "2 tablespoons tahini dressing",
            "1 tablespoon sesame seeds",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Cook the quinoa and chickpeas if not using pre-cooked or canned.",
            "Step 2: Roast the sweet potatoes until golden and tender.",
            "Step 3: Arrange the quinoa, chickpeas, roasted sweet potatoes, avocado, shredded carrots, and cucumber in a bowl.",
            "Step 4: Drizzle with tahini dressing and sprinkle sesame seeds on top.",
            "Step 5: Season with salt and pepper to taste, and enjoy!"
        ],
        time: "20:00", // Cooking time in minutes:seconds format
        tips: [
            "Feel free to add any other veggies you like, such as spinach or bell peppers.",
            "Top with a drizzle of lemon juice or hot sauce for extra flavor.",
            "If you want extra protein, add tofu or tempeh to the bowl."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegan Buddha Bowl";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: 15 minutes, Cook time: ${recipeDetails.time}`;

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
