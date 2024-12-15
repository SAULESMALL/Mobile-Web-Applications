document.addEventListener('DOMContentLoaded', () => {
    const recipeList = document.getElementById('recipe-list');

    if (!recipeList) {
        console.error("Error: 'recipe-list' element not found in the DOM!");
        return;
    }

    // Retrieve user selections from LocalStorage
    const selectedMood = localStorage.getItem('selectedMood');
    const selectedEnergy = localStorage.getItem('selectedEnergy');
    const selectedDiet = localStorage.getItem('selectedDiet');

    console.log("Retrieved Selections from LocalStorage:", {
        selectedMood,
        selectedEnergy,
        selectedDiet,
    });

    // Check for missing selections
    if (!selectedMood || !selectedEnergy || !selectedDiet) {
        console.error("Error: One or more user selections are missing from LocalStorage!");
        recipeList.innerHTML = `
            <p>Error: It seems you haven't made all your selections.</p>
            <a href="index.html">Go back to start and make your selections again.</a>
        `;
        return;
    }

    // Sample recipes array
    const recipes = [
      // Happy Mood
      { name: 'Happy Pancakes', mood: 'Happy', energyLevel: 'Low', dietaryPreference: 'vegan' },
      { name: 'Joyful Smoothie', mood: 'Happy', energyLevel: 'Low', dietaryPreference: 'Vegan' },
      { name: 'Happy Toast', mood: 'Happy', energyLevel: 'Low', dietaryPreference: 'Vegan' },
      { name: 'Joyful Salad', mood: 'Happy', energyLevel: 'Low', dietaryPreference: 'Vegan' },
  
      { name: 'Vegan Buddha Bowl', mood: 'Happy', energyLevel: 'Medium', dietaryPreference: 'Vegan' },
      { name: 'Vegan Stir-Fry', mood: 'Happy', energyLevel: 'Medium', dietaryPreference: 'Vegan' },
      { name: 'Avocado Pasta', mood: 'Happy', energyLevel: 'Medium', dietaryPreference: 'Vegan' },
      { name: 'Chickpea Tacos', mood: 'Happy', energyLevel: 'Medium', dietaryPreference: 'Vegan' },

      { name: 'Vegan Lentil Stew', mood: 'Happy', energyLevel: 'High', dietaryPreference: 'Vegan' },
      { name: 'Vegan Chili', mood: 'Happy', energyLevel: 'High', dietaryPreference: 'Vegan' },
      { name: 'Vegan Curry with rice', mood: 'Happy', energyLevel: 'High', dietaryPreference: 'Vegan' },
      { name: 'Vegan Burger with Fries', mood: 'Happy', energyLevel: 'High', dietaryPreference: 'Vegan' },
  
      { name: 'Vegetarian Avocado Toast', mood: 'Happy', energyLevel: 'Low', dietaryPreference: 'vegetarian' },
      { name: 'Capres Salad', mood: 'Happy', energyLevel: 'Low', dietaryPreference: 'Vegetarian' },
      { name: 'Vegetarian Quesadilla', mood: 'Happy', energyLevel: 'Low', dietaryPreference: 'Vegetarian' },
      { name: 'Greek Yogurt with Honey and Nuts', mood: 'Happy', energyLevel: 'Low', dietaryPreference: 'Vegetarian' },

      { name: 'Vegetarian Stir-Fry', mood: 'Happy', energyLevel: 'Medium', dietaryPreference: 'vegetarian' },
      { name: 'Vegetable Lasagna', mood: 'Happy', energyLevel: 'Medium', dietaryPreference: 'Vegetarian' },
      { name: 'Chickpea Salad Sandwich', mood: 'Happy', energyLevel: 'Medium', dietaryPreference: 'Vegetarian' },
      { name: 'Vegetarian Chili', mood: 'Happy', energyLevel: 'Medium', dietaryPreference: 'Vegetarian' },

      { name: 'Veggie Burrito bowl', mood: 'Happy', energyLevel: 'High', dietaryPreference: 'vegetarian' },
      { name: 'Vegetarian Tacos', mood: 'Happy', energyLevel: 'High', dietaryPreference: 'Vegetarian' },
      { name: 'Vegetarian Paella', mood: 'Happy', energyLevel: 'High', dietaryPreference: 'Vegetarian' },
      { name: 'Spinach and Mushroom Quiche', mood: 'Happy', energyLevel: 'High', dietaryPreference: 'Vegetarian' },

      { name: 'Avocado Toast on Gluten-Free Bread', mood: 'Happy', energyLevel: 'Low', dietaryPreference: 'Gluten-Free' },
      { name: 'Egg Salad', mood: 'Happy', energyLevel: 'Low', dietaryPreference: 'Gluten-Free' },
      { name: 'Chicken Lettuce Wraps', mood: 'Happy', energyLevel: 'Low', dietaryPreference: 'Gluten-Free' },
      { name: 'Tomato Basil Soup', mood: 'Happy', energyLevel: 'Low', dietaryPreference: 'Gluten-Free' },

      { name: 'Grilled Chicken Salad', mood: 'Happy', energyLevel: 'Medium', dietaryPreference: 'Gluten-Free' },
      { name: 'Beef Stir-Fry', mood: 'Happy', energyLevel: 'Medium', dietaryPreference: 'Gluten-Free' },
      { name: 'Zucchini Noodles with Pesto', mood: 'Happy', energyLevel: 'Medium', dietaryPreference: 'Gluten-Free' },
      { name: 'Chicken and Rice Casserole', mood: 'Happy', energyLevel: 'Medium', dietaryPreference: 'Gluten-Free' },

      { name: 'Chicken Parmesan (Gluten-Free)', mood: 'Happy', energyLevel: 'High', dietaryPreference: 'Gluten-Free' },
      { name: 'Beef Tacos (Gluten-Free Shells)', mood: 'Happy', energyLevel: 'High', dietaryPreference: 'Gluten-Free' },
      { name: 'Baked Salmon with Veggies', mood: 'Happy', energyLevel: 'High', dietaryPreference: 'Gluten-Free' },
      { name: 'Shrimp and Grits (Gluten-Free)', mood: 'Happy', energyLevel: 'High', dietaryPreference: 'Gluten-Free' },

      { name: 'Peanut Butter Banana Toast', mood: 'Happy', energyLevel: 'Low', dietaryPreference: 'None' },
      { name: 'Cheese and Crackers', mood: 'Happy', energyLevel: 'Low', dietaryPreference: 'None' },
      { name: 'Ham & Cheese Roll-ups', mood: 'Happy', energyLevel: 'Low', dietaryPreference: 'None' },
      { name: 'Tuna Salad', mood: 'Happy', energyLevel: 'Low', dietaryPreference: 'None' },

      { name: 'Chicken Caesar Salad', mood: 'Happy', energyLevel: 'Medium', dietaryPreference: 'None' },
      { name: 'Cheeseburger', mood: 'Happy', energyLevel: 'Medium', dietaryPreference: 'none' },
      { name: 'Chicken Quesadilla', mood: 'Happy', energyLevel: 'Medium', dietaryPreference: 'None' },
      { name: 'BLT Sandwich', mood: 'Happy', energyLevel: 'Medium', dietaryPreference: 'None' },

      { name: 'Beef Stroganoff', mood: 'Happy', energyLevel: 'High', dietaryPreference: 'None' },
      { name: 'Chicken Alfredo', mood: 'Happy', energyLevel: 'High', dietaryPreference: 'None' },
      { name: 'BBQ Ribs', mood: 'Happy', energyLevel: 'High', dietaryPreference: 'None' },
      { name: 'Stuffed Chicken Breast', mood: 'Happy', energyLevel: 'High', dietaryPreference: 'None' },
      // Sad Mood
      { name: 'Avocado Toast', mood: 'Sad', energyLevel: 'Low', dietaryPreference: 'vegan' },
      { name: 'Vegan Smoothie', mood: 'Sad', energyLevel: 'Low', dietaryPreference: 'Vegan' },
      { name: 'Hummus & Veggies', mood: 'Sad', energyLevel: 'Low', dietaryPreference: 'Vegan' },
      { name: 'Chickpea Salad', mood: 'Sad', energyLevel: 'Low', dietaryPreference: 'Vegan' },
  
      { name: 'Vegan Chili', mood: 'Sad', energyLevel: 'Medium', dietaryPreference: 'Vegan' },
      { name: 'Lentil Soup', mood: 'Sad', energyLevel: 'Medium', dietaryPreference: 'Vegan' },
      { name: 'Vegan Tacos', mood: 'Sad', energyLevel: 'Medium', dietaryPreference: 'Vegan' },
      { name: 'Vegan Stir-Fry', mood: 'Sad', energyLevel: 'Medium', dietaryPreference: 'vegan' },
  
      { name: 'Vegan Shepherd’s Pie', mood: 'Sad', energyLevel: 'High', dietaryPreference: 'Vegan' },
      { name: 'Vegan Pasta Primavera', mood: 'Sad', energyLevel: 'High', dietaryPreference: 'Vegan' },
      { name: 'Vegan Stuffed Peppers', mood: 'Sad', energyLevel: 'High', dietaryPreference: 'Vegan' },
      { name: 'Vegan Pot Pie', mood: 'Sad', energyLevel: 'High', dietaryPreference: 'Vegan' },
  
      { name: 'Grilled Cheese Sandwich', mood: 'Sad', energyLevel: 'Low', dietaryPreference: 'vegetarian' },
      { name: 'Tomato Basil Soup', mood: 'Sad', energyLevel: 'Low', dietaryPreference: 'Vegetarian' },
      { name: 'Cucumber Sandwich', mood: 'Sad', energyLevel: 'Low', dietaryPreference: 'Vegetarian' },
      { name: 'Spinach & Cheese Quesadilla', mood: 'Sad', energyLevel: 'Low', dietaryPreference: 'Vegetarian' },

      { name: 'Vegetarian Chili', mood: 'Sad', energyLevel: 'Medium', dietaryPreference: 'vegetarian' },
      { name: 'Vegetarian Fried Rice', mood: 'Sad', energyLevel: 'Medium', dietaryPreference: 'Vegetarian' },
      { name: 'Vegetarian Tacos', mood: 'Sad', energyLevel: 'Medium', dietaryPreference: 'Vegetarian' },
      { name: 'Spinach and Ricotta Stuffed Shells', mood: 'Sad', energyLevel: 'Medium', dietaryPreference: 'Vegetarian' },

      { name: 'Vegetarian Lasagna', mood: 'Sad', energyLevel: 'High', dietaryPreference: 'vegetarian' },
      { name: 'Vegetarian Pot Pie', mood: 'Sad', energyLevel: 'High', dietaryPreference: 'Vegetarian' },
      { name: 'Vegetarian Shepherd’s Pie', mood: 'Sad', energyLevel: 'High', dietaryPreference: 'Vegetarian' },
      { name: 'Vegetarian Baked Ziti', mood: 'Sad', energyLevel: 'High', dietaryPreference: 'Vegetarian' },

      { name: 'Grilled Chicken Salad', mood: 'Sad', energyLevel: 'Low', dietaryPreference: 'Gluten-Free' },
      { name: 'Egg and Avocado Toast', mood: 'Sad', energyLevel: 'Low', dietaryPreference: 'Gluten-Free' },
      { name: 'Tuna Salad', mood: 'Sad', energyLevel: 'Low', dietaryPreference: 'Gluten-Free' },
      { name: 'Cottage Cheese with Berries', mood: 'Sad', energyLevel: 'Low', dietaryPreference: 'Gluten-Free' },

      { name: 'Gluten-Free Chicken Stir Fry', mood: 'Sad', energyLevel: 'Medium', dietaryPreference: 'Gluten-Free' },
      { name: 'Beef Tacos with Corn Tortillas', mood: 'Sad', energyLevel: 'Medium', dietaryPreference: 'Gluten-Free' },
      { name: 'Chicken and Rice Soup', mood: 'Sad', energyLevel: 'Medium', dietaryPreference: 'Gluten-Free' },
      { name: 'Grilled Chicken with Roasted Potatoes', mood: 'Sad', energyLevel: 'Medium', dietaryPreference: 'Gluten-Free' },

      { name: 'Gluten-Free Meatloaf', mood: 'Sad', energyLevel: 'High', dietaryPreference: 'Gluten-Free' },
      { name: 'Roast Chicken with Vegetables', mood: 'Sad', energyLevel: 'High', dietaryPreference: 'Gluten-Free' },
      { name: 'Beef and Potato Stew', mood: 'Sad', energyLevel: 'High', dietaryPreference: 'Gluten-Free' },
      { name: 'Gluten-Free Chicken Parmesan', mood: 'Sad', energyLevel: 'High', dietaryPreference: 'Gluten-Free' },

      { name: 'Classic BLT Sandwich', mood: 'Sad', energyLevel: 'Low', dietaryPreference: 'None' },
      { name: 'Chicken Caesar Wrap', mood: 'Sad', energyLevel: 'Low', dietaryPreference: 'None' },
      { name: 'Pasta Salad', mood: 'Sad', energyLevel: 'Low', dietaryPreference: 'None' },
      { name: 'Cheese Quesadilla', mood: 'Sad', energyLevel: 'Low', dietaryPreference: 'None' },

      { name: 'Beef Stir Fry with Rice', mood: 'Sad', energyLevel: 'Medium', dietaryPreference: 'None' },
      { name: 'Chicken Alfredo', mood: 'Sad', energyLevel: 'Medium', dietaryPreference: 'None' },
      { name: 'Spaghetti Bolognese', mood: 'Sad', energyLevel: 'Medium', dietaryPreference: 'None' },
      { name: 'Shrimp Scampi', mood: 'Sad', energyLevel: 'Medium', dietaryPreference: 'None' },

      { name: 'Beef Wellington', mood: 'Sad', energyLevel: 'High', dietaryPreference: 'None' },
      { name: 'Lasagna', mood: 'Sad', energyLevel: 'High', dietaryPreference: 'None' },
      { name: 'Roast Pork with Apple Sauce', mood: 'Sad', energyLevel: 'High', dietaryPreference: 'None' },
      { name: 'Braised Short Ribs', mood: 'Sad', energyLevel: 'High', dietaryPreference: 'None' },

      // Lazy Mood
      { name: 'Lazy Nachos', mood: 'Lazy', energyLevel: 'Low', dietaryPreference: 'Vegan' },
      { name: 'Simple Avocado Toast', mood: 'Lazy', energyLevel: 'Low', dietaryPreference: 'Vegan' },
      { name: 'Lazy Salad', mood: 'Lazy', energyLevel: 'Low', dietaryPreference: 'Vegan' },
      { name: 'Lazy Quesadillas', mood: 'Lazy', energyLevel: 'Low', dietaryPreference: 'Vegan' },
  
      { name: 'Lazy Wrap', mood: 'Lazy', energyLevel: 'Medium', dietaryPreference: 'Vegan' },
      { name: 'Rice Bowl', mood: 'Lazy', energyLevel: 'Medium', dietaryPreference: 'Vegan' },
      { name: 'Simple Salad', mood: 'Lazy', energyLevel: 'Medium', dietaryPreference: 'Vegan' },
      { name: 'Vegan Tacos', mood: 'Lazy', energyLevel: 'Medium', dietaryPreference: 'Vegan' },
  
      { name: 'Lazy Pizza', mood: 'Lazy', energyLevel: 'High', dietaryPreference: 'Vegan' },
      { name: 'Lazy Pasta', mood: 'Lazy', energyLevel: 'High', dietaryPreference: 'Vegan' },
      { name: 'Vegan Burger', mood: 'Lazy', energyLevel: 'High', dietaryPreference: 'Vegan' },
      { name: 'Vegan Stir-fry', mood: 'Lazy', energyLevel: 'High', dietaryPreference: 'Vegan' },

      { name: 'Instant Oatmeal', mood: 'Lazy', energyLevel: 'Low', dietaryPreference: 'vegetarian' },
      { name: 'Greek Yogurt with Honey and Nuts', mood: 'Lazy', energyLevel: 'Low', dietaryPreference: 'Vegetarian' },
      { name: 'Fruit Salad with a Yogurt Drizzle', mood: 'Lazy', energyLevel: 'Low', dietaryPreference: 'Vegetarian' },
      { name: 'Quick Veggie Wrap', mood: 'Lazy', energyLevel: 'Low', dietaryPreference: 'Vegetarian' },

      { name: 'Quesadilla', mood: 'Lazy', energyLevel: 'Medium', dietaryPreference: 'vegetarian' },
      { name: 'Crispy Baked Sweet Potato Fries', mood: 'Lazy', energyLevel: 'Medium', dietaryPreference: 'Vegetarian' },
      { name: 'Simple Pasta with Garlic and Olive Oil', mood: 'Lazy', energyLevel: 'Medium', dietaryPreference: 'Vegetarian' },
      { name: 'Avocado Toast with Egg', mood: 'Lazy', energyLevel: 'Medium', dietaryPreference: 'Vegetarian' },

      { name: 'One-Pan Veggie Frittata', mood: 'Lazy', energyLevel: 'High', dietaryPreference: 'vegetarian' },
      { name: 'Mac and Cheese with Broccoli', mood: 'Lazy', energyLevel: 'High', dietaryPreference: 'Vegetarian' },
      { name: 'Baked Ziti with Mozzarella', mood: 'Lazy', energyLevel: 'High', dietaryPreference: 'Vegetarian' },
      { name: 'Vegetable Quesadillas', mood: 'Lazy', energyLevel: 'High', dietaryPreference: 'Vegetarian' },

      { name: 'Rice Cake with Almond Butter and Banana', mood: 'Lazy', energyLevel: 'Low', dietaryPreference: 'Gluten-Free' },
      { name: 'Cucumber and Hummus Cups', mood: 'Lazy', energyLevel: 'Low', dietaryPreference: 'Gluten-Free' },
      { name: 'Chia Pudding', mood: 'Lazy', energyLevel: 'Low', dietaryPreference: 'Gluten-Free' },
      { name: 'Caprese Salad', mood: 'Lazy', energyLevel: 'Low', dietaryPreference: 'Gluten-Free' },

      { name: 'Gluten-Free Pasta with Pesto', mood: 'Lazy', energyLevel: 'Medium', dietaryPreference: 'Gluten-Free' },
      { name: 'Egg Salad Lettuce Wraps', mood: 'Lazy', energyLevel: 'Medium', dietaryPreference: 'Gluten-Free' },
      { name: 'Zucchini Noodles with Tomato Sauce', mood: 'Lazy', energyLevel: 'Medium', dietaryPreference: 'Gluten-Free' },
      { name: 'Baked Chicken Tenders', mood: 'Lazy', energyLevel: 'Medium', dietaryPreference: 'Gluten-Free' },

      { name: 'Chicken Fajita Bowl', mood: 'Lazy', energyLevel: 'High', dietaryPreference: 'Gluten-Free' },
      { name: 'Beef and Broccoli Stir-Fry', mood: 'Lazy', energyLevel: 'High', dietaryPreference: 'Gluten-Free' },
      { name: 'Gluten-Free Pizza', mood: 'Lazy', energyLevel: 'High', dietaryPreference: 'Gluten-Free' },
      { name: 'Gluten-Free Chicken and Rice Casserole', mood: 'Lazy', energyLevel: 'High', dietaryPreference: 'Gluten-Free' },

      { name: 'Cottage Cheese with Fruit', mood: 'Lazy', energyLevel: 'Low', dietaryPreference: 'None' },
      { name: 'Bagel with Cream Cheese and Jam', mood: 'Lazy', energyLevel: 'Low', dietaryPreference: 'None' },
      { name: 'Yogurt Parfait', mood: 'Lazy', energyLevel: 'Low', dietaryPreference: 'None' },
      { name: 'Cheese and Crackers', mood: 'Lazy', energyLevel: 'Low', dietaryPreference: 'None' },

      { name: 'Chicken Caesar Wrap', mood: 'Lazy', energyLevel: 'Medium', dietaryPreference: 'None' },
      { name: 'Pasta with Pesto', mood: 'Lazy', energyLevel: 'Medium', dietaryPreference: 'None' },
      { name: 'BBQ Chicken Sliders', mood: 'Lazy', energyLevel: 'Medium', dietaryPreference: 'None' },
      { name: 'Steak and Potato Skillet', mood: 'Lazy', energyLevel: 'Medium', dietaryPreference: 'None' },

      { name: 'Chicken Alfredo', mood: 'Lazy', energyLevel: 'High', dietaryPreference: 'None' },
      { name: 'Beef Tacos', mood: 'Lazy', energyLevel: 'High', dietaryPreference: 'None' },
      { name: 'Pulled Pork Sandwiches', mood: 'Lazy', energyLevel: 'High', dietaryPreference: 'None' },
      { name: 'Shrimp Stir Fry', mood: 'Lazy', energyLevel: 'High', dietaryPreference: 'None' },
  
      // Anxious Mood
      { name: 'Stress-Free Salad', mood: 'Anxious', energyLevel: 'Low', dietaryPreference: 'Vegan' },
      { name: 'Calming Soup', mood: 'Anxious', energyLevel: 'Low', dietaryPreference: 'Vegan' },
      { name: 'Anxiety Wrap', mood: 'Anxious', energyLevel: 'Low', dietaryPreference: 'Vegan' },
      { name: 'Anxiety Smoothie', mood: 'Anxious', energyLevel: 'Low', dietaryPreference: 'Vegan' },
  
      { name: 'Anxiety Soup', mood: 'Anxious', energyLevel: 'Medium', dietaryPreference: 'Vegan' },
      { name: 'Anxious Smoothie', mood: 'Anxious', energyLevel: 'Medium', dietaryPreference: 'Vegan' },
      { name: 'Calming Stew', mood: 'Anxious', energyLevel: 'Medium', dietaryPreference: 'Vegan' },
      { name: 'Peaceful Salad', mood: 'Anxious', energyLevel: 'Medium', dietaryPreference: 'Vegan' },
  
      { name: 'Anxious Tacos', mood: 'Anxious', energyLevel: 'High', dietaryPreference: 'Vegan' },
      { name: 'Stress-Free Stew', mood: 'Anxious', energyLevel: 'High', dietaryPreference: 'Vegan' },
      { name: 'Healing Wrap', mood: 'Anxious', energyLevel: 'High', dietaryPreference: 'Vegan' },
      { name: 'Anxiety-Free Burger', mood: 'Anxious', energyLevel: 'High', dietaryPreference: 'Vegan' },

      { name: 'Vegetable Cucumber Rolls', mood: 'Anxious', energyLevel: 'Low', dietaryPreference: 'vegetarian' },
      { name: 'Apple and Almond Butter Slices', mood: 'Anxious', energyLevel: 'Low', dietaryPreference: 'Vegetarian' },
      { name: 'Zucchini Noodles with Pesto', mood: 'Anxious', energyLevel: 'Low', dietaryPreference: 'Vegetarian' },
      { name: 'Avocado Toast with Tomato', mood: 'Anxious', energyLevel: 'Low', dietaryPreference: 'Vegetarian' },

      { name: 'Sweet Potato and Black Bean Tacos', mood: 'Anxious', energyLevel: 'Medium', dietaryPreference: 'vegetarian' },
      { name: 'Spinach and Ricotta Stuffed Shells', mood: 'Anxious', energyLevel: 'Medium', dietaryPreference: 'Vegetarian' },
      { name: 'Cauliflower Rice Stir Fry', mood: 'Anxious', energyLevel: 'Medium', dietaryPreference: 'Vegetarian' },
      { name: 'Minestrone Soup', mood: 'Anxious', energyLevel: 'Medium', dietaryPreference: 'Vegetarian' },

      { name: 'Lentil Bolognese', mood: 'Anxious', energyLevel: 'High', dietaryPreference: 'vegetarian' },
      { name: 'Butternut Squash and Kale Risotto', mood: 'Anxious', energyLevel: 'High', dietaryPreference: 'Vegetarian' },
      { name: 'Grilled Veggie and Hummus Wrap', mood: 'Anxious', energyLevel: 'High', dietaryPreference: 'Vegetarian' },
      { name: 'Chickpea and Spinach Curry', mood: 'Anxious', energyLevel: 'High', dietaryPreference: 'Vegetarian' },

      { name: 'Coconut Yogurt with Berries', mood: 'Anxious', energyLevel: 'Low', dietaryPreference: 'Gluten-Free' },
      { name: 'Boiled Eggs and Spinach', mood: 'Anxious', energyLevel: 'Low', dietaryPreference: 'Gluten-Free' },
      { name: 'Apple Slices with Peanut Butter', mood: 'Anxious', energyLevel: 'Low', dietaryPreference: 'Gluten-Free' },
      { name: 'Avocado Toast on Gluten-Free Bread', mood: 'Anxious', energyLevel: 'Low', dietaryPreference: 'Gluten-Free' },

      { name: 'Chicken Caesar Salad (Gluten-Free)', mood: 'Anxious', energyLevel: 'Medium', dietaryPreference: 'Gluten-Free' },
      { name: 'Baked Sweet Potato Fries', mood: 'Anxious', energyLevel: 'Medium', dietaryPreference: 'Gluten-Free' },
      { name: 'Vegetable Stir-Fry with Tofu', mood: 'Anxious', energyLevel: 'Medium', dietaryPreference: 'Gluten-Free' },
      { name: 'Rice Paper Rolls with Shrimp', mood: 'Anxious', energyLevel: 'Medium', dietaryPreference: 'Gluten-Free' },

      { name: 'Grilled Chicken with Roasted Vegetables', mood: 'Anxious', energyLevel: 'High', dietaryPreference: 'Gluten-Free' },
      { name: 'Lentil Soup', mood: 'Anxious', energyLevel: 'High', dietaryPreference: 'Gluten-Free' },
      { name: 'Gluten-Free Beef Tacos', mood: 'Anxious', energyLevel: 'High', dietaryPreference: 'Gluten-Free' },
      { name: 'Quinoa and Grilled Veggie Salad', mood: 'Anxious', energyLevel: 'High', dietaryPreference: 'Gluten-Free' },

      { name: 'Microwave Mug Omelette', mood: 'Anxious', energyLevel: 'Low', dietaryPreference: 'None' },
      { name: 'Cucumber and Cream Cheese Sandwich', mood: 'Anxious', energyLevel: 'Low', dietaryPreference: 'None' },
      { name: 'Apple with Cheese Slices', mood: 'Anxious', energyLevel: 'Low', dietaryPreference: 'None' },
      { name: 'Trail Mix with Nuts and Dried Fruit', mood: 'Anxious', energyLevel: 'Low', dietaryPreference: 'None' },

      { name: 'Grilled Cheese Sandwich', mood: 'Anxious', energyLevel: 'Medium', dietaryPreference: 'None' },
      { name: 'Chicken Caesar Salad', mood: 'Anxious', energyLevel: 'Medium', dietaryPreference: 'None' },
      { name: 'Chicken and Rice Bowl', mood: 'Anxious', energyLevel: 'Medium', dietaryPreference: 'None' },
      { name: 'Chicken Fajitas', mood: 'Anxious', energyLevel: 'Medium', dietaryPreference: 'None' },

      { name: 'Beef Stroganoff', mood: 'Anxious', energyLevel: 'High', dietaryPreference: 'None' },
      { name: 'Baked Ziti', mood: 'Anxious', energyLevel: 'High', dietaryPreference: 'None' },
      { name: 'Pulled Pork Sandwiches', mood: 'Anxious', energyLevel: 'High', dietaryPreference: 'None' },
      { name: 'Chicken Parmesan', mood: 'Anxious', energyLevel: 'High', dietaryPreference: 'None' },
      
  ];
    // Function to display recipes dynamically
    function displayRecipes(recipes, container) {
        if (recipes.length > 0) {
            container.innerHTML = recipes
                .map(recipe => `
                    <div class="recipe-card">
                        <h3>${recipe.name}</h3>
                        <p><strong>Mood:</strong> ${recipe.mood}</p>
                        <p><strong>Energy Level:</strong> ${recipe.energyLevel}</p>
                        <p><strong>Dietary Preference:</strong> ${recipe.dietaryPreference}</p>
                        <button onclick="window.location.href='recipes/${recipe.name.toLowerCase().replace(/\s+/g, '-')}.html'">
                            Cook Me
                        </button>
                    </div>
                `)
                .join('');
        } else {
            container.innerHTML = `
                <p>No recipes match your criteria. Try adjusting your selections.</p>
                <a href="index.html">Go back and make different selections.</a>
            `;
        }
    }

    // Filter recipes based on user selections
    const filteredRecipes = recipes.filter(recipe =>
        recipe.mood.toLowerCase() === selectedMood.toLowerCase() &&
        recipe.energyLevel.toLowerCase() === selectedEnergy.toLowerCase() &&
        recipe.dietaryPreference.toLowerCase() === selectedDiet.toLowerCase()
    );

    console.log("Filtered Recipes:", filteredRecipes);

    // Display the filtered recipes
    displayRecipes(filteredRecipes, recipeList);
});
