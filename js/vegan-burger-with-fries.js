document.addEventListener('DOMContentLoaded', () => {
    // Define the recipe details for Vegan Burger with Fries
    const recipeDetails = {
        ingredients: [
            "1 can (15 oz) black beans, drained and mashed",
            "1 cup breadcrumbs",
            "1/4 cup chopped onion",
            "2 cloves garlic, minced",
            "1 tablespoon soy sauce",
            "1 tablespoon ground flaxseed (optional)",
            "1 teaspoon smoked paprika",
            "1 teaspoon ground cumin",
            "1/4 cup chopped fresh parsley",
            "1/4 teaspoon salt",
            "1/4 teaspoon pepper",
            "4 whole wheat buns",
            "1 avocado, sliced",
            "Vegan mayo or mustard (optional)",
            "Fries (to serve on the side)",
            "Olive oil for frying"
        ],
        steps: [
            "Step 1: In a bowl, combine black beans, breadcrumbs, onion, garlic, soy sauce, and seasonings.",
            "Step 2: Form the mixture into patties and fry them in a pan with olive oil until golden brown on both sides.",
            "Step 3: While the burgers are cooking, prepare the fries (you can fry or bake them).",
            "Step 4: Toast the whole wheat buns lightly in a pan.",
            "Step 5: Assemble the burger by placing the patty on the bun, adding avocado slices, and topping with mayo or mustard.",
            "Step 6: Serve the burger with fries on the side."
        ],
        time: "15:00", // Cooking time in minutes:seconds format
        tips: [
            "For extra flavor, add your favorite herbs or spices to the burger mixture.",
            "Serve the burger with sweet potato fries for a healthier twist.",
            "Toast the buns lightly in the pan for extra crunch and flavor."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Vegan Burger with Fries";

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
