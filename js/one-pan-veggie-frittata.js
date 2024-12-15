document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for One-Pan Veggie Frittata
    const recipeDetails = {
        ingredients: [
            "6 large eggs",
            "1/4 cup milk (dairy or plant-based)",
            "1 cup spinach, chopped",
            "1/2 cup cherry tomatoes, halved",
            "1/4 cup red bell pepper, diced",
            "1/4 cup onion, finely chopped",
            "1/4 cup shredded cheddar cheese (optional)",
            "1 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        steps: [
            "Step 1: Preheat the oven to 350°F (175°C).",
            "Step 2: Heat olive oil in a non-stick skillet over medium heat. Add onions and bell pepper, and cook until softened.",
            "Step 3: Add spinach and cook until wilted.",
            "Step 4: In a bowl, whisk together eggs, milk, salt, and pepper. Pour the mixture over the vegetables in the skillet.",
            "Step 5: Sprinkle with shredded cheese, if using, and transfer the skillet to the oven.",
            "Step 6: Bake for 15-20 minutes, or until the frittata is set and lightly golden on top.",
            "Step 7: Let it cool for a few minutes before slicing and serving."
        ],
        time: "20:00", // Cooking time in minutes:seconds format
        tips: [
            "Use a non-stick skillet for easier cooking and cleaning.",
            "Customize with your favorite vegetables or leftover veggies.",
            "Serve with a side of toast or salad for a complete meal."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "One-Pan Veggie Frittata";

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
