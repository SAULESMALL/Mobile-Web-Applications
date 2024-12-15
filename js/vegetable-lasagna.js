document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegetable Lasagna
    const recipeDetails = {
        ingredients: [
            "12 lasagna noodles",
            "1 tablespoon olive oil",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 zucchini, sliced",
            "1 red bell pepper, chopped",
            "1 cup mushrooms, sliced",
            "2 cups spinach, chopped",
            "2 cups ricotta cheese",
            "2 cups shredded mozzarella cheese",
            "1 cup grated Parmesan cheese",
            "2 cups marinara sauce",
            "1 teaspoon dried basil",
            "1 teaspoon dried oregano",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Preheat oven to 375°F (190°C). Cook lasagna noodles according to package instructions, drain, and set aside.",
            "Step 2: Heat olive oil in a pan and sauté onion, garlic, zucchini, bell pepper, and mushrooms until softened.",
            "Step 3: Add spinach and cook until wilted. Stir in marinara sauce, basil, oregano, salt, and pepper. Simmer for 5 minutes.",
            "Step 4: In a baking dish, layer noodles, vegetable sauce, and cheeses. Repeat layers, finishing with cheese on top.",
            "Step 5: Cover with foil and bake for 25 minutes. Remove foil and bake for an additional 10 minutes until cheese is golden brown."
        ],
        time: "Prep time: 15 minutes, Cook time: 40 minutes",
        tips: [
            "For a creamy texture, add a layer of béchamel sauce in between the lasagna layers.",
            "Substitute ricotta cheese with cottage cheese for a lighter option.",
            "Feel free to add more vegetables like eggplant or carrots for extra flavor."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegetable Lasagna";

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

    // Handle the "Start Cooking" button
    document.getElementById('startCookingBtn').addEventListener('click', () => {
        // Navigate to step-by-step page
        window.location.href = '../pages/step-by-step.html';  // Correct path to step-by-step.html
    });
});
