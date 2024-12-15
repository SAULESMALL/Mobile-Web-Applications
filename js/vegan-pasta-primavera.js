document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegan Pasta Primavera
    const recipeDetails = {
        ingredients: [
            "8 oz pasta (gluten-free if preferred)",
            "1 tablespoon olive oil",
            "1/2 cup cherry tomatoes, halved",
            "1/2 cup bell peppers, sliced",
            "1/2 cup zucchini, sliced",
            "1/2 cup broccoli florets",
            "2 cloves garlic, minced",
            "1/4 cup fresh basil, chopped",
            "1 tablespoon nutritional yeast (optional)",
            "Salt and pepper, to taste"
        ],
        steps: [
            "Step 1: Cook the pasta according to package instructions, then drain and set aside.",
            "Step 2: Heat olive oil in a pan over medium heat. Add the garlic and sauté until fragrant.",
            "Step 3: Add the bell peppers, zucchini, and broccoli. Cook until softened.",
            "Step 4: Add the cherry tomatoes and cook for another 2-3 minutes.",
            "Step 5: Add the cooked pasta to the vegetables and toss together.",
            "Step 6: Stir in fresh basil, salt, and pepper. Serve topped with nutritional yeast."
        ],
        time: "15:00", // Cooking time in minutes:seconds format
        tips: [
            "Use any seasonal vegetables for a fresh taste.",
            "For a creamier texture, add a splash of plant-based milk or a dollop of vegan cream cheese.",
            "Top with extra nutritional yeast for a cheesy flavor."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegan Pasta Primavera";

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
