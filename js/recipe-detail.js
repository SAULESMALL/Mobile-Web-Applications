document.addEventListener('DOMContentLoaded', () => {
    // Retrieve selected recipe from localStorage
    const selectedRecipe = JSON.parse(localStorage.getItem('selectedRecipe'));

    // Check if recipe data exists
    if (!selectedRecipe) {
        document.body.innerHTML = "<h1>Error: Recipe not found</h1>";
        return;
    }

    // Populate the page with recipe details
    document.getElementById('recipeName').textContent = selectedRecipe.name;

    // Populate ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    selectedRecipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Display cooking time
    document.getElementById('cookingTime').textContent = `Prep time: ${selectedRecipe.prepTime}, Cook time: ${selectedRecipe.cookTime}`;

    // Populate cooking tips
    const cookingTipsList = document.getElementById('cookingTips');
    selectedRecipe.tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        cookingTipsList.appendChild(li);
    });

    // Start Cooking Button - Pass steps and navigate to step-by-step.html
    document.getElementById('startCookingBtn').addEventListener('click', () => {
        localStorage.setItem('recipeSteps', JSON.stringify(selectedRecipe.steps));
        localStorage.setItem('recipeTime', selectedRecipe.cookTime);
        window.location.href = 'step-by-step.html';
    });
});
