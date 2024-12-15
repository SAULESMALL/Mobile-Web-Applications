document.addEventListener('DOMContentLoaded', () => {
    const recipeDetails = {
        ingredients: [
            "2 boneless, skinless chicken breasts",
            "1 tablespoon olive oil",
            "Salt and pepper to taste",
            "1 teaspoon garlic powder",
            "1 teaspoon paprika",
            "1 tablespoon balsamic vinegar",
            "1 tablespoon Dijon mustard",
            "1 teaspoon honey",
            "4 cups mixed greens (lettuce, spinach, arugula)",
            "1 cucumber, sliced",
            "1/2 red onion, thinly sliced",
            "1/4 cup feta cheese (optional)",
            "1/4 cup sunflower seeds (optional)",
            "1 avocado, sliced",
            "1 tablespoon olive oil (for dressing)",
            "1 tablespoon lemon juice (for dressing)",
            "1 teaspoon Dijon mustard (for dressing)"
        ],
        steps: [
            "Step 1: Marinate the chicken in olive oil, garlic powder, paprika, salt, and pepper for at least 30 minutes.",
            "Step 2: Heat the grill and cook the chicken for about 6-7 minutes per side or until fully cooked.",
            "Step 3: Slice the chicken into thin strips.",
            "Step 4: In a large bowl, combine mixed greens, cucumber, red onion, and avocado.",
            "Step 5: Toss the salad with the balsamic vinegar, Dijon mustard, honey, olive oil, lemon juice, and season with salt and pepper.",
            "Step 6: Top the salad with grilled chicken, feta, and sunflower seeds (optional)."
        ],
        time: "Prep time: 10 minutes, Cook time: 15 minutes",
        tips: [
            "For extra flavor, marinate the chicken in the olive oil, garlic powder, paprika, salt, and pepper for 30 minutes before grilling.",
            "Use a grill pan for indoor grilling if you don't have access to an outdoor grill.",
            "Top the salad with your favorite dressing, such as a balsamic vinaigrette or ranch."
        ]
    };

    // Populate the recipe details dynamically
    document.getElementById('recipeName').textContent = "Grilled Chicken Salad";

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
