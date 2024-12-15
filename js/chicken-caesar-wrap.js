document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Chicken Caesar Wrap
    const recipeDetails = {
        ingredients: [
            "1 large flour tortilla",
            "1 cooked chicken breast (sliced)",
            "1/2 cup Caesar dressing",
            "1/2 cup romaine lettuce (chopped)",
            "1/4 cup grated Parmesan cheese",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Warm the tortilla slightly in a pan or microwave.",
            "Step 2: Slice the cooked chicken breast into strips.",
            "Step 3: In a bowl, toss the chicken with Caesar dressing and romaine lettuce.",
            "Step 4: Place the chicken mixture in the center of the tortilla.",
            "Step 5: Sprinkle with Parmesan cheese, season with salt and pepper, then roll the tortilla to close.",
            "Step 6: Slice the wrap into halves and serve."
        ],
        time: "5:00", // Cooking time in minutes:seconds format
        tips: [
            "Use grilled chicken for extra flavor.",
            "Warm the tortilla slightly to make it easier to roll.",
            "For a lighter version, use low-fat Caesar dressing."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Chicken Caesar Wrap";

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
        window.location.href = '../pages/step-by-step.html'; // Correct path to 'step-by-step.html'
    });
});
