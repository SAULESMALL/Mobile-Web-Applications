document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Gluten-Free Chicken Stir Fry
    const recipeDetails = {
        ingredients: [
            "2 chicken breasts, thinly sliced",
            "1 tablespoon olive oil",
            "1 cup broccoli florets",
            "1 red bell pepper, sliced",
            "1 carrot, julienned",
            "2 cloves garlic, minced",
            "2 tablespoons gluten-free soy sauce",
            "1 tablespoon honey",
            "1 tablespoon rice vinegar",
            "1 teaspoon sesame oil",
            "Cooked rice (for serving)"
        ],
        steps: [
            "Step 1: Heat olive oil in a wok or large skillet over medium-high heat.",
            "Step 2: Add the sliced chicken breasts and cook until browned and cooked through.",
            "Step 3: Add the broccoli, bell pepper, and carrot. Stir-fry for 3-4 minutes.",
            "Step 4: Add garlic, soy sauce, honey, rice vinegar, and sesame oil. Stir until well coated.",
            "Step 5: Cook for an additional 2 minutes, then remove from heat.",
            "Step 6: Serve over cooked rice and garnish with optional toppings like sesame seeds or green onions."
        ],
        time: "Prep time: 10 minutes, Cook time: 15 minutes",
        tips: [
            "Use a wok or large skillet for better stir-frying results.",
            "Feel free to add other vegetables like snow peas or zucchini.",
            "For extra flavor, top with sesame seeds or chopped green onions."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Gluten-Free Chicken Stir Fry";

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
        window.location.href = '../pages/step-by-step.html'; // Correct path to 'step-by-step.html'
    });
});
