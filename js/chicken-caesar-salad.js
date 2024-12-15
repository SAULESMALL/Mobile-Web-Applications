document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Chicken Caesar Salad
    const recipeDetails = {
        ingredients: [
            "2 chicken breasts, grilled and sliced",
            "4 cups romaine lettuce, chopped",
            "1/4 cup Caesar dressing",
            "1/4 cup grated parmesan cheese",
            "1/2 cup croutons",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Grill the chicken breasts to your preferred level of doneness.",
            "Step 2: Slice the chicken breasts into thin strips.",
            "Step 3: Toss the chopped romaine lettuce with Caesar dressing.",
            "Step 4: Add the grilled chicken, parmesan cheese, and croutons to the salad.",
            "Step 5: Season with salt and pepper to taste and serve."
        ],
        time: "10:00", // Cooking time in minutes:seconds format
        tips: [
            "Grill the chicken to your preferred level of doneness.",
            "For a lighter version, use a yogurt-based Caesar dressing.",
            "Add extra toppings like avocado or bacon for more flavor."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Chicken Caesar Salad";

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
