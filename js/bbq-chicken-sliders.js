document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for BBQ Chicken Sliders
    const recipeDetails = {
        ingredients: [
            "2 lbs boneless, skinless chicken breasts",
            "1 cup BBQ sauce",
            "8 slider buns",
            "1/2 cup coleslaw (optional)",
            "1/4 cup pickled red onions (optional)",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Cook the chicken breasts by boiling or grilling until fully cooked.",
            "Step 2: Shred the chicken with forks and mix with BBQ sauce.",
            "Step 3: Toast the slider buns lightly on a grill or skillet.",
            "Step 4: Assemble the sliders by placing the BBQ chicken on the buns.",
            "Step 5: Optionally top with coleslaw, pickled red onions, or fresh lettuce."
        ],
        time: "25:00", // Cooking time in minutes:seconds format
        tips: [
            "Shred the chicken with forks after cooking for easy assembly.",
            "Use your favorite BBQ sauce for a personalized flavor.",
            "If you want extra crunch, top the sliders with some fresh lettuce."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "BBQ Chicken Sliders";

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
        // Navigate to step-by-step page
        window.location.href = '../pages/step-by-step.html';  // Correct path to 'step-by-step.html'
    });
});
