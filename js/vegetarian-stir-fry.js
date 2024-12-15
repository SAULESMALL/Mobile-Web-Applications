document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegetarian Stir-Fry
    const recipeDetails = {
        ingredients: [
            "1 tablespoon vegetable oil",
            "1 onion, thinly sliced",
            "1 bell pepper, thinly sliced",
            "1 zucchini, sliced",
            "1 carrot, julienned",
            "1/2 cup broccoli florets",
            "1/2 cup snap peas",
            "2 cloves garlic, minced",
            "1 tablespoon soy sauce",
            "1 tablespoon hoisin sauce",
            "1 teaspoon sesame oil",
            "1 tablespoon sesame seeds (optional)",
            "1/4 cup chopped fresh cilantro (optional)",
            "1 tablespoon lime juice (optional)",
            "Cooked rice or noodles for serving"
        ],
        steps: [
            "Step 1: Heat vegetable oil in a large pan or wok over medium heat.",
            "Step 2: Add the onion, bell pepper, zucchini, and carrot. Stir-fry for 5-6 minutes.",
            "Step 3: Add the broccoli, snap peas, and garlic, and stir-fry for another 2-3 minutes.",
            "Step 4: Add soy sauce, hoisin sauce, and sesame oil. Stir well to coat the vegetables.",
            "Step 5: Garnish with sesame seeds, cilantro, and lime juice (optional). Serve with rice or noodles."
        ],
        time: "10:00", // Cooking time in minutes:seconds format
        tips: [
            "For extra protein, add tofu or tempeh cubes to the stir-fry.",
            "Use any vegetables you have on hand, such as mushrooms or baby corn.",
            "Serve with rice, quinoa, or noodles for a complete meal."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegetarian Stir-Fry";

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
