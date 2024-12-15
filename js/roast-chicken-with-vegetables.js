document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Roast Chicken with Vegetables
    const recipeDetails = {
        ingredients: [
            "1 whole chicken (about 4 lbs)",
            "4 large carrots, peeled and cut into chunks",
            "2 large potatoes, peeled and cut into chunks",
            "1 large onion, quartered",
            "1 head of garlic, halved",
            "2 tbsp olive oil",
            "1 tsp dried thyme",
            "1 tsp dried rosemary",
            "Salt and pepper to taste",
            "1 lemon, halved"
        ],
        steps: [
            "Step 1: Preheat your oven to 425°F (220°C).",
            "Step 2: Rub the chicken with olive oil, thyme, rosemary, salt, and pepper.",
            "Step 3: Arrange the carrots, potatoes, onion, and garlic around the chicken on a roasting pan.",
            "Step 4: Roast the chicken for about 1 hour and 30 minutes, or until the internal temperature reaches 165°F (74°C).",
            "Step 5: Let the chicken rest for 10 minutes before carving.",
            "Step 6: Serve the chicken with roasted vegetables."
        ],
        time: "15:00", // Prep time in minutes:seconds format
        tips: [
            "Make sure the chicken is dry before roasting for crispy skin.",
            "Let the chicken rest for 10 minutes before carving to retain juices.",
            "Use any leftover vegetables for a delicious broth the next day."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Roast Chicken with Vegetables";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: 15 minutes, Cook time: ${recipeDetails.time}`;

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
