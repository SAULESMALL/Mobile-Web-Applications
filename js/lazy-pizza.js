document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Lazy Pizza
    const recipeDetails = {
        ingredients: [
            "1 ready-made vegan pizza crust",
            "1/2 cup tomato sauce",
            "1/2 cup vegan cheese, shredded",
            "1/4 cup bell peppers, sliced",
            "1/4 cup red onion, thinly sliced",
            "1/4 cup olives, pitted and sliced",
            "1/4 tsp oregano",
            "1/4 tsp garlic powder",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Preheat the oven to 200°C (400°F).",
            "Step 2: Spread the tomato sauce evenly over the pizza crust.",
            "Step 3: Sprinkle the vegan cheese over the sauce.",
            "Step 4: Add bell peppers, red onions, olives, oregano, garlic powder, salt, and pepper as toppings.",
            "Step 5: Bake in the oven for 15 minutes or until the crust is golden and the cheese has melted."
        ],
        time: "Prep time: 10 minutes, Cook time: 15 minutes",
        tips: [
            "Use your favorite vegan cheese for extra flavor.",
            "Top with fresh basil after baking for added flavor.",
            "Experiment with other toppings like mushrooms or spinach."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Lazy Pizza";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = recipeDetails.time;

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

    // Handle the "Start Making" button
    document.getElementById('startCookingBtn').addEventListener('click', () => {
        // Navigate to step-by-step page
        window.location.href = '../pages/step-by-step.html'; // Adjust path to the step-by-step page
    });
});
