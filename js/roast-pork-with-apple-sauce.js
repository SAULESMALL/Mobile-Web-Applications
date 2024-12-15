document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Roast Pork with Apple Sauce
    const recipeDetails = {
        ingredients: [
            "3 lbs pork loin roast",
            "2 tbsp olive oil",
            "1 tsp salt",
            "1/2 tsp pepper",
            "1/2 tsp garlic powder",
            "1/2 tsp thyme",
            "1/2 cup apple cider",
            "2 medium apples, peeled and sliced",
            "1/4 cup brown sugar",
            "1 tbsp lemon juice"
        ],
        steps: [
            "Step 1: Preheat the oven to 375°F (190°C).",
            "Step 2: Rub the pork loin with olive oil, salt, pepper, garlic powder, and thyme.",
            "Step 3: Place the pork in a roasting pan and roast for 1.5 hours or until the internal temperature reaches 145°F (63°C).",
            "Step 4: While the pork is roasting, make the apple sauce by combining apples, apple cider, brown sugar, and lemon juice in a pan.",
            "Step 5: Simmer the sauce for 20 minutes until the apples are soft, then blend until smooth.",
            "Step 6: Let the pork rest for 10 minutes before slicing, and serve with the apple sauce."
        ],
        time: "20:00", // Cooking time in minutes:seconds format
        tips: [
            "Let the pork rest for 10 minutes before slicing for better juiciness.",
            "For a sweeter sauce, add more brown sugar to the apple sauce.",
            "Serve with roasted vegetables for a complete meal."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Roast Pork with Apple Sauce";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: 20 minutes, Cook time: ${recipeDetails.time}`;

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
