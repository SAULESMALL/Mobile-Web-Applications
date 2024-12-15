document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Mac and Cheese with Broccoli
    const recipeDetails = {
        ingredients: [
            "8 oz elbow macaroni",
            "2 cups broccoli florets",
            "2 tbsp butter",
            "2 tbsp all-purpose flour",
            "2 cups milk",
            "2 cups shredded cheddar cheese",
            "1/2 tsp garlic powder",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Cook the elbow macaroni according to package instructions.",
            "Step 2: While the macaroni is cooking, steam the broccoli florets until tender.",
            "Step 3: In a pan, melt butter over medium heat and whisk in the flour to make a roux.",
            "Step 4: Slowly add milk, stirring constantly, until the sauce thickens.",
            "Step 5: Stir in the shredded cheddar cheese, garlic powder, salt, and pepper, and cook until the cheese is melted.",
            "Step 6: Combine the cooked macaroni, broccoli, and cheese sauce, and mix well.",
            "Step 7: Serve hot, optionally garnishing with extra cheese."
        ],
        time: "Prep time: 10 minutes, Cook time: 20 minutes",
        tips: [
            "Steam the broccoli while the macaroni cooks to save time.",
            "Use sharp cheddar cheese for a more intense flavor.",
            "Add a pinch of nutmeg to the sauce for a unique twist."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Mac and Cheese with Broccoli";

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
