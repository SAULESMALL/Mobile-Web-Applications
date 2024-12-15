document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegetarian Tacos
    const recipeDetails = {
        ingredients: [
            "8 small corn tortillas",
            "1 cup cooked black beans",
            "1/2 cup corn kernels (fresh or frozen)",
            "1/2 cup diced tomatoes",
            "1/4 cup diced red onions",
            "1/2 avocado, sliced",
            "1/4 cup chopped cilantro",
            "1 tablespoon olive oil",
            "1 teaspoon chili powder",
            "1/2 teaspoon cumin",
            "Salt and pepper to taste",
            "Lime wedges for serving",
            "Sour cream or vegan yogurt (optional)"
        ],
        steps: [
            "Step 1: Warm the tortillas in a dry skillet over medium heat for about 1 minute on each side.",
            "Step 2: Heat olive oil in a pan, then sauté the black beans, corn, and spices (chili powder, cumin) until heated through.",
            "Step 3: Assemble the tacos by adding the bean and corn mixture to each tortilla.",
            "Step 4: Top with diced tomatoes, red onions, avocado, cilantro, and a squeeze of lime.",
            "Step 5: Optional: Add a dollop of sour cream or vegan yogurt and serve."
        ],
        time: "15:00", // Cooking time in minutes:seconds format
        tips: [
            "Use soft taco shells or hard taco shells, depending on your preference.",
            "Top with your favorite salsa or hot sauce for added flavor.",
            "Feel free to add extra toppings like shredded cheese or lettuce if desired."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegetarian Tacos";

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
