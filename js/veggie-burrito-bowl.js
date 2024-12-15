document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Veggie Burrito Bowl
    const recipeDetails = {
        ingredients: [
            "1 cup cooked brown rice",
            "1/2 cup black beans, drained and rinsed",
            "1/2 cup corn kernels",
            "1/2 cup diced tomatoes",
            "1/2 avocado, sliced",
            "1/4 cup diced red onion",
            "1/4 cup chopped cilantro",
            "1 tablespoon lime juice",
            "1/2 teaspoon ground cumin",
            "1/4 teaspoon chili powder",
            "1 tablespoon olive oil",
            "Sour cream or vegan yogurt (optional)",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Cook brown rice according to package instructions.",
            "Step 2: In a pan, sauté black beans and corn with olive oil over medium heat.",
            "Step 3: Assemble the bowl with rice, beans, corn, diced tomatoes, avocado, red onion, and cilantro.",
            "Step 4: Drizzle lime juice and sprinkle cumin and chili powder over the bowl.",
            "Step 5: Add salt and pepper to taste, and top with sour cream or vegan yogurt if desired."
        ],
        time: "20:00", // Cooking time in minutes:seconds format
        tips: [
            "For extra protein, add grilled tofu or tempeh to the bowl.",
            "Feel free to swap brown rice with quinoa or cauliflower rice for a low-carb option.",
            "Top the bowl with your favorite salsa or hot sauce for extra flavor."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Veggie Burrito Bowl";

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
