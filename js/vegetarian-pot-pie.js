document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegetarian Pot Pie
    const recipeDetails = {
        ingredients: [
            "1 package refrigerated pie crusts",
            "2 tablespoons olive oil",
            "1 cup diced carrots",
            "1 cup diced potatoes",
            "1/2 cup frozen peas",
            "1/2 cup corn kernels",
            "1/4 cup chopped onion",
            "1/4 cup flour",
            "1 1/2 cups vegetable broth",
            "1 cup milk (or non-dairy milk)",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Preheat the oven to 425°F (220°C).",
            "Step 2: Heat olive oil in a large pan over medium heat and sauté onions, carrots, and potatoes for about 5-7 minutes.",
            "Step 3: Add flour and stir to combine, cooking for 2 minutes.",
            "Step 4: Gradually add vegetable broth and milk, stirring constantly until thickened.",
            "Step 5: Add peas and corn, season with salt and pepper, then remove from heat.",
            "Step 6: Roll out pie crusts and place one in the pie dish. Pour the vegetable mixture into the crust.",
            "Step 7: Top with the second pie crust, seal edges, and cut slits in the top for steam to escape.",
            "Step 8: Bake for 35-40 minutes until golden brown and the filling is bubbling."
        ],
        time: "Prep time: 20 minutes, Cook time: 40 minutes",
        tips: [
            "For a golden crust, brush the top with melted butter before baking.",
            "Use frozen mixed vegetables to save time.",
            "Let the pot pie cool for a few minutes before serving to set the filling."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegetarian Pot Pie";

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

    // Handle the "Start Making" button
    document.getElementById('startCookingBtn').addEventListener('click', () => {
        // Navigate to step-by-step page in the 'pages' folder
        window.location.href = '../pages/step-by-step.html'; // Correct path to 'step-by-step.html'
    });
});
