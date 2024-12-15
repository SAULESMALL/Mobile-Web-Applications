document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Stuffed Chicken Breast
    const recipeDetails = {
        ingredients: [
            "4 boneless, skinless chicken breasts",
            "1 cup cream cheese, softened",
            "1/2 cup spinach, chopped",
            "1/4 cup sun-dried tomatoes, chopped",
            "1/2 cup mozzarella cheese, shredded",
            "2 cloves garlic, minced",
            "1 teaspoon Italian seasoning",
            "Salt and pepper to taste",
            "Olive oil for searing"
        ],
        steps: [
            "Step 1: Preheat oven to 375°F (190°C).",
            "Step 2: In a bowl, mix the cream cheese, spinach, sun-dried tomatoes, mozzarella, garlic, and Italian seasoning.",
            "Step 3: Cut a pocket into each chicken breast and stuff with the cream cheese mixture.",
            "Step 4: Season the chicken with salt and pepper, and sear in a hot pan with olive oil until golden brown on both sides.",
            "Step 5: Transfer the chicken to the oven and bake for 20 minutes or until fully cooked."
        ],
        time: "Prep time: 15 minutes, Cook time: 30 minutes",
        tips: [
            "Ensure the chicken breasts are pounded thin for even cooking.",
            "If the filling is too thick, add a little more cream cheese to loosen it up.",
            "For extra flavor, sear the chicken breasts in a hot pan before baking for a golden crust."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Stuffed Chicken Breast";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: 15 minutes, Cook time: 30 minutes`;

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
