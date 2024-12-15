document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for BBQ Ribs
    const recipeDetails = {
        ingredients: [
            "2 racks baby back ribs",
            "1/4 cup olive oil",
            "1/4 cup apple cider vinegar",
            "1/4 cup brown sugar",
            "1/4 cup ketchup",
            "1/4 cup Worcestershire sauce",
            "1 tablespoon garlic powder",
            "1 tablespoon onion powder",
            "1 tablespoon smoked paprika",
            "1 teaspoon chili powder",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Preheat your oven to 275°F (135°C).",
            "Step 2: Rub olive oil on the ribs, then season with salt, pepper, garlic powder, onion powder, smoked paprika, and chili powder.",
            "Step 3: Mix apple cider vinegar, brown sugar, ketchup, and Worcestershire sauce in a bowl to make the BBQ sauce.",
            "Step 4: Place the ribs on a baking sheet and cover with foil. Cook for 2.5-3 hours.",
            "Step 5: Remove the ribs, brush with BBQ sauce, and bake for an additional 15-20 minutes, uncovered.",
            "Step 6: Let the ribs rest for 10 minutes before slicing."
        ],
        time: "Prep time: 15 minutes, Cook time: 3 hours",
        tips: [
            "For extra tenderness, cook the ribs low and slow at 275°F for 2.5-3 hours.",
            "If you prefer a thicker BBQ sauce, simmer it over medium heat until it thickens before brushing on the ribs.",
            "Let the ribs rest for 10 minutes after cooking before cutting for the best texture."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "BBQ Ribs";

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
