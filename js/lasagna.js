document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Lasagna
    const recipeDetails = {
        ingredients: [
            "1 lb ground beef",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 (24 oz) jar marinara sauce",
            "1 (15 oz) container ricotta cheese",
            "1 (16 oz) package lasagna noodles",
            "1 egg",
            "3 cups shredded mozzarella cheese",
            "1/2 cup grated parmesan cheese",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Preheat the oven to 375°F (190°C).",
            "Step 2: Cook lasagna noodles according to the package instructions. Drain and set aside.",
            "Step 3: In a skillet, brown ground beef with chopped onion and minced garlic. Drain excess fat.",
            "Step 4: Stir in marinara sauce and simmer for 5 minutes.",
            "Step 5: In a bowl, mix ricotta cheese, egg, and half of the mozzarella cheese.",
            "Step 6: Layer a baking dish with meat sauce, noodles, ricotta mixture, and repeat. Top with remaining mozzarella and Parmesan cheese.",
            "Step 7: Cover with foil and bake for 40 minutes. Remove foil and bake for another 10-15 minutes until cheese is golden and bubbly.",
            "Step 8: Let the lasagna rest for 10 minutes before slicing and serving."
        ],
        time: "Prep time: 20 minutes, Cook time: 1 hour",
        tips: [
            "Use lean ground beef for a healthier option.",
            "Let the lasagna rest for 10-15 minutes before slicing to improve the texture.",
            "Add extra veggies like spinach or mushrooms for more flavor and nutrition."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Lasagna";

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
        window.location.href = '../pages/step-by-step.html'; // Adjust the path as needed
    });
});
