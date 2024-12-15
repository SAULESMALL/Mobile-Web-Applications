document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Chickpea Tacos
    const recipeDetails = {
        ingredients: [
            "1 can (15 oz) chickpeas, drained and rinsed",
            "2 tablespoons olive oil",
            "1 tablespoon ground cumin",
            "1 teaspoon chili powder",
            "1 teaspoon smoked paprika",
            "1/2 teaspoon garlic powder",
            "1/2 teaspoon onion powder",
            "1/4 teaspoon salt",
            "1/4 teaspoon black pepper",
            "8 small corn tortillas",
            "1 avocado, sliced",
            "1/2 cup shredded lettuce",
            "1/4 cup diced tomatoes",
            "1/4 cup cilantro, chopped",
            "Lime wedges for serving"
        ],
        steps: [
            "Step 1: Heat olive oil in a pan over medium heat.",
            "Step 2: Add the chickpeas, cumin, chili powder, smoked paprika, garlic powder, onion powder, salt, and pepper. Cook for 5-7 minutes.",
            "Step 3: Warm the tortillas in a separate pan or microwave.",
            "Step 4: Assemble the tacos: place the seasoned chickpeas on each tortilla.",
            "Step 5: Top with avocado slices, lettuce, tomatoes, cilantro, and a squeeze of lime."
        ],
        time: "15:00", // Cooking time in minutes:seconds format
        tips: [
            "For a spicier kick, add a pinch of cayenne pepper or hot sauce.",
            "Top with a dollop of vegan sour cream for extra creaminess.",
            "Serve with a side of rice or quinoa for a more filling meal."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Chickpea Tacos";

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
