document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegetarian Fried Rice
    const recipeDetails = {
        ingredients: [
            "2 cups cooked rice (preferably cold)",
            "1 tablespoon sesame oil",
            "1/2 cup diced carrots",
            "1/2 cup peas",
            "1/4 cup diced bell peppers",
            "2 eggs, beaten",
            "3 tablespoons soy sauce (or tamari for gluten-free)",
            "1 tablespoon green onions, chopped",
            "1/2 teaspoon garlic powder",
            "1/4 teaspoon ground black pepper"
        ],
        steps: [
            "Step 1: Heat sesame oil in a pan over medium heat.",
            "Step 2: Add diced carrots, peas, and bell peppers to the pan. Stir-fry for 3-4 minutes.",
            "Step 3: Push veggies to one side and scramble the eggs in the empty space.",
            "Step 4: Add the cold rice to the pan and stir-fry for 5-6 minutes, breaking up clumps.",
            "Step 5: Stir in soy sauce, green onions, garlic powder, and black pepper. Cook for an additional 2 minutes."
        ],
        time: "15:00", // Cooking time in minutes:seconds format
        tips: [
            "Use leftover rice for best results—it should be cold and dry.",
            "Feel free to add any other veggies like corn, broccoli, or zucchini.",
            "If you want a little heat, add some chili flakes or sriracha."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegetarian Fried Rice";

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
        window.location.href = '../pages/step-by-step.html';  // Correct path to 'step-by-step.html'
    });
});
