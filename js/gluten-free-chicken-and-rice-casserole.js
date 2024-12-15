document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Gluten-Free Chicken and Rice Casserole
    const recipeDetails = {
        ingredients: [
            "2 cups cooked chicken, shredded",
            "1 1/2 cups gluten-free rice",
            "1 can (10.5 oz) gluten-free cream of mushroom soup",
            "1/2 cup milk (dairy or non-dairy)",
            "1 cup shredded cheddar cheese",
            "1/2 cup onion, chopped",
            "1/2 cup frozen peas",
            "1/4 cup gluten-free breadcrumbs",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Preheat the oven to 350°F (175°C).",
            "Step 2: In a large mixing bowl, combine the chicken, rice, cream of mushroom soup, milk, and season with salt and pepper.",
            "Step 3: Stir in the shredded cheddar cheese, chopped onions, and frozen peas.",
            "Step 4: Pour the mixture into a greased baking dish and top with gluten-free breadcrumbs.",
            "Step 5: Bake for 45 minutes until bubbly and golden on top."
        ],
        time: "15:00", // Cooking time in minutes:seconds format
        tips: [
            "You can use cooked rotisserie chicken for a quicker prep time.",
            "Top with extra cheese or herbs for added flavor.",
            "Let the casserole cool for a few minutes before serving to set the texture."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Gluten-Free Chicken and Rice Casserole";

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
