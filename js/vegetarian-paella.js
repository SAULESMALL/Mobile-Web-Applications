document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegetarian Paella
    const recipeDetails = {
        ingredients: [
            "1 cup short-grain rice (such as Arborio or Bomba)",
            "2 tablespoons olive oil",
            "1 onion, diced",
            "1 bell pepper, chopped",
            "2 cloves garlic, minced",
            "1 cup tomatoes, chopped",
            "1 cup green beans, chopped",
            "1/2 cup peas",
            "1/2 teaspoon paprika",
            "1/2 teaspoon saffron threads",
            "1/4 teaspoon turmeric (for color)",
            "4 cups vegetable broth",
            "Salt and pepper to taste",
            "Fresh parsley for garnish",
            "1 lemon, cut into wedges"
        ],
        steps: [
            "Step 1: Heat olive oil in a wide, shallow pan and sauté onion, garlic, and bell pepper until softened.",
            "Step 2: Add the rice, tomatoes, paprika, saffron, turmeric, and vegetable broth.",
            "Step 3: Bring to a simmer, then reduce heat and cover, cooking for 20 minutes.",
            "Step 4: Add peas, green beans, salt, and pepper, and continue cooking until the rice is tender and the liquid is absorbed.",
            "Step 5: Remove from heat, cover, and let rest for 5 minutes. Garnish with fresh parsley and lemon wedges."
        ],
        time: "15:00", // Cooking time in minutes:seconds format
        tips: [
            "Make sure to use a wide, shallow pan for even cooking and a crispy bottom layer.",
            "Don’t stir the rice once you’ve added the broth to achieve the signature crispy layer at the bottom (socarrat).",
            "If you prefer a spicier dish, you can add a pinch of cayenne pepper or chili flakes."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegetarian Paella";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: 15 minutes, Cook time: ${recipeDetails.time}`;

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
