document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Beef Tacos
    const recipeDetails = {
        ingredients: [
            "1 lb ground beef",
            "1 packet taco seasoning",
            "12 small taco shells",
            "1 cup shredded lettuce",
            "1/2 cup diced tomatoes",
            "1/2 cup shredded cheddar cheese",
            "1/4 cup sour cream",
            "1 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Heat olive oil in a pan and cook the ground beef until browned.",
            "Step 2: Drain any excess fat and add taco seasoning to the beef. Stir well.",
            "Step 3: Simmer the beef mixture for 5 minutes to allow the flavors to meld.",
            "Step 4: Warm taco shells in the oven according to the package instructions.",
            "Step 5: Fill taco shells with seasoned beef and top with lettuce, tomatoes, cheddar cheese, and sour cream."
        ],
        time: "15:00", // Cooking time in minutes:seconds format
        tips: [
            "Use lean ground beef for a healthier option.",
            "Add hot sauce for extra flavor if desired.",
            "Serve with a side of guacamole for a complete meal."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Beef Tacos";

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
