document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Lazy Nachos
    const recipeDetails = {
        ingredients: [
            "1 bag of tortilla chips",
            "1 cup shredded cheddar cheese",
            "1/2 cup black beans (canned, rinsed)",
            "1/2 cup salsa",
            "1/4 cup sliced jalapeños (optional)",
            "1/4 cup sour cream",
            "1/4 cup chopped cilantro (optional)"
        ],
        steps: [
            "Step 1: Preheat your oven to 200°C (400°F).",
            "Step 2: Spread a layer of tortilla chips on a baking tray.",
            "Step 3: Sprinkle shredded cheese and black beans evenly over the chips.",
            "Step 4: Bake in the oven for 5-7 minutes, or until the cheese is melted.",
            "Step 5: Top with salsa, jalapeños, sour cream, and cilantro. Serve immediately."
        ],
        time: "10:00", // Cooking time in minutes:seconds format
        tips: [
            "Use a mix of cheeses for extra flavor.",
            "Add cooked chicken or ground beef for a heartier dish.",
            "Serve with guacamole on the side for dipping."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Lazy Nachos";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: 5 minutes, Cook time: ${recipeDetails.time}`;

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
        window.location.href = '../pages/step-by-step.html'; // Adjust path as necessary
    });
});
