document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegan Stir-Fry
    const recipeDetails = {
        ingredients: [
            "1 cup cooked brown rice",
            "1 cup broccoli florets",
            "1/2 cup sliced carrots",
            "1/2 cup snap peas",
            "1/2 cup bell peppers (sliced)",
            "1/4 cup soy sauce (or tamari for gluten-free)",
            "1 tablespoon sesame oil",
            "1 tablespoon olive oil",
            "1 tablespoon grated ginger",
            "1 clove garlic, minced",
            "1 tablespoon sesame seeds",
            "1/4 cup chopped green onions",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Heat sesame oil and olive oil in a pan over medium heat.",
            "Step 2: Add garlic and ginger, sauté until fragrant.",
            "Step 3: Add the vegetables and stir-fry for 5-7 minutes until tender.",
            "Step 4: Stir in soy sauce and sesame seeds, cook for another 2-3 minutes.",
            "Step 5: Serve the stir-fry over cooked brown rice and garnish with green onions."
        ],
        time: "15:00", // Cooking time in minutes:seconds format
        tips: [
            "Feel free to add tofu or tempeh for extra protein.",
            "Experiment with other veggies like mushrooms or zucchini.",
            "For extra flavor, drizzle with hot sauce or sprinkle with chopped peanuts before serving."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegan Stir-Fry";

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
