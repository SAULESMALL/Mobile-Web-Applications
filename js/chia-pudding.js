document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Chia Pudding
    const recipeDetails = {
        ingredients: [
            "3 tbsp chia seeds",
            "1 cup almond milk (or any non-dairy milk)",
            "1 tbsp maple syrup (or sweetener of choice)",
            "1/2 tsp vanilla extract",
            "Fresh fruits for topping (berries, banana, etc.)",
            "Pinch of salt"
        ],
        steps: [
            "Step 1: Combine chia seeds, almond milk, maple syrup, vanilla extract, and salt in a bowl.",
            "Step 2: Stir the mixture well and refrigerate for at least 4 hours or overnight.",
            "Step 3: After the pudding has thickened, top with fresh fruits and enjoy!"
        ],
        time: "Prep time: 5 minutes, Chill time: 4 hours (or overnight)",
        tips: [
            "Make the pudding the night before and let it chill overnight for best results.",
            "Top with your favorite fruits or a sprinkle of nuts for added texture.",
            "If the pudding is too thick, add more milk to adjust the consistency."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Chia Pudding";

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
        // Navigate to step-by-step page
        window.location.href = '../pages/step-by-step.html';  // Correct path to 'step-by-step.html'
    });
});
