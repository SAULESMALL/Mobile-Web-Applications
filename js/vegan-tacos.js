document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegan Tacos
    const recipeDetails = {
        ingredients: [
            "1 cup cooked black beans",
            "1 cup diced tomatoes",
            "1 cup diced avocado",
            "1/2 cup diced onions",
            "1/2 cup chopped cilantro",
            "1 teaspoon ground cumin",
            "1/2 teaspoon smoked paprika",
            "1 tablespoon olive oil",
            "4 small corn tortillas",
            "Salt and pepper to taste",
            "Lime wedges for serving"
        ],
        steps: [
            "Step 1: Warm tortillas in a dry skillet until soft and flexible.",
            "Step 2: In a separate pan, heat olive oil over medium heat and sauté the onions and garlic until fragrant.",
            "Step 3: Add black beans, cumin, smoked paprika, salt, and pepper to the pan. Cook for 5-7 minutes.",
            "Step 4: Assemble tacos by layering the bean mixture, tomatoes, avocado, and cilantro onto the tortillas.",
            "Step 5: Serve with lime wedges on the side and drizzle with vegan sour cream or hot sauce if desired."
        ],
        time: "15:00", // Cooking time in minutes:seconds format
        tips: [
            "Warm tortillas in a dry skillet for better flavor and flexibility.",
            "Add a drizzle of vegan sour cream or hot sauce for extra flavor.",
            "Mix and match toppings to suit your taste preferences."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegan Tacos";

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
