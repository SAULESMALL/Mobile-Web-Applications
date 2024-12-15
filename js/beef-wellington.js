document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Beef Wellington
    const recipeDetails = {
        ingredients: [
            "1 1/2 lbs beef tenderloin (center-cut)",
            "2 tbsp olive oil",
            "1/2 lb mushrooms, finely chopped",
            "1/2 cup pate or foie gras (optional)",
            "1 sheet puff pastry",
            "1 egg (for egg wash)",
            "Salt and pepper to taste",
            "2 tbsp Dijon mustard",
            "1/2 cup prosciutto slices"
        ],
        steps: [
            "Step 1: Preheat your oven to 400°F (200°C).",
            "Step 2: Sear the beef tenderloin in olive oil until browned on all sides.",
            "Step 3: Brush the beef with Dijon mustard and let it cool.",
            "Step 4: Sauté the chopped mushrooms until moisture evaporates, then set aside to cool.",
            "Step 5: Lay out the prosciutto slices on parchment paper, spread the mushroom mixture on top, and wrap the beef tenderloin.",
            "Step 6: Wrap the beef in puff pastry and brush with egg wash.",
            "Step 7: Bake the Beef Wellington for 40-45 minutes, until the pastry is golden brown.",
            "Step 8: Let the Beef Wellington rest for 10 minutes before slicing."
        ],
        time: "Prep time: 30 minutes, Cook time: 45 minutes",
        tips: [
            "Sear the beef tenderloin first for a beautiful crust.",
            "Ensure the puff pastry is chilled before wrapping to prevent sogginess.",
            "Let the Beef Wellington rest for 10 minutes after baking for easier slicing."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Beef Wellington";

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
        window.location.href = '../pages/step-by-step.html';  // Correct path to 'step-by-step.html'
    });
});
