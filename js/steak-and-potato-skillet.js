document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Steak and Potato Skillet
    const recipeDetails = {
        ingredients: [
            "2 steaks (ribeye or sirloin), about 1 inch thick",
            "3 medium potatoes, peeled and diced",
            "1 onion, sliced",
            "2 cloves garlic, minced",
            "2 tbsp olive oil",
            "1 tsp paprika",
            "1/2 tsp garlic powder",
            "Salt and pepper to taste",
            "Fresh herbs (optional, for garnish)"
        ],
        steps: [
            "Step 1: Season both sides of the steaks with paprika, garlic powder, salt, and pepper.",
            "Step 2: Heat olive oil in a skillet over medium-high heat. Cook the steaks for 3-4 minutes on each side for medium-rare, or longer for desired doneness.",
            "Step 3: Remove the steaks and set them aside to rest.",
            "Step 4: In the same skillet, add the diced potatoes and onions. Cook until the potatoes are golden and tender, about 10-12 minutes.",
            "Step 5: Slice the steaks and return them to the skillet with the potatoes. Stir everything together and cook for an additional 2-3 minutes.",
            "Step 6: Garnish with fresh herbs and serve."
        ],
        time: "Prep time: 10 minutes, Cook time: 25 minutes",
        tips: [
            "Let the steak rest for a few minutes after cooking to retain its juices.",
            "For extra flavor, top with fresh herbs like rosemary or thyme before serving.",
            "Use a cast-iron skillet for even cooking and better browning."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Steak and Potato Skillet";

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
