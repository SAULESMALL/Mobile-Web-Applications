document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Joyful Salad
    const recipeDetails = {
        ingredients: [
            "2 cups mixed greens",
            "1/2 cup cherry tomatoes, halved",
            "1/2 cucumber, sliced",
            "1/4 red onion, thinly sliced",
            "1/4 cup feta cheese",
            "1/4 cup balsamic vinaigrette"
        ],
        steps: [
            "Step 1: Wash and chop the mixed greens.",
            "Step 2: Halve the cherry tomatoes and slice the cucumber and red onion.",
            "Step 3: Toss all the ingredients together in a large bowl.",
            "Step 4: Drizzle with balsamic vinaigrette and top with feta cheese.",
            "Step 5: Serve immediately and enjoy!"
        ],
        time: "10:00", // Prep time in minutes:seconds format
        tips: [
            "Add grilled chicken or tofu for extra protein.",
            "Use your favorite dressing to customize the flavor.",
            "Top with nuts or seeds for added crunch."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Joyful Salad";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: ${recipeDetails.time}`;

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
        // Navigate to step-by-step page
        window.location.href = '../pages/step-by-step.html';  // Correct path to step-by-step.html
    });
});
