document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegetarian Lasagna
    const recipeDetails = {
        ingredients: [
            "9 lasagna noodles",
            "2 cups ricotta cheese",
            "3 cups shredded mozzarella cheese",
            "1 cup grated Parmesan cheese",
            "1 jar marinara sauce (about 24 oz)",
            "2 cups chopped spinach",
            "1 cup chopped zucchini",
            "1 cup chopped mushrooms",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 tablespoon olive oil",
            "1/4 teaspoon dried oregano",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Preheat the oven to 375°F (190°C).",
            "Step 2: Cook the lasagna noodles according to package instructions, then drain and set aside.",
            "Step 3: Heat olive oil in a pan and sauté the onion, garlic, zucchini, and mushrooms until tender.",
            "Step 4: Add the spinach and marinara sauce to the pan. Season with oregano, salt, and pepper.",
            "Step 5: In a baking dish, layer noodles, sauce mixture, ricotta cheese, and shredded mozzarella cheese. Repeat layers.",
            "Step 6: Top with Parmesan cheese and bake for 45-50 minutes, or until bubbly and golden brown.",
            "Step 7: Let rest for 10-15 minutes before serving."
        ],
        time: "Prep time: 20 minutes, Cook time: 1 hour",
        tips: [
            "To make it extra creamy, use a mixture of ricotta and cream cheese.",
            "For a gluten-free version, use gluten-free lasagna noodles.",
            "Let the lasagna rest for 10-15 minutes before serving for cleaner slices."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegetarian Lasagna";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: 20 minutes, Cook time: 1 hour`;

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
