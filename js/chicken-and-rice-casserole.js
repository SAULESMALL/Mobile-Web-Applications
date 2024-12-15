document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Chicken and Rice Casserole
    const recipeDetails = {
        ingredients: [
            "2 cups cooked chicken, shredded",
            "1 cup long-grain white rice (uncooked)",
            "1 cup chicken broth",
            "1 cup milk",
            "1 cup shredded cheddar cheese",
            "1/2 cup chopped onions",
            "1/2 cup frozen peas",
            "1 tablespoon olive oil",
            "Salt and pepper to taste",
            "1/2 teaspoon garlic powder",
            "1/2 teaspoon dried thyme"
        ],
        steps: [
            "Step 1: Preheat the oven to 350°F (175°C).",
            "Step 2: In a large bowl, combine cooked chicken, rice, chicken broth, milk, cheese, onions, peas, olive oil, and spices.",
            "Step 3: Transfer the mixture into a greased 9x13-inch casserole dish.",
            "Step 4: Cover with foil and bake for 30 minutes.",
            "Step 5: Remove foil and bake for another 15 minutes until the casserole is golden and bubbly."
        ],
        time: "Prep time: 15 minutes, Cook time: 45 minutes",
        tips: [
            "For a creamier casserole, add extra cheese or a dash of heavy cream.",
            "You can use pre-cooked chicken to save time.",
            "Try adding some breadcrumbs on top for a crunchy topping (ensure they are gluten-free if needed)."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Chicken and Rice Casserole";

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
