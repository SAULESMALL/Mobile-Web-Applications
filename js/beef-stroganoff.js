document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Beef Stroganoff
    const recipeDetails = {
        ingredients: [
            "1 lb beef sirloin, cut into strips",
            "2 tablespoons olive oil",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "8 oz mushrooms, sliced",
            "1 cup beef broth",
            "1 tablespoon Worcestershire sauce",
            "1 teaspoon Dijon mustard",
            "1 cup sour cream",
            "Salt and pepper to taste",
            "1 tablespoon fresh parsley, chopped (optional)",
            "8 oz egg noodles or pasta of your choice"
        ],
        steps: [
            "Step 1: Heat olive oil in a large skillet over medium-high heat. Add beef strips and cook until browned.",
            "Step 2: Remove the beef and set aside. In the same skillet, sauté onions and garlic until fragrant.",
            "Step 3: Add the mushrooms and cook until soft. Then add the beef broth, Worcestershire sauce, and Dijon mustard. Bring to a simmer.",
            "Step 4: Stir in the sour cream and return the beef to the pan. Cook for another 5 minutes.",
            "Step 5: Season with salt and pepper to taste. Serve over cooked egg noodles and garnish with parsley."
        ],
        time: "10:00", // Cooking time in minutes:seconds format
        tips: [
            "For a richer sauce, add a splash of white wine to the broth mixture.",
            "If you don't have beef broth, use chicken broth as an alternative.",
            "For extra flavor, top with grated Parmesan cheese before serving."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Beef Stroganoff";

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
        window.location.href = '../pages/step-by-step.html'; // Correct path to 'step-by-step.html'
    });
});
