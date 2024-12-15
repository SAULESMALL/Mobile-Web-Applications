document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Cheeseburger
    const recipeDetails = {
        ingredients: [
            "1 lb ground beef",
            "4 hamburger buns",
            "4 slices of cheddar cheese",
            "1 small onion, sliced",
            "1 tomato, sliced",
            "1/4 cup lettuce, shredded",
            "Salt and pepper to taste",
            "Ketchup, mustard, or other condiments (optional)"
        ],
        steps: [
            "Step 1: Shape the ground beef into 4 equal patties.",
            "Step 2: Season with salt and pepper on both sides.",
            "Step 3: Grill or pan-fry the patties over medium heat for 4-5 minutes on each side.",
            "Step 4: During the last minute of cooking, place a slice of cheddar cheese on each patty to melt.",
            "Step 5: Toast the hamburger buns until golden brown.",
            "Step 6: Assemble the burger with lettuce, tomato, onion, and any other desired condiments."
        ],
        time: "15:00", // Cooking time in minutes:seconds format
        tips: [
            "Use a grill or skillet to cook the patties to your preferred doneness.",
            "Toast the buns for extra crunch and flavor.",
            "Add extra toppings like pickles, bacon, or avocado for more variety."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Cheeseburger";

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
        // Navigate to step-by-step page
        window.location.href = '../pages/step-by-step.html'; // Correct path to 'step-by-step.html'
    });
});
