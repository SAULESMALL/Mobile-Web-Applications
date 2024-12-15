document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Chicken Alfredo
    const recipeDetails = {
        ingredients: [
            "2 tablespoons olive oil",
            "4 boneless, skinless chicken breasts",
            "Salt and pepper to taste",
            "2 cups heavy cream",
            "1 cup grated Parmesan cheese",
            "1 teaspoon garlic powder",
            "1 teaspoon onion powder",
            "1 tablespoon butter",
            "8 oz fettuccine pasta",
            "Fresh parsley, chopped (for garnish)"
        ],
        steps: [
            "Step 1: Heat olive oil in a large skillet over medium-high heat. Season chicken breasts with salt and pepper, then cook until golden and cooked through.",
            "Step 2: Remove chicken from the skillet and set aside. In the same skillet, melt butter and add garlic powder and onion powder.",
            "Step 3: Add heavy cream and Parmesan cheese to the skillet. Stir until the sauce is smooth.",
            "Step 4: Cook the fettuccine pasta according to the package directions, then add to the sauce.",
            "Step 5: Slice the cooked chicken and add it to the pasta and sauce mixture. Garnish with parsley and additional Parmesan, then serve."
        ],
        time: "10 minutes (prep), 25 minutes (cook)",
        tips: [
            "For a creamier sauce, add more heavy cream or butter as needed.",
            "Use freshly grated Parmesan for a better texture and flavor.",
            "Top with additional Parmesan and fresh parsley before serving."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Chicken Alfredo";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: 10 minutes, Cook time: 25 minutes`;

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
