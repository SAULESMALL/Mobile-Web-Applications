document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Zucchini Noodles with Tomato Sauce
    const recipeDetails = {
        ingredients: [
            "4 medium zucchinis, spiralized into noodles",
            "2 cups tomato sauce (gluten-free)",
            "2 tbsp olive oil",
            "2 cloves garlic, minced",
            "1/2 tsp dried oregano",
            "1/4 tsp red pepper flakes (optional)",
            "Salt and pepper to taste",
            "Fresh basil leaves for garnish"
        ],
        steps: [
            "Step 1: Heat olive oil in a pan over medium heat and sauté garlic until fragrant.",
            "Step 2: Add the tomato sauce, oregano, red pepper flakes, salt, and pepper.",
            "Step 3: Simmer for 5 minutes to combine the flavors.",
            "Step 4: Add the zucchini noodles to the pan and cook for 2-3 minutes, just until tender.",
            "Step 5: Garnish with fresh basil and serve."
        ],
        time: "15:00", // Cooking time in minutes:seconds format
        tips: [
            "For a richer sauce, add a splash of balsamic vinegar to the tomato sauce.",
            "Don't overcook the zucchini noodles to maintain a nice texture.",
            "Top with freshly grated Parmesan (if not strictly dairy-free)."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Zucchini Noodles with Tomato Sauce";

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
