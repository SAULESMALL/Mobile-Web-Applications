document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegetable Quesadillas
    const recipeDetails = {
        ingredients: [
            "4 large flour tortillas",
            "1 cup shredded cheese (cheddar or mozzarella)",
            "1 bell pepper, thinly sliced",
            "1 cup mushrooms, sliced",
            "1/2 cup corn kernels",
            "1/2 cup black beans, rinsed",
            "1 tbsp olive oil",
            "1/2 tsp chili powder",
            "Salt and pepper to taste",
            "Salsa or sour cream (optional, for serving)"
        ],
        steps: [
            "Step 1: Heat olive oil in a large pan over medium heat.",
            "Step 2: Add bell pepper, mushrooms, corn, and black beans. Sauté until soft.",
            "Step 3: Place one tortilla in a non-stick pan and sprinkle cheese evenly over the tortilla.",
            "Step 4: Add the vegetable mixture on top and cover with another tortilla.",
            "Step 5: Cook each side until golden brown, then cut into wedges and serve."
        ],
        time: "Prep time: 10 minutes, Cook time: 15 minutes", // Cooking time in minutes:seconds format
        tips: [
            "Use a non-stick pan to avoid sticking.",
            "Add a handful of spinach for extra greens.",
            "Serve immediately for the best texture."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegetable Quesadillas";

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
