document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Beef and Potato Stew
    const recipeDetails = {
        ingredients: [
            "1 lb beef stew meat, cut into cubes",
            "4 medium potatoes, peeled and cubed",
            "1 large onion, chopped",
            "2 cloves garlic, minced",
            "3 cups beef broth",
            "1 cup carrots, sliced",
            "2 tbsp olive oil",
            "1 tsp thyme",
            "Salt and pepper to taste",
            "1/4 cup gluten-free flour (for thickening)"
        ],
        steps: [
            "Step 1: Brown the beef in batches in olive oil until all sides are seared.",
            "Step 2: Add the onion and garlic to the pot, sauté until softened.",
            "Step 3: Stir in the carrots, potatoes, beef broth, thyme, salt, and pepper.",
            "Step 4: Bring to a boil, then reduce heat to a simmer. Cover and cook for 1.5 hours.",
            "Step 5: Stir in gluten-free flour to thicken the stew, and cook for an additional 10 minutes.",
            "Step 6: Let the stew sit for 10 minutes before serving for better consistency."
        ],
        time: "1.5 hours", // Cooking time
        tips: [
            "Brown the beef in batches to ensure even cooking.",
            "For extra flavor, add a bay leaf while simmering.",
            "Let the stew sit for 10 minutes before serving for better consistency."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Beef and Potato Stew";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: 15 minutes, Cook time: ${recipeDetails.time}`;

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
