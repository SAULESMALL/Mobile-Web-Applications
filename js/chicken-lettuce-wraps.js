document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Chicken Lettuce Wraps
    const recipeDetails = {
        ingredients: [
            "1 pound ground chicken",
            "1 tablespoon olive oil",
            "1/2 cup diced onions",
            "1/2 cup diced water chestnuts",
            "1/4 cup hoisin sauce",
            "2 tablespoons soy sauce",
            "1 tablespoon rice vinegar",
            "1 teaspoon sesame oil",
            "1 head butter lettuce",
            "Green onions and sesame seeds (optional, for garnish)"
        ],
        time: "Prep time: 10 minutes, Cook time: 15 minutes",
        tips: [
            "For extra flavor, marinate the chicken with soy sauce and sesame oil beforehand.",
            "Use iceberg lettuce if butter lettuce is unavailable.",
            "Add chili sauce for a spicy kick."
        ],
        steps: [
            "Step 1: Heat olive oil in a skillet over medium heat.",
            "Step 2: Add ground chicken and cook until browned, breaking it apart with a spatula.",
            "Step 3: Add diced onions and cook for 2-3 minutes until softened.",
            "Step 4: Stir in diced water chestnuts, hoisin sauce, soy sauce, rice vinegar, and sesame oil.",
            "Step 5: Cook for an additional 2 minutes, stirring to combine flavors.",
            "Step 6: Spoon the mixture into individual butter lettuce leaves.",
            "Step 7: Garnish with green onions and sesame seeds, if desired.",
            "Step 8: Serve immediately and enjoy!"
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Chicken Lettuce Wraps";

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
