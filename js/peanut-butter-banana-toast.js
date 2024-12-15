document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Peanut Butter Banana Toast
    const recipeDetails = {
        ingredients: [
            "2 slices whole-grain or gluten-free bread",
            "2 tablespoons peanut butter",
            "1 ripe banana (sliced)",
            "1 tablespoon honey (optional)",
            "A sprinkle of cinnamon (optional)"
        ],
        steps: [
            "Step 1: Toast the bread to your desired level of crispiness.",
            "Step 2: Spread peanut butter on the toasted bread.",
            "Step 3: Arrange the banana slices on top of the peanut butter.",
            "Step 4: Drizzle with honey (optional) and sprinkle cinnamon (optional).",
            "Step 5: Serve and enjoy!"
        ],
        time: "5:00", // Cooking time in minutes:seconds format
        tips: [
            "Try using almond butter as an alternative to peanut butter.",
            "For extra crunch, top with chia seeds or granola.",
            "If you prefer, toast the bread for extra crispiness before adding the toppings."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Peanut Butter Banana Toast";

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
