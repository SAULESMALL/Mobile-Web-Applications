document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegan Burger
    const recipeDetails = {
        ingredients: [
            "1 can black beans, drained and rinsed",
            "1/2 cup breadcrumbs (vegan)",
            "1/4 cup grated carrots",
            "1/4 cup chopped onion",
            "2 cloves garlic, minced",
            "1 tsp smoked paprika",
            "1 tsp ground cumin",
            "2 tbsp olive oil",
            "Salt and pepper to taste",
            "4 burger buns (vegan)",
            "Optional toppings: lettuce, tomato, vegan mayo"
        ],
        steps: [
            "Step 1: Mash the black beans with a fork or potato masher until well mashed.",
            "Step 2: Add the breadcrumbs, grated carrots, chopped onion, minced garlic, smoked paprika, ground cumin, olive oil, salt, and pepper to the mashed beans.",
            "Step 3: Form the mixture into 4 patties and refrigerate for 10 minutes to help them hold their shape.",
            "Step 4: Heat a pan with olive oil over medium heat and cook the patties for 4-5 minutes per side until golden and crispy.",
            "Step 5: Serve on vegan buns with your favorite toppings, such as lettuce, tomato, and vegan mayo."
        ],
        time: "Prep time: 10 minutes, Cook time: 20 minutes",
        tips: [
            "Mash the beans with a fork or potato masher for the perfect texture.",
            "Chill the patties for 10 minutes before cooking to help them hold their shape.",
            "Serve with your favorite vegan sauces for extra flavor."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegan Burger";

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
        window.location.href = '../pages/step-by-step.html';  // Adjust the path if necessary
    });
});
