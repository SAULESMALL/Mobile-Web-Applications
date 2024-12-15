document.addEventListener('DOMContentLoaded', () => {
    const recipeDetails = {
        ingredients: [
            "2 large flour tortillas (ensure they are vegan-friendly)",
            "1 cup vegan cheese, shredded",
            "1/2 cup black beans, drained and rinsed",
            "1/4 cup corn kernels (frozen or fresh)",
            "1/4 cup bell pepper, diced",
            "1/4 cup onion, diced",
            "1 tbsp olive oil",
            "1 tsp cumin",
            "1 tsp chili powder",
            "Salt and pepper to taste",
            "Guacamole or salsa for dipping"
        ],
        steps: [
            "Step 1: Heat olive oil in a pan over medium heat and sauté the onion, bell pepper, corn, and black beans for 2 minutes.",
            "Step 2: Add cumin, chili powder, salt, and pepper to the mixture. Cook for another minute.",
            "Step 3: Lay one tortilla flat in a non-stick pan. Spread the cooked mixture and sprinkle vegan cheese evenly.",
            "Step 4: Place the second tortilla on top and press lightly. Cook until golden brown, then flip and repeat.",
            "Step 5: Cut into quarters and serve with guacamole or salsa."
        ],
        time: "Prep time: 5 minutes, Cook time: 5 minutes",
        tips: [
            "Use gluten-free tortillas if necessary for a gluten-free option.",
            "For extra flavor, add a squeeze of lime juice after cooking.",
            "For crispy quesadillas, brush the tortillas with olive oil before cooking."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Lazy Quesadillas";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: 5 minutes, Cook time: 5 minutes`;

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

    // Handle the "Start Making" button
    document.getElementById('startCookingBtn').addEventListener('click', () => {
        // Navigate to the step-by-step page
        window.location.href = '../pages/step-by-step.html'; // Adjust the path if necessary
    });
});
