document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Quesadilla
    const recipeDetails = {
        ingredients: [
            "2 flour tortillas",
            "1 cup shredded cheddar cheese",
            "1/2 cup black beans, drained and rinsed",
            "1/4 cup bell pepper, diced",
            "1/4 cup onion, diced",
            "1/4 cup corn kernels",
            "1 tbsp olive oil",
            "1 tsp cumin",
            "Salt and pepper to taste",
            "Sour cream and salsa for serving"
        ],
        steps: [
            "Step 1: Heat olive oil in a pan over medium heat.",
            "Step 2: Add bell pepper, onion, and corn. Cook for 2-3 minutes.",
            "Step 3: Place a tortilla in the pan, sprinkle with cheese, black beans, and the cooked vegetables.",
            "Step 4: Place the second tortilla on top and cook until golden brown on both sides.",
            "Step 5: Remove from heat, cut into wedges, and serve with sour cream and salsa."
        ],
        time: "10:00", // Cooking time in minutes:seconds format
        tips: [
            "Use a non-stick skillet for easy flipping.",
            "Add guacamole for extra flavor.",
            "If you want a spicier kick, add jalapeños or hot sauce."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Quesadilla";

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
