document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Chicken Fajita Bowl
    const recipeDetails = {
        ingredients: [
            "2 chicken breasts, sliced",
            "1 red bell pepper, sliced",
            "1 green bell pepper, sliced",
            "1 yellow onion, sliced",
            "1 cup cooked rice (white or brown)",
            "2 tbsp olive oil",
            "1 tsp chili powder",
            "1/2 tsp cumin",
            "1/2 tsp paprika",
            "Salt and pepper to taste",
            "Optional toppings: shredded cheese, avocado, salsa"
        ],
        steps: [
            "Step 1: Heat olive oil in a large pan over medium heat.",
            "Step 2: Add sliced chicken and cook until browned on both sides.",
            "Step 3: Add the bell peppers and onions, cooking until softened.",
            "Step 4: Stir in the chili powder, cumin, paprika, salt, and pepper.",
            "Step 5: Serve over cooked rice, and top with optional toppings."
        ],
        time: "30:00", // Cooking time in minutes:seconds format
        tips: [
            "Use pre-cooked rice to save time.",
            "Slice the vegetables thinly for faster cooking.",
            "For extra flavor, marinate the chicken with the spices beforehand."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Chicken Fajita Bowl";

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
