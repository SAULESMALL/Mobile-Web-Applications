document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Beef Stir Fry with Rice
    const recipeDetails = {
        ingredients: [
            "1 lb beef (sirloin or flank steak), thinly sliced",
            "2 tablespoons gluten-free soy sauce",
            "1 tablespoon oyster sauce (optional for extra flavor)",
            "1 tablespoon cornstarch",
            "2 tablespoons vegetable oil",
            "1 red bell pepper, sliced",
            "1/2 cup broccoli florets",
            "1/2 cup carrots, julienned",
            "2 cloves garlic, minced",
            "1/2 cup cooked rice (preferably jasmine or basmati)"
        ],
        steps: [
            "Step 1: Marinate the beef with soy sauce, oyster sauce, and cornstarch for 10 minutes.",
            "Step 2: Heat vegetable oil in a pan over medium-high heat, then cook the beef until browned.",
            "Step 3: Add the bell pepper, broccoli, carrots, and garlic, and stir-fry until vegetables are tender.",
            "Step 4: Add the cooked rice and stir everything together. Cook for another 2-3 minutes.",
            "Step 5: Serve hot and enjoy your beef stir fry with rice!"
        ],
        time: "15:00", // Cooking time in minutes:seconds format
        tips: [
            "For extra flavor, marinate the beef in soy sauce and garlic for 30 minutes before cooking.",
            "Use cooked rice from the day before for better texture.",
            "You can substitute any veggies you like in the stir fry, such as snap peas or mushrooms."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Beef Stir Fry with Rice";

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
