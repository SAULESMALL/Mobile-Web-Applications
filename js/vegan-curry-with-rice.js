document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegan Curry with Rice
    const recipeDetails = {
        ingredients: [
            "1 tablespoon coconut oil",
            "1 medium onion, diced",
            "2 cloves garlic, minced",
            "1 tablespoon grated ginger",
            "1 can (14 oz) coconut milk",
            "1 cup vegetable broth",
            "1 cup diced carrots",
            "1 cup diced sweet potatoes",
            "1 can (15 oz) chickpeas, drained and rinsed",
            "2 tablespoons curry powder",
            "1 teaspoon ground turmeric",
            "1 teaspoon cumin",
            "1/2 teaspoon cayenne pepper (optional)",
            "1 tablespoon soy sauce",
            "Salt and pepper to taste",
            "1 cup rice (white or brown)",
            "Fresh cilantro for garnish",
            "1 tablespoon lime juice"
        ],
        steps: [
            "Step 1: Heat coconut oil in a large pan over medium heat and sauté onion, garlic, and ginger until fragrant.",
            "Step 2: Add carrots and sweet potatoes. Stir and cook for 5 minutes.",
            "Step 3: Add coconut milk, vegetable broth, chickpeas, and spices. Stir to combine.",
            "Step 4: Bring to a simmer and cook for 20-25 minutes until the vegetables are tender.",
            "Step 5: While the curry simmers, cook the rice according to package instructions.",
            "Step 6: Serve curry over rice, topped with fresh cilantro and a squeeze of lime juice."
        ],
        time: "Prep time: 20 minutes, Cook time: 40 minutes",
        tips: [
            "Serve with steamed rice or quinoa for added texture.",
            "Adjust the spice level by adding more cayenne or chili flakes.",
            "Let the curry simmer for longer to allow the flavors to meld together."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegan Curry with Rice";

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
        // Navigate to step-by-step page in the 'pages' folder
        window.location.href = '../pages/step-by-step.html'; // Correct path to 'step-by-step.html'
    });
});
