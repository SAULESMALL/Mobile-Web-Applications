document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Pulled Pork Sandwiches
    const recipeDetails = {
        ingredients: [
            "2 lbs pork shoulder",
            "1 cup barbecue sauce",
            "1/2 cup apple cider vinegar",
            "1/4 cup brown sugar",
            "1 tbsp paprika",
            "1 tsp garlic powder",
            "1 tsp onion powder",
            "1/2 tsp cayenne pepper",
            "Salt and pepper to taste",
            "4 buns",
            "Pickles for garnish (optional)"
        ],
        steps: [
            "Step 1: Season the pork shoulder with paprika, garlic powder, onion powder, cayenne pepper, salt, and pepper.",
            "Step 2: Place the pork in a slow cooker with barbecue sauce, apple cider vinegar, and brown sugar.",
            "Step 3: Cook on low for 4-6 hours until the pork is tender.",
            "Step 4: Shred the pork with forks and return to the sauce.",
            "Step 5: Serve on buns with pickles (optional) for garnish."
        ],
        time: "4-6 hours", // Cooking time in hours
        tips: [
            "Use a slow cooker for easier preparation and tender meat.",
            "Shred the pork with forks after cooking for the best texture.",
            "For extra flavor, marinate the pork shoulder overnight in the sauce ingredients."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Pulled Pork Sandwiches";

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
