document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Beef and Broccoli Stir-Fry
    const recipeDetails = {
        ingredients: [
            "1 lb beef sirloin, thinly sliced",
            "2 cups broccoli florets",
            "2 tbsp gluten-free soy sauce",
            "1 tbsp sesame oil",
            "2 cloves garlic, minced",
            "1 tsp ginger, grated",
            "1 tbsp cornstarch (or gluten-free thickener)",
            "1/4 cup water",
            "Salt and pepper to taste",
            "1 tbsp sesame seeds (optional, for garnish)"
        ],
        steps: [
            "Step 1: Heat sesame oil in a pan over medium heat and sauté garlic and ginger until fragrant.",
            "Step 2: Add the beef slices and cook until browned, about 4-5 minutes.",
            "Step 3: Mix the soy sauce, cornstarch, and water in a bowl, then add it to the pan.",
            "Step 4: Stir the beef until the sauce thickens, about 2 minutes.",
            "Step 5: Add the broccoli florets and cook until tender but crisp, about 3-4 minutes.",
            "Step 6: Garnish with sesame seeds and serve."
        ],
        time: "10:00", // Cooking time in minutes:seconds format
        tips: [
            "Slice the beef thinly to ensure quick and even cooking.",
            "Blanch the broccoli briefly before stir-frying for a vibrant color.",
            "Garnish with sesame seeds or green onions for added flavor."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Beef and Broccoli Stir-Fry";

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
