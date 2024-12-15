document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Gluten-Free Chicken Parmesan
    const recipeDetails = {
        ingredients: [
            "4 boneless, skinless chicken breasts",
            "1 cup gluten-free breadcrumbs",
            "1/2 cup grated parmesan cheese",
            "2 cups marinara sauce (gluten-free)",
            "1 1/2 cups shredded mozzarella cheese",
            "2 large eggs",
            "1/4 cup gluten-free flour",
            "2 tbsp olive oil",
            "Salt and pepper to taste",
            "Fresh basil leaves for garnish (optional)"
        ],
        steps: [
            "Step 1: Preheat the oven to 375°F (190°C).",
            "Step 2: Flatten the chicken breasts using a meat mallet to ensure even cooking.",
            "Step 3: Dredge each chicken breast in flour, dip in beaten eggs, and coat with gluten-free breadcrumbs and Parmesan cheese.",
            "Step 4: Heat olive oil in a skillet and sear each chicken breast for 3-4 minutes per side.",
            "Step 5: Place the chicken breasts in a baking dish, top with marinara sauce and mozzarella cheese.",
            "Step 6: Bake for 20-25 minutes, or until the chicken is fully cooked and the cheese is melted and bubbly.",
            "Step 7: Garnish with fresh basil and serve with gluten-free pasta or salad."
        ],
        time: "20:00", // Cooking time in minutes:seconds format
        tips: [
            "Use a meat mallet to flatten the chicken for even cooking.",
            "For extra crispiness, double coat the chicken with breadcrumbs.",
            "Top with fresh basil and serve with gluten-free pasta for a full meal."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Gluten-Free Chicken Parmesan";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: 20 minutes, Cook time: ${recipeDetails.time}`;

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
