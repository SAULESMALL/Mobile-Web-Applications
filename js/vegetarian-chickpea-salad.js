document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegetarian Chickpea Salad
    const recipeDetails = {
        ingredients: [
            "1 can (15 oz) chickpeas, drained and rinsed",
            "1 cucumber, diced",
            "1/2 red onion, finely chopped",
            "1 small bell pepper, diced",
            "1/2 cup cherry tomatoes, halved",
            "1/4 cup fresh parsley, chopped",
            "2 tablespoons olive oil",
            "1 tablespoon lemon juice",
            "1 teaspoon dried oregano",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: In a large bowl, combine the chickpeas, cucumber, red onion, bell pepper, and cherry tomatoes.",
            "Step 2: Add parsley, olive oil, lemon juice, oregano, salt, and pepper. Mix everything together.",
            "Step 3: Chill for 30 minutes to let the flavors meld, or serve immediately.",
            "Step 4: Garnish with additional parsley if desired."
        ],
        time: "Prep time: 10 minutes",
        tips: [
            "For extra crunch, sprinkle some nuts or seeds on top.",
            "You can chill the salad for an hour to enhance the flavors.",
            "Add some feta cheese for a more savory taste."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegetarian Chickpea Salad";

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
