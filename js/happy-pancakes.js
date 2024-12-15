document.addEventListener('DOMContentLoaded', () => {
    const recipeDetails = {
        ingredients: [
            "1 cup flour",
            "1 tablespoon sugar",
            "1 teaspoon baking powder",
            "1/2 cup milk",
            "1 egg",
            "1 tablespoon butter"
        ],
        steps: [
            "Step 1: Mix all the dry ingredients in a bowl.",
            "Step 2: Add the milk, egg, and melted butter. Stir until combined.",
            "Step 3: Heat a non-stick pan over medium heat.",
            "Step 4: Pour 1/4 cup of batter onto the pan for each pancake.",
            "Step 5: Cook until bubbles form on the surface, then flip. Cook until golden brown."
        ],
        time: "15:00", // Cooking time
        tips: [
            "For fluffier pancakes, add an extra egg.",
            "Make sure your pan is hot before cooking the pancakes.",
            "Top with your favorite fruits for added flavor."
        ]
    };

    // Populate the HTML with ingredients and tips
    document.getElementById('recipeName').textContent = "Happy Pancakes";

    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    document.getElementById('recipeTime').textContent = `Prep time: 10 minutes, Cook time: ${recipeDetails.time}`;

    const tipsList = document.getElementById('tipsList');
    recipeDetails.tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });

    // Save steps and time in localStorage
    localStorage.setItem('recipeSteps', JSON.stringify(recipeDetails.steps));
    localStorage.setItem('recipeTime', recipeDetails.time);

    document.getElementById('startCookingBtn').addEventListener('click', () => {
        window.location.href = '../pages/step-by-step.html';
    });
});
