document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Gluten-Free Meatloaf
    const recipeDetails = {
        ingredients: [
            "1 1/2 lbs ground beef",
            "1/2 cup gluten-free breadcrumbs",
            "1/4 cup grated parmesan cheese",
            "1/4 cup milk (dairy or non-dairy)",
            "1 large egg",
            "1/2 cup onion, finely chopped",
            "2 cloves garlic, minced",
            "1 tbsp Worcestershire sauce",
            "1/4 cup ketchup (for topping)",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Preheat the oven to 350°F (175°C).",
            "Step 2: In a large bowl, combine ground beef, breadcrumbs, parmesan, milk, egg, onion, garlic, Worcestershire sauce, salt, and pepper.",
            "Step 3: Transfer the mixture to a greased loaf pan and top with ketchup.",
            "Step 4: Bake for 1 hour or until cooked through.",
            "Step 5: Let rest for 10 minutes before slicing."
        ],
        time: "1 hour", // Cooking time in minutes:seconds format
        tips: [
            "Use lean ground beef for a healthier option.",
            "Add a pinch of dried herbs (like thyme or rosemary) for extra flavor.",
            "Rest the meatloaf for 10 minutes before slicing for better texture."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Gluten-Free Meatloaf";

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
