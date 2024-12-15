document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Baked Chicken Tenders
    const recipeDetails = {
        ingredients: [
            "1 lb chicken tenders",
            "1 cup gluten-free breadcrumbs",
            "1/2 cup grated parmesan cheese",
            "1/2 tsp garlic powder",
            "1/2 tsp onion powder",
            "1/2 tsp paprika",
            "1/4 tsp salt",
            "1/4 tsp black pepper",
            "2 large eggs, beaten",
            "1 tbsp olive oil (for brushing)"
        ],
        steps: [
            "Step 1: Preheat the oven to 400°F (200°C) and line a baking sheet with parchment paper.",
            "Step 2: In a shallow bowl, mix the breadcrumbs, parmesan, garlic powder, onion powder, paprika, salt, and pepper.",
            "Step 3: Dip each chicken tender into the beaten eggs, then coat with the breadcrumb mixture.",
            "Step 4: Place the coated tenders on the prepared baking sheet and brush with olive oil.",
            "Step 5: Bake for 20 minutes or until golden brown and crispy, flipping halfway through.",
            "Step 6: Serve with your favorite dipping sauce."
        ],
        time: "Prep time: 10 minutes, Cook time: 20 minutes",
        tips: [
            "For extra crunch, double coat the chicken tenders in breadcrumbs.",
            "Serve with your favorite dipping sauce for added flavor.",
            "For a healthier option, use almond flour instead of breadcrumbs."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Baked Chicken Tenders";

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
