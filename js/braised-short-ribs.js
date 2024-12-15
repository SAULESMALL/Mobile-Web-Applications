document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Braised Short Ribs
    const recipeDetails = {
        ingredients: [
            "4 bone-in short ribs",
            "2 tbsp olive oil",
            "1 large onion, chopped",
            "2 carrots, peeled and chopped",
            "2 cloves garlic, minced",
            "2 cups beef broth",
            "1 cup red wine",
            "1 tbsp tomato paste",
            "1 tsp thyme",
            "Salt and pepper to taste",
            "Fresh parsley for garnish"
        ],
        steps: [
            "Step 1: Preheat oven to 325°F (163°C). Heat olive oil in a Dutch oven over medium-high heat.",
            "Step 2: Sear the short ribs on all sides until browned, then remove and set aside.",
            "Step 3: In the same pot, sauté onions, carrots, and garlic until softened.",
            "Step 4: Add beef broth, red wine, tomato paste, and thyme. Stir to combine.",
            "Step 5: Return the ribs to the pot, cover, and transfer to the oven. Braise for 3 hours.",
            "Step 6: Let the ribs rest for 10 minutes before serving. Garnish with fresh parsley."
        ],
        time: "Prep time: 20 minutes, Cook time: 3 hours",
        tips: [
            "Sear the ribs well to develop a rich flavor.",
            "Use a Dutch oven for even heat distribution while braising.",
            "Let the ribs rest for 10 minutes before serving to retain juices."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Braised Short Ribs";

    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    recipeDetails.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Time
    document.getElementById('recipeTime').textContent = `Prep time: 20 minutes, Cook time: 3 hours`;

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
