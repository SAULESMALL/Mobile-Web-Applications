document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Beef Stir-Fry
    const recipeDetails = {
        ingredients: [
            "1 lb beef (flank steak or sirloin), thinly sliced",
            "2 tablespoons olive oil",
            "1 red bell pepper, sliced",
            "1 yellow bell pepper, sliced",
            "1 onion, thinly sliced",
            "2 cloves garlic, minced",
            "1 tablespoon ginger, grated",
            "1/4 cup gluten-free soy sauce",
            "1 tablespoon honey",
            "2 tablespoons rice vinegar",
            "1 tablespoon sesame oil",
            "1 tablespoon cornstarch (optional, for thickening)",
            "2 tablespoons sesame seeds (optional)",
            "Cooked rice or noodles for serving"
        ],
        steps: [
            "Step 1: Marinate the beef in soy sauce, honey, and rice vinegar for 20-30 minutes.",
            "Step 2: Heat olive oil in a wok or large skillet over medium-high heat.",
            "Step 3: Add the marinated beef and cook until browned, then remove from the pan.",
            "Step 4: In the same pan, sauté the bell peppers, onion, garlic, and ginger for 2-3 minutes.",
            "Step 5: Add the beef back into the pan, along with sesame oil and cornstarch (if using). Stir to combine.",
            "Step 6: Cook for another 2-3 minutes until everything is evenly coated and heated through.",
            "Step 7: Garnish with sesame seeds and serve over rice or noodles."
        ],
        time: "Prep time: 10 minutes, Cook time: 15 minutes",
        tips: [
            "For extra flavor, marinate the beef in the soy sauce, honey, and rice vinegar for 20-30 minutes before cooking.",
            "Use a wok or large skillet to ensure the beef and vegetables cook evenly.",
            "Adjust the sweetness of the stir-fry by varying the amount of honey to your preference."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Beef Stir-Fry";

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
        // Navigate to step-by-step page in the 'pages' folder
        window.location.href = '../pages/step-by-step.html'; // Correct path to 'step-by-step.html'
    });
});
