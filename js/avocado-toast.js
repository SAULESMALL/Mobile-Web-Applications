document.addEventListener('DOMContentLoaded', () => {
    const recipeDetails = {
        ingredients: [
            "2 slices whole grain bread (gluten-free if preferred)",
            "1 ripe avocado",
            "1 tablespoon lemon juice",
            "Salt and pepper to taste",
            "Red pepper flakes (optional)",
            "Fresh cilantro (optional)"
        ],
        steps: [
            "Step 1: Toast the slices of bread to your preferred crispiness.",
            "Step 2: Mash the avocado in a bowl, then add lemon juice, salt, and pepper.",
            "Step 3: Spread the mashed avocado evenly on the toasted bread.",
            "Step 4: Sprinkle with red pepper flakes and fresh cilantro, if desired."
        ],
        time: "10:00", // Total time in minutes:seconds format
        tips: [
            "For a crispier toast, use a toaster oven or grill the bread on a pan.",
            "Top with any additional toppings like tomato slices or a drizzle of olive oil for extra flavor.",
            "To prevent the avocado from browning, store any leftover mashed avocado in an airtight container with a bit of lemon juice."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Avocado Toast";

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
