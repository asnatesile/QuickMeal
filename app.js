const RECIPES = [
  // --- Pasta & Rice ---
  {
    id: 1,
    title: "Creamy Tomato Pasta",
    mainIngredient: "pasta",
    ingredients: ["pasta", "tomato", "garlic", "olive oil", "cream", "cheese"],
    time: 20,
    difficulty: "easy",
    diet: "vegetarian",
    glutenFree: false,
    vegan: false,
    baseServings: 2,
    ingredientDetails: [
      { name: "pasta", amount: 180, unit: "g" },
      { name: "tomato", amount: 200, unit: "g" },
      { name: "garlic", amount: 2, unit: "clove" },
      { name: "olive oil", amount: 15, unit: "ml" },
      { name: "cream", amount: 100, unit: "ml" },
      { name: "cheese", amount: 30, unit: "g" }
    ],
    steps: [
      "Cook pasta in salted boiling water until al dente. Reserve a cup of pasta water.",
      "In a pan, warm olive oil and gently sauté minced garlic for about 30 seconds.",
      "Stir in chopped tomato and cook until soft and saucy, 3–5 minutes.",
      "Pour in cream, season with salt and pepper, and simmer until slightly thickened.",
      "Toss drained pasta into the sauce, adding a splash of pasta water if needed.",
      "Stir through grated cheese until melted and silky, then serve hot."
    ]
  },
  {
    id: 2,
    title: "Herby Chicken & Rice Bowl",
    mainIngredient: "chicken",
    ingredients: ["chicken", "rice", "garlic", "onion", "lemon", "olive oil", "parsley"],
    time: 30,
    difficulty: "medium",
    diet: "any",
    glutenFree: true,
    vegan: false,
    baseServings: 2,
    ingredientDetails: [
      { name: "chicken", amount: 260, unit: "g" },
      { name: "rice", amount: 160, unit: "g" },
      { name: "garlic", amount: 2, unit: "clove" },
      { name: "onion", amount: 80, unit: "g" },
      { name: "lemon", amount: 0.5, unit: "piece" },
      { name: "olive oil", amount: 15, unit: "ml" },
      { name: "parsley", amount: 10, unit: "g" }
    ],
    steps: [
      "Cook rice according to package directions and fluff with a fork.",
      "Season bite-size chicken pieces with salt, pepper, and any dried herbs you like.",
      "Heat olive oil in a pan and sear chicken with onion until lightly browned.",
      "Add garlic and cook briefly, then squeeze in lemon juice.",
      "Toss the chicken mixture with warm rice and chopped parsley.",
      "Taste and adjust seasoning, then serve in bowls with extra lemon on the side."
    ]
  },
  {
    id: 3,
    title: "Veggie Fried Rice",
    mainIngredient: "rice",
    ingredients: ["rice", "egg", "carrot", "peas", "onion", "garlic", "soy sauce"],
    time: 18,
    difficulty: "easy",
    diet: "any",
    glutenFree: false,
    vegan: false,
    baseServings: 2,
    ingredientDetails: [
      { name: "rice", amount: 200, unit: "g" },
      { name: "egg", amount: 2, unit: "egg" },
      { name: "carrot", amount: 80, unit: "g" },
      { name: "peas", amount: 60, unit: "g" },
      { name: "onion", amount: 60, unit: "g" },
      { name: "garlic", amount: 2, unit: "clove" },
      { name: "soy sauce", amount: 15, unit: "ml" }
    ],
    steps: [
      "Cook rice ahead of time or use leftover cold rice for best texture.",
      "Beat the eggs in a small bowl with a pinch of salt.",
      "Heat oil in a large pan, scramble the egg, then set the cooked egg aside.",
      "In the same pan, sauté onion, carrot, and peas until just tender.",
      "Add garlic, then stir in the rice, breaking up any clumps.",
      "Splash in soy sauce and toss everything together with the scrambled egg until hot."
    ]
  },
  {
    id: 4,
    title: "Garlic Lemon Roast Chicken Traybake",
    mainIngredient: "chicken",
    ingredients: ["chicken", "lemon", "garlic", "onion", "olive oil", "potato"],
    time: 45,
    difficulty: "hard",
    diet: "any",
    glutenFree: true,
    vegan: false,
    baseServings: 3,
    ingredientDetails: [
      { name: "chicken", amount: 450, unit: "g" },
      { name: "potato", amount: 500, unit: "g" },
      { name: "onion", amount: 120, unit: "g" },
      { name: "garlic", amount: 3, unit: "clove" },
      { name: "lemon", amount: 1, unit: "piece" },
      { name: "olive oil", amount: 25, unit: "ml" }
    ],
    steps: [
      "Preheat your oven to about 200°C (400°F).",
      "Cut chicken and potatoes into even pieces and place on a baking tray with sliced onion.",
      "Drizzle with olive oil, add minced garlic, lemon juice and zest, salt, and pepper.",
      "Toss everything so the chicken and veg are well coated.",
      "Roast for 25–35 minutes, turning once, until the chicken is cooked through and potatoes are soft.",
      "Finish with extra lemon juice and serve straight from the tray."
    ]
  },
  {
    id: 5,
    title: "Cheesy Baked Rice Casserole",
    mainIngredient: "rice",
    ingredients: ["rice", "cheese", "milk", "onion", "butter"],
    time: 35,
    difficulty: "medium",
    diet: "vegetarian",
    glutenFree: true,
    vegan: false,
    baseServings: 3,
    ingredientDetails: [
      { name: "rice", amount: 240, unit: "g" },
      { name: "cheese", amount: 120, unit: "g" },
      { name: "milk", amount: 250, unit: "ml" },
      { name: "onion", amount: 80, unit: "g" },
      { name: "butter", amount: 20, unit: "g" }
    ],
    steps: [
      "Preheat oven to about 190°C (375°F).",
      "Cook rice until just tender, then drain if needed.",
      "In a bowl, mix warm rice with chopped onion, milk, and most of the cheese.",
      "Season with salt and pepper, then spoon into a lightly greased baking dish.",
      "Top with the remaining cheese and a few dots of butter.",
      "Bake 15–20 minutes until the top is golden and bubbly, then serve."
    ]
  },
  {
    id: 6,
    title: "Simple Veggie Stir-fry",
    mainIngredient: "vegetables",
    ingredients: ["rice", "garlic", "onion", "spinach", "carrot", "soy sauce"],
    time: 18,
    difficulty: "easy",
    diet: "vegan",
    glutenFree: false,
    vegan: true,
    baseServings: 2,
    ingredientDetails: [
      { name: "rice", amount: 160, unit: "g" },
      { name: "garlic", amount: 2, unit: "clove" },
      { name: "onion", amount: 60, unit: "g" },
      { name: "spinach", amount: 80, unit: "g" },
      { name: "carrot", amount: 80, unit: "g" },
      { name: "soy sauce", amount: 15, unit: "ml" }
    ],
    steps: [
      "Cook rice if you want it on the side, or use leftover cooked rice.",
      "Prep all vegetables into bite-size strips or pieces.",
      "Heat a little oil in a hot pan or wok and stir-fry onion and carrot until slightly tender.",
      "Add garlic, spinach, and any other quick-cooking veg, stirring constantly.",
      "Splash in soy sauce and a little water if the pan looks dry.",
      "Cook just until the vegetables are bright and still a bit crisp, then serve over rice."
    ]
  },
  {
    id: 7,
    title: "Tuna Pasta Salad",
    mainIngredient: "pasta",
    ingredients: ["pasta", "tuna", "yogurt", "cucumber", "onion", "lemon"],
    time: 22,
    difficulty: "easy",
    diet: "any",
    glutenFree: false,
    vegan: false,
    baseServings: 3,
    ingredientDetails: [
      { name: "pasta", amount: 240, unit: "g" },
      { name: "tuna", amount: 150, unit: "g" },
      { name: "yogurt", amount: 150, unit: "g" },
      { name: "cucumber", amount: 120, unit: "g" },
      { name: "onion", amount: 60, unit: "g" },
      { name: "lemon", amount: 0.5, unit: "piece" }
    ],
    steps: [
      "Cook pasta in salted water until al dente, then rinse briefly under cold water.",
      "Drain tuna well and break it into flakes with a fork.",
      "In a large bowl, whisk yogurt with a squeeze of lemon, salt, and pepper.",
      "Add cooled pasta, tuna, chopped cucumber, and finely sliced onion.",
      "Toss everything together until coated in the creamy dressing.",
      "Chill for a bit if you like it cold, then serve."
    ]
  },
  {
    id: 8,
    title: "One-Pot Tomato Rice with Beans",
    mainIngredient: "rice",
    ingredients: ["rice", "tomato", "beans", "onion", "garlic", "bell pepper", "olive oil"],
    time: 28,
    difficulty: "medium",
    diet: "vegan",
    glutenFree: true,
    vegan: true,
    baseServings: 3,
    ingredientDetails: [
      { name: "rice", amount: 240, unit: "g" },
      { name: "tomato", amount: 250, unit: "g" },
      { name: "beans", amount: 200, unit: "g" },
      { name: "onion", amount: 80, unit: "g" },
      { name: "garlic", amount: 2, unit: "clove" },
      { name: "bell pepper", amount: 80, unit: "g" },
      { name: "olive oil", amount: 20, unit: "ml" }
    ],
    steps: [
      "Rinse the rice until the water runs mostly clear.",
      "In a pot, sauté onion and bell pepper in olive oil until softened.",
      "Add garlic, tomato, and beans, stirring for a minute.",
      "Stir in rice, then add water or stock, salt, and pepper.",
      "Bring to a boil, then cover and simmer on low until the rice is tender.",
      "Let rest covered for a few minutes, fluff with a fork, and serve."
    ]
  },

  // --- Eggs & Breakfast ---
  {
    id: 9,
    title: "Egg & Spinach Breakfast Scramble",
    mainIngredient: "egg",
    ingredients: ["egg", "spinach", "milk", "cheese", "butter"],
    time: 10,
    difficulty: "easy",
    diet: "vegetarian",
    glutenFree: true,
    vegan: false,
    baseServings: 1,
    ingredientDetails: [
      { name: "egg", amount: 2, unit: "egg" },
      { name: "spinach", amount: 40, unit: "g" },
      { name: "milk", amount: 20, unit: "ml" },
      { name: "cheese", amount: 20, unit: "g" },
      { name: "butter", amount: 5, unit: "g" }
    ],
    steps: [
      "Crack eggs into a bowl, add a splash of milk, salt, and pepper, and whisk.",
      "Rinse spinach and roughly chop it.",
      "Heat butter in a non-stick pan over medium heat.",
      "Pour in the eggs, then scatter spinach and grated cheese on top.",
      "Gently stir and fold until the eggs are just set and still soft.",
      "Serve immediately with toast or on its own."
    ]
  },
  {
    id: 10,
    title: "Mushroom & Cheese Omelette",
    mainIngredient: "egg",
    ingredients: ["egg", "mushrooms", "cheese", "Butter", "milk"],
    time: 12,
    difficulty: "easy",
    diet: "vegetarian",
    glutenFree: true,
    vegan: false,
    baseServings: 1,
    ingredientDetails: [
      { name: "egg", amount: 2, unit: "egg" },
      { name: "mushrooms", amount: 60, unit: "g" },
      { name: "cheese", amount: 25, unit: "g" },
      { name: "Butter", amount: 5, unit: "g" },
      { name: "milk", amount: 15, unit: "ml" }
    ],
    steps: [
      "Beat eggs with milk, salt, and pepper in a bowl.",
      "Slice mushrooms and grate or slice the cheese.",
      "Melt butter in a non-stick pan over medium heat and cook mushrooms until golden.",
      "Pour in the egg mixture and tilt the pan so it spreads evenly.",
      "When the underside is set but the top is still soft, add cheese to one side.",
      "Fold the omelette over the cheese, cook another minute, then slide onto a plate."
    ]
  },
  {
    id: 11,
    title: "Avocado Toast with Egg",
    mainIngredient: "bread",
    ingredients: ["bread", "egg", "avocado", "olive oil", "lemon"],
    time: 12,
    difficulty: "easy",
    diet: "any",
    glutenFree: false,
    vegan: false,
    baseServings: 1,
    ingredientDetails: [
      { name: "bread", amount: 1, unit: "slice" },
      { name: "egg", amount: 1, unit: "egg" },
      { name: "avocado", amount: 0.5, unit: "piece" },
      { name: "olive oil", amount: 5, unit: "ml" },
      { name: "lemon", amount: 0.25, unit: "piece" }
    ],
    steps: [
      "Toast the bread slices until golden.",
      "Mash avocado with a squeeze of lemon, salt, and pepper.",
      "Spread the mashed avocado over the warm toast.",
      "Fry, poach, or soft-boil the egg to your liking.",
      "Place the egg on top of the toast and drizzle with a little olive oil.",
      "Finish with extra pepper or chili flakes if you like."
    ]
  },
  {
    id: 12,
    title: "Overnight Yogurt Oats",
    mainIngredient: "oats",
    ingredients: ["oats", "milk", "yogurt", "honey", "banana"],
    time: 10,
    difficulty: "easy",
    diet: "vegetarian",
    glutenFree: false,
    vegan: false,
    baseServings: 2,
    ingredientDetails: [
      { name: "oats", amount: 80, unit: "g" },
      { name: "milk", amount: 150, unit: "ml" },
      { name: "yogurt", amount: 150, unit: "g" },
      { name: "honey", amount: 15, unit: "ml" },
      { name: "banana", amount: 1, unit: "piece" }
    ],
    steps: [
      "In a jar or bowl, stir together oats, milk, and yogurt.",
      "Sweeten with honey and mix in sliced or mashed banana.",
      "Add a pinch of salt or cinnamon if you like.",
      "Cover and refrigerate for at least 4 hours, ideally overnight.",
      "In the morning, give it a stir and adjust thickness with a little extra milk if needed.",
      "Top with extra fruit or nuts before serving."
    ]
  },
  // --- Curries, Stews & Veggie Mains ---
  {
    id: 14,
    title: "Vegan Chickpea Curry",
    mainIngredient: "chickpeas",
    ingredients: ["chickpeas", "onion", "garlic", "tomato", "coconut milk", "spinach"],
    time: 25,
    difficulty: "medium",
    diet: "vegan",
    glutenFree: true,
    vegan: true,
    baseServings: 3,
    ingredientDetails: [
      { name: "chickpeas", amount: 300, unit: "g" },
      { name: "onion", amount: 100, unit: "g" },
      { name: "garlic", amount: 3, unit: "clove" },
      { name: "tomato", amount: 250, unit: "g" },
      { name: "coconut milk", amount: 250, unit: "ml" },
      { name: "spinach", amount: 80, unit: "g" }
    ],
    steps: [
      "Rinse chickpeas if using canned, and drain well.",
      "In a pot, sauté onion and garlic in a little oil until soft.",
      "Stir in tomato and cook until it breaks down into a rough sauce.",
      "Add chickpeas and coconut milk, then season with salt, pepper, and curry-style spices.",
      "Simmer for 10–15 minutes until slightly thickened.",
      "Stir in spinach at the end until just wilted, then serve with rice or bread."
    ]
  },
  {
    id: 15,
    title: "Mediterranean Tomato Salad",
    mainIngredient: "tomato",
    ingredients: ["tomato", "onion", "olive oil", "lemon", "cucumber", "feta"],
    time: 12,
    difficulty: "easy",
    diet: "vegetarian",
    glutenFree: true,
    vegan: false,
    baseServings: 2,
    ingredientDetails: [
      { name: "tomato", amount: 250, unit: "g" },
      { name: "onion", amount: 40, unit: "g" },
      { name: "olive oil", amount: 15, unit: "ml" },
      { name: "lemon", amount: 0.5, unit: "piece" },
      { name: "cucumber", amount: 120, unit: "g" },
      { name: "feta", amount: 60, unit: "g" }
    ],
    steps: [
      "Slice tomatoes and cucumber, and thinly slice the onion.",
      "Place vegetables in a bowl and crumble feta over the top.",
      "Drizzle with olive oil and a squeeze of lemon juice.",
      "Season lightly with salt and plenty of black pepper.",
      "Toss gently so the tomatoes stay mostly intact.",
      "Serve immediately as a side or light main."
    ]
  },
  {
    id: 16,
    title: "Roasted Veggie Tray",
    mainIngredient: "vegetables",
    ingredients: ["potato", "carrot", "broccoli", "bell pepper", "olive oil", "garlic"],
    time: 35,
    difficulty: "easy",
    diet: "vegan",
    glutenFree: true,
    vegan: true,
    baseServings: 3,
    ingredientDetails: [
      { name: "potato", amount: 450, unit: "g" },
      { name: "carrot", amount: 200, unit: "g" },
      { name: "broccoli", amount: 200, unit: "g" },
      { name: "bell pepper", amount: 120, unit: "g" },
      { name: "olive oil", amount: 25, unit: "ml" },
      { name: "garlic", amount: 3, unit: "clove" }
    ],
    steps: [
      "Preheat oven to about 200°C (400°F).",
      "Cut potato, carrot, broccoli, and bell pepper into similar-sized chunks.",
      "Spread vegetables on a baking tray and toss with olive oil, minced garlic, salt, and pepper.",
      "Arrange in a single layer so they roast rather than steam.",
      "Roast 20–30 minutes, turning once, until tender and caramelised on the edges.",
      "Serve hot as a side or over grains."
    ]
  },
  {
    id: 17,
    title: "Lentil & Tomato Stew",
    mainIngredient: "lentils",
    ingredients: ["lentils", "tomato", "onion", "garlic", "carrot", "olive oil"],
    time: 30,
    difficulty: "medium",
    diet: "vegan",
    glutenFree: true,
    vegan: true,
    baseServings: 3,
    ingredientDetails: [
      { name: "lentils", amount: 240, unit: "g" },
      { name: "tomato", amount: 250, unit: "g" },
      { name: "onion", amount: 100, unit: "g" },
      { name: "garlic", amount: 3, unit: "clove" },
      { name: "carrot", amount: 150, unit: "g" },
      { name: "olive oil", amount: 20, unit: "ml" }
    ],
    steps: [
      "Rinse lentils if needed.",
      "In a pot, sauté onion, carrot, and garlic in olive oil until softened.",
      "Add chopped tomato and cook until it becomes saucy.",
      "Stir in lentils and enough water or stock to cover by a few centimetres.",
      "Season with salt, pepper, and herbs, then simmer until lentils are tender.",
      "Adjust thickness with more liquid if needed and serve warm."
    ]
  },
  {
    id: 18,
    title: "Tofu Stir-Fry with Broccoli",
    mainIngredient: "tofu",
    ingredients: ["tofu", "broccoli", "carrot", "garlic", "soy sauce", "rice"],
    time: 22,
    difficulty: "medium",
    diet: "vegan",
    glutenFree: false,
    vegan: true,
    baseServings: 2,
    ingredientDetails: [
      { name: "tofu", amount: 220, unit: "g" },
      { name: "broccoli", amount: 180, unit: "g" },
      { name: "carrot", amount: 120, unit: "g" },
      { name: "garlic", amount: 2, unit: "clove" },
      { name: "soy sauce", amount: 20, unit: "ml" },
      { name: "rice", amount: 160, unit: "g" }
    ],
    steps: [
      "Press tofu lightly in a clean towel to remove excess moisture, then cut into cubes.",
      "Chop broccoli and carrot into bite-size pieces.",
      "Heat a little oil in a pan and sauté tofu until lightly browned on most sides.",
      "Add garlic, broccoli, and carrot, stirring over medium-high heat.",
      "Splash in soy sauce and a little water, then add cooked rice if using.",
      "Stir-fry until the veg is just tender and everything is coated in the sauce, then serve."
    ]
  },
  {
    id: 19,
    title: "Bean & Veggie Chili",
    mainIngredient: "beans",
    ingredients: ["beans", "tomato", "onion", "garlic", "bell pepper", "carrot"],
    time: 35,
    difficulty: "medium",
    diet: "vegan",
    glutenFree: true,
    vegan: true,
    baseServings: 4,
    ingredientDetails: [
      { name: "beans", amount: 400, unit: "g" },
      { name: "tomato", amount: 300, unit: "g" },
      { name: "onion", amount: 120, unit: "g" },
      { name: "garlic", amount: 3, unit: "clove" },
      { name: "bell pepper", amount: 120, unit: "g" },
      { name: "carrot", amount: 150, unit: "g" }
    ],
    steps: [
      "In a pot, sauté onion, bell pepper, carrot, and garlic until softened.",
      "Add beans and tomato, stirring everything together.",
      "Season with salt, pepper, and any chili or spices you like.",
      "Pour in a little water or stock to loosen.",
      "Simmer 15–20 minutes, stirring occasionally, until thick and hearty.",
      "Taste and adjust seasoning, then serve with rice, bread, or toppings you like."
    ]
  },
  {
    id: 20,
    title: "Stuffed Bell Peppers with Rice & Cheese",
    mainIngredient: "bell pepper",
    ingredients: ["bell pepper", "rice", "cheese", "onion", "tomato"],
    time: 40,
    difficulty: "hard",
    diet: "vegetarian",
    glutenFree: true,
    vegan: false,
    baseServings: 4,
    ingredientDetails: [
      { name: "bell pepper", amount: 4, unit: "piece" },
      { name: "rice", amount: 220, unit: "g" },
      { name: "cheese", amount: 120, unit: "g" },
      { name: "onion", amount: 100, unit: "g" },
      { name: "tomato", amount: 200, unit: "g" }
    ],
    steps: [
      "Preheat oven to about 190°C (375°F).",
      "Cook rice until just tender and set aside.",
      "Slice the tops off bell peppers and remove seeds and membranes.",
      "In a bowl, mix rice with chopped onion, tomato, and most of the cheese.",
      "Stuff the peppers with the rice mixture and place in a baking dish.",
      "Top with remaining cheese, cover loosely with foil, and bake until peppers are soft.",
      "Uncover for the last few minutes to brown the tops, then serve."
    ]
  },

  // --- Sandwiches & Wraps ---
  {
    id: 21,
    title: "Chicken & Avocado Wrap",
    mainIngredient: "tortilla",
    ingredients: ["tortilla", "chicken", "avocado", "lettuce", "yogurt"],
    time: 18,
    difficulty: "easy",
    diet: "any",
    glutenFree: false,
    vegan: false,
    baseServings: 1,
    ingredientDetails: [
      { name: "tortilla", amount: 1, unit: "piece" },
      { name: "chicken", amount: 120, unit: "g" },
      { name: "avocado", amount: 0.5, unit: "piece" },
      { name: "lettuce", amount: 30, unit: "g" },
      { name: "yogurt", amount: 30, unit: "g" }
    ],
    steps: [
      "Warm the tortilla briefly in a dry pan so it’s flexible.",
      "Slice cooked chicken and avocado; rinse and pat dry the lettuce.",
      "In a small bowl, stir yogurt with a pinch of salt, pepper, and lemon if you like.",
      "Lay lettuce, chicken, and avocado down the center of the tortilla.",
      "Drizzle or spread the yogurt sauce over the filling.",
      "Roll up tightly, folding in the sides, then slice the wrap in half."
    ]
  },
  {
    id: 22,
    title: "Grilled Cheese Sandwich",
    mainIngredient: "bread",
    ingredients: ["bread", "cheese", "butter"],
    time: 8,
    difficulty: "easy",
    diet: "vegetarian",
    glutenFree: false,
    vegan: false,
    baseServings: 1,
    ingredientDetails: [
      { name: "bread", amount: 2, unit: "slice" },
      { name: "cheese", amount: 40, unit: "g" },
      { name: "butter", amount: 8, unit: "g" }
    ],
    steps: [
      "Butter one side of each slice of bread.",
      "Place cheese between the un-buttered sides to make a sandwich.",
      "Heat a pan over medium heat.",
      "Place the sandwich in the pan, buttered side down.",
      "Cook until the underside is golden, then flip and cook the other side.",
      "When the cheese is melted and the bread is crisp, remove and slice."
    ]
  },
  {
    id: 23,
    title: "Tuna Mayo Sandwich",
    mainIngredient: "tuna",
    ingredients: ["bread", "tuna", "yogurt", "onion", "lemon"],
    time: 10,
    difficulty: "easy",
    diet: "any",
    glutenFree: false,
    vegan: false,
    baseServings: 1,
    ingredientDetails: [
      { name: "bread", amount: 2, unit: "slice" },
      { name: "tuna", amount: 80, unit: "g" },
      { name: "yogurt", amount: 25, unit: "g" },
      { name: "onion", amount: 20, unit: "g" },
      { name: "lemon", amount: 0.25, unit: "piece" }
    ],
    steps: [
      "Drain tuna well and place it in a bowl.",
      "Mix with yogurt, a squeeze of lemon, salt, and pepper.",
      "Stir in finely chopped onion.",
      "Spread the tuna mixture over a slice of bread.",
      "Top with another slice of bread and press lightly.",
      "Cut the sandwich into halves or quarters to serve."
    ]
  },
  {
    id: 24,
    title: "Hummus & Veggie Wrap",
    mainIngredient: "tortilla",
    ingredients: ["tortilla", "chickpeas", "garlic", "lemon", "cucumber", "tomato", "spinach"],
    time: 18,
    difficulty: "easy",
    diet: "vegan",
    glutenFree: false,
    vegan: true,
    baseServings: 1,
    ingredientDetails: [
      { name: "tortilla", amount: 1, unit: "piece" },
      { name: "chickpeas", amount: 80, unit: "g" },
      { name: "garlic", amount: 1, unit: "clove" },
      { name: "lemon", amount: 0.25, unit: "piece" },
      { name: "cucumber", amount: 40, unit: "g" },
      { name: "tomato", amount: 40, unit: "g" },
      { name: "spinach", amount: 20, unit: "g" }
    ],
    steps: [
      "Rinse chickpeas if using canned, then drain.",
      "In a bowl, mash chickpeas with garlic, lemon juice, a little olive oil, salt, and pepper to make a quick hummus.",
      "Warm the tortilla until flexible.",
      "Spread a generous layer of hummus over the tortilla.",
      "Top with sliced cucumber, tomato, and spinach leaves.",
      "Roll up tightly and slice into halves or rounds."
    ]
  },
  {
    id: 25,
    title: "Caprese Toast",
    mainIngredient: "bread",
    ingredients: ["bread", "tomato", "cheese", "olive oil"],
    time: 10,
    difficulty: "easy",
    diet: "vegetarian",
    glutenFree: false,
    vegan: false,
    baseServings: 1,
    ingredientDetails: [
      { name: "bread", amount: 1, unit: "slice" },
      { name: "tomato", amount: 70, unit: "g" },
      { name: "cheese", amount: 30, unit: "g" },
      { name: "olive oil", amount: 5, unit: "ml" }
    ],
    steps: [
      "Lightly toast the bread slices.",
      "Slice tomatoes and cheese (or use mozzarella if you have it).",
      "Layer tomato and cheese on the toast.",
      "Drizzle with olive oil and season with salt and pepper.",
      "Optional: briefly grill or broil until the cheese softens.",
      "Serve immediately as a snack or light meal."
    ]
  },

  // --- Hearty Skillets & Protein Mains ---
  {
    id: 26,
    title: "Beef & Potato Skillet",
    mainIngredient: "beef",
    ingredients: ["beef", "potato", "onion", "garlic", "olive oil", "bell pepper"],
    time: 30,
    difficulty: "medium",
    diet: "any",
    glutenFree: true,
    vegan: false,
    baseServings: 3,
    ingredientDetails: [
      { name: "beef", amount: 350, unit: "g" },
      { name: "potato", amount: 400, unit: "g" },
      { name: "onion", amount: 100, unit: "g" },
      { name: "garlic", amount: 3, unit: "clove" },
      { name: "olive oil", amount: 20, unit: "ml" },
      { name: "bell pepper", amount: 100, unit: "g" }
    ],
    steps: [
      "Cut beef and potatoes into small, even pieces; slice onion, garlic, and bell pepper.",
      "Heat olive oil in a wide pan and brown the beef on medium-high heat.",
      "Add onion, garlic, and bell pepper and cook until softened.",
      "Stir in potato pieces and season with salt and pepper.",
      "Add a splash of water or stock, cover, and cook until potatoes are tender.",
      "Remove the lid and cook a few more minutes to reduce any excess liquid, then serve."
    ]
  },
  {
    id: 27,
    title: "Pork Stir-fry with Veggies",
    mainIngredient: "pork",
    ingredients: ["pork", "broccoli", "carrot", "onion", "soy sauce", "garlic"],
    time: 22,
    difficulty: "medium",
    diet: "any",
    glutenFree: false,
    vegan: false,
    baseServings: 2,
    ingredientDetails: [
      { name: "pork", amount: 260, unit: "g" },
      { name: "broccoli", amount: 160, unit: "g" },
      { name: "carrot", amount: 120, unit: "g" },
      { name: "onion", amount: 80, unit: "g" },
      { name: "soy sauce", amount: 20, unit: "ml" },
      { name: "garlic", amount: 2, unit: "clove" }
    ],
    steps: [
      "Slice pork into thin strips; chop broccoli and carrot into bite-size pieces.",
      "Heat a little oil in a pan or wok and quickly stir-fry the pork until just cooked.",
      "Add onion, garlic, broccoli, and carrot and continue stir-frying.",
      "Pour in soy sauce and a splash of water, stirring to coat everything.",
      "Cook until the veg is tender-crisp and the pork is fully cooked.",
      "Serve right away with rice or noodles."
    ]
  },
  {
    id: 28,
    title: "Lemon Garlic Baked Fish (Tuna-friendly)",
    mainIngredient: "tuna",
    ingredients: ["tuna", "lemon", "garlic", "olive oil", "parsley"],
    time: 25,
    difficulty: "easy",
    diet: "any",
    glutenFree: true,
    vegan: false,
    baseServings: 2,
    ingredientDetails: [
      { name: "tuna", amount: 260, unit: "g" },
      { name: "lemon", amount: 0.5, unit: "piece" },
      { name: "garlic", amount: 2, unit: "clove" },
      { name: "olive oil", amount: 20, unit: "ml" },
      { name: "parsley", amount: 5, unit: "g" }
    ],
    steps: [
      "Pat the fish or tuna steaks dry with paper towels.",
      "Place in a small baking dish and drizzle with olive oil.",
      "Top with minced garlic, lemon juice, and chopped parsley; season with salt and pepper.",
      "Let sit for a few minutes while you heat the oven to about 190°C (375°F).",
      "Bake 10–15 minutes, depending on thickness, until the fish flakes easily.",
      "Serve with extra lemon wedges and your favourite sides."
    ]
  },

  // --- Bowls & Salads ---
  {
    id: 29,
    title: "Rainbow Chickpea Salad Bowl",
    mainIngredient: "chickpeas",
    ingredients: ["chickpeas", "cucumber", "tomato", "bell pepper", "onion", "lemon", "olive oil"],
    time: 20,
    difficulty: "easy",
    diet: "vegan",
    glutenFree: true,
    vegan: true,
    baseServings: 2,
    ingredientDetails: [
      { name: "chickpeas", amount: 200, unit: "g" },
      { name: "cucumber", amount: 120, unit: "g" },
      { name: "tomato", amount: 150, unit: "g" },
      { name: "bell pepper", amount: 100, unit: "g" },
      { name: "onion", amount: 60, unit: "g" },
      { name: "lemon", amount: 0.5, unit: "piece" },
      { name: "olive oil", amount: 15, unit: "ml" }
    ],
    steps: [
      "Rinse chickpeas if using canned, then drain well.",
      "Chop cucumber, tomato, bell pepper, and onion into small pieces.",
      "Add everything to a bowl and drizzle with olive oil and lemon juice.",
      "Season with salt, pepper, and any herbs you like.",
      "Toss gently to combine so the colours stay bright.",
      "Serve as a main salad bowl or side dish."
    ]
  },
  {
    id: 30,
    title: "Greek Yogurt Power Bowl",
    mainIngredient: "yogurt",
    ingredients: ["yogurt", "oats", "banana", "honey"],
    time: 8,
    difficulty: "easy",
    diet: "vegetarian",
    glutenFree: false,
    vegan: false,
    baseServings: 1,
    ingredientDetails: [
      { name: "yogurt", amount: 200, unit: "g" },
      { name: "oats", amount: 40, unit: "g" },
      { name: "banana", amount: 1, unit: "piece" },
      { name: "honey", amount: 10, unit: "ml" }
    ],
    steps: [
      "Spoon yogurt into a bowl.",
      "Top with oats and sliced banana.",
      "Drizzle with honey.",
      "Add nuts or seeds if you like extra crunch.",
      "Eat right away, or let it sit a few minutes for softer oats."
    ]
  },
  {
    id: 31,
    title: "Avocado Cucumber Salad",
    mainIngredient: "avocado",
    ingredients: ["avocado", "cucumber", "onion", "lemon", "olive oil"],
    time: 10,
    difficulty: "easy",
    diet: "vegan",
    glutenFree: true,
    vegan: true,
    baseServings: 2,
    ingredientDetails: [
      { name: "avocado", amount: 1, unit: "piece" },
      { name: "cucumber", amount: 150, unit: "g" },
      { name: "onion", amount: 40, unit: "g" },
      { name: "lemon", amount: 0.5, unit: "piece" },
      { name: "olive oil", amount: 10, unit: "ml" }
    ],
    steps: [
      "Slice avocado and cucumber; thinly slice onion.",
      "Add everything to a bowl and drizzle with olive oil and lemon juice.",
      "Season with salt and pepper.",
      "Gently toss so the avocado pieces stay mostly whole.",
      "Serve chilled or at room temperature."
    ]
  },
  {
    id: 32,
    title: "Warm Lentil & Spinach Bowl",
    mainIngredient: "lentils",
    ingredients: ["lentils", "spinach", "onion", "garlic", "olive oil", "lemon"],
    time: 25,
    difficulty: "medium",
    diet: "vegan",
    glutenFree: true,
    vegan: true,
    baseServings: 2,
    ingredientDetails: [
      { name: "lentils", amount: 200, unit: "g" },
      { name: "spinach", amount: 80, unit: "g" },
      { name: "onion", amount: 80, unit: "g" },
      { name: "garlic", amount: 2, unit: "clove" },
      { name: "olive oil", amount: 15, unit: "ml" },
      { name: "lemon", amount: 0.5, unit: "piece" }
    ],
    steps: [
      "Rinse lentils if needed.",
      "In a pot, sauté onion and garlic in olive oil until soft.",
      "Add lentils and enough water or stock to cover by a few centimetres.",
      "Season with salt, pepper, and any herbs or spices you like.",
      "Simmer until lentils are tender and the mixture is thick and stew-like.",
      "Stir in spinach at the end until wilted, then finish with a squeeze of lemon and serve."
    ]
  },
  {
    id: 33,
    title: "Broccoli Cheddar Rice Bowl",
    mainIngredient: "broccoli",
    ingredients: ["broccoli", "rice", "cheese", "milk", "onion"],
    time: 28,
    difficulty: "medium",
    diet: "vegetarian",
    glutenFree: true,
    vegan: false,
    baseServings: 2,
    ingredientDetails: [
      { name: "broccoli", amount: 200, unit: "g" },
      { name: "rice", amount: 180, unit: "g" },
      { name: "cheese", amount: 80, unit: "g" },
      { name: "milk", amount: 150, unit: "ml" },
      { name: "onion", amount: 60, unit: "g" }
    ],
    steps: [
      "Cook rice according to package directions and set aside.",
      "Steam or lightly boil broccoli florets until just tender, then drain.",
      "In a small pot, gently heat milk and stir in grated cheese until melted and smooth.",
      "Season the sauce with salt and pepper.",
      "Combine warm rice, broccoli, and the cheese sauce in a bowl or pan.",
      "Stir until everything is coated and heated through, then serve."
    ]
  }
];

// --- Local photo support (Pexels downloads) ---
// Expects: /recipe_images/pexels_results.json created by your Pexels download script.
// Each entry includes a downloaded_path plus photographer attribution.
let PHOTO_INDEX = {}; // keyed by recipe slug

function slugify(str) {
  return (String(str || "")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")) || "recipe";
}

function normalizeLocalPath(p) {
  // Handles absolute paths, Windows paths, or already-relative paths.
  const s = String(p || "").replace(/\\/g, "/");
  const idx = s.indexOf("recipe_images/");
  return idx >= 0 ? s.slice(idx) : s;
}

async function loadLocalPhotoIndex() {
  try {
    const res = await fetch("recipe_images/pexels_results.json", { cache: "no-store" });
    if (!res.ok) return;
    const data = await res.json();
    const recipes = data?.recipes || [];
    const map = {};
    for (const r of recipes) {
      const slug = r.slug || slugify(r.title);
      const first = (r.downloaded && r.downloaded[0]) ? r.downloaded[0] : null;
      if (first && first.downloaded_path) {
        map[slug] = {
          src: normalizeLocalPath(first.downloaded_path),
          photographer: first.photographer || "",
          photographer_url: first.photographer_url || "",
          pexels_url: first.pexels_url || first.url || "",
        };
      }
    }
    PHOTO_INDEX = map;
  } catch (e) {
    // If the JSON isn't present (e.g., first run), the app still works with gradient thumbnails.
  }
}

function getPhotoForRecipe(recipe) {
  const slug = recipe?.slug || slugify(recipe?.title);
  return PHOTO_INDEX[slug] || null;
}





// App state
const state = {
  ingredients: new Set(),
  currentRecipes: [],
  view: "list",          // "list" or "detail"
  selectedRecipe: null,  // recipe currently open in detail view
  portions: 2            // default number of portions
};


// DOM elements
const ingredientInput = document.getElementById("ingredient-input");
const addIngredientBtn = document.getElementById("add-ingredient-btn");
const ingredientListEl = document.getElementById("ingredient-list");
const clearIngredientsBtn = document.getElementById("clear-ingredients-btn");
const demoFillBtn = document.getElementById("demo-fill-btn");

const dietSelect = document.getElementById("diet-select");
const timeSelect = document.getElementById("time-select");
const complexitySelect = document.getElementById("complexity-select");
const portionsSelect = document.getElementById("portions-select"); // ← NEW

const recipesContainer = document.getElementById("recipes-container");
const recipesSubtitle = document.getElementById("recipes-subtitle");
const recipeCountBadge = document.getElementById("recipe-count-badge");


// ================= HELPERS =================
function normaliseIngredient(raw) {
  return raw.trim().toLowerCase().replace(/\s+/g, " ");
}

// ================= INGREDIENT HANDLING =================
function addIngredientFromInput() {
  const value = normaliseIngredient(ingredientInput.value);
  if (!value) return;

  state.ingredients.add(value);
  ingredientInput.value = "";
  renderIngredientChips();
  generateRecipes(); // ✅ LIVE UPDATE
}

function addIngredientFromQuickAdd(value) {
  state.ingredients.add(normaliseIngredient(value));
  renderIngredientChips();
  generateRecipes(); // ✅ LIVE UPDATE
}

function removeIngredient(value) {
  state.ingredients.delete(value);
  renderIngredientChips();
  generateRecipes(); // ✅ LIVE UPDATE
}

function clearIngredients() {
  state.ingredients.clear();
  state.currentRecipes = [];
  state.view = "list";
  state.selectedRecipe = null;

  renderIngredientChips();
  renderRecipes([]);
}


// ================= CHIP RENDERING =================
function renderIngredientChips() {
  ingredientListEl.innerHTML = "";

  if (state.ingredients.size === 0) {
    const placeholder = document.createElement("span");
    placeholder.className = "micro-text";
    placeholder.textContent = "No ingredients added yet.";
    ingredientListEl.appendChild(placeholder);
    return;
  }

  state.ingredients.forEach((ing) => {
    const chip = document.createElement("div");
    chip.className = "ingredient-chip";

    const label = document.createElement("span");
    label.textContent = ing;

    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "&times;";
    removeBtn.onclick = () => removeIngredient(ing);

    chip.appendChild(label);
    chip.appendChild(removeBtn);
    ingredientListEl.appendChild(chip);
  });
}

// ================= SMART MATCHING ENGINE =================
function generateRecipes() {
  const pantry = Array.from(state.ingredients);
  if (pantry.length === 0) {
    renderRecipes([]);
    return;
  }

  const diet = dietSelect.value;
  const maxTime = timeSelect.value === "any" ? Infinity : Number(timeSelect.value);
  const complexity = complexitySelect.value;

  const scored = RECIPES.map((recipe) => {
    const matched = recipe.ingredients.filter((i) => pantry.includes(i));
    const missing = recipe.ingredients.filter((i) => !pantry.includes(i));
    const coverage = matched.length / recipe.ingredients.length;

    return {
      ...recipe,
      matched,
      missing,
      coverage,
      nearMatch: missing.length <= 2 && matched.length >= 2
    };
  })
    .filter((recipe) => {
      if (diet === "vegetarian" && recipe.diet !== "vegetarian" && !recipe.vegan)
        return false;
      if (diet === "vegan" && !recipe.vegan) return false;
      if (diet === "gluten-free" && !recipe.glutenFree) return false;
      if (recipe.time > maxTime) return false;
      if (complexity !== "any" && recipe.difficulty !== complexity) return false;
      return recipe.coverage >= 0.25 || recipe.nearMatch;
    })
    .sort((a, b) => b.coverage - a.coverage);

  // remember recipes + reset to list view
  state.currentRecipes = scored;
  state.view = "list";
  state.selectedRecipe = null;

  renderRecipes(scored);
}

// ================= RENDER RECIPES =================
function renderRecipes(recipes) {
  recipesContainer.innerHTML = "";

  if (!recipes || recipes.length === 0) {
    recipeCountBadge.textContent = "0";
    recipesContainer.innerHTML = `
      <div class="empty-state">
        Add ingredients to start getting live recipe ideas.
      </div>
    `;
    return;
  }

  recipeCountBadge.textContent = recipes.length;
  recipesSubtitle.textContent =
    "Top matches first, followed by recipes you're almost ready to cook.";

  recipes.forEach((recipe) => {
    const card = document.createElement("article");
    card.className = "recipe-card";

    const thumb = document.createElement("div");
    thumb.className = "recipe-thumbnail";

    // If a local Pexels photo exists, use it as the thumbnail background.
    const photo = getPhotoForRecipe(recipe);
    if (photo && photo.src) {
      thumb.classList.add("has-photo");
      thumb.style.backgroundImage = `url('${photo.src}')`;

      const label = document.createElement("div");
      label.className = "recipe-thumbnail-label";
      label.textContent = recipe.mainIngredient;
      thumb.appendChild(label);
    } else {
      thumb.textContent = recipe.mainIngredient;
    }

    const content = document.createElement("div");
    content.className = "recipe-content";

    const title = document.createElement("h3");
    title.className = "recipe-title";
    title.textContent = recipe.title;
    const meta = document.createElement("div");
    meta.className = "recipe-meta";

    // coverage percent + color class
    const coveragePercent = Math.round((recipe.coverage || 0) * 100);
    let matchClass = "match-low";
    if (coveragePercent >= 75) {
      matchClass = "match-high";
    } else if (coveragePercent >= 50) {
      matchClass = "match-medium";
    }

    meta.innerHTML = `
      <span>${recipe.time} min</span>
      <span>${recipe.difficulty}</span>
      <span class="recipe-match-pill ${matchClass}">
        ${coveragePercent}% match
      </span>
    `;

    const ingredientsEl = document.createElement("p");
    ingredientsEl.className = "recipe-ingredients";

    ingredientsEl.innerHTML = `
      <strong>Uses:</strong> ${recipe.matched.join(", ") || "your staples"}<br />
      <strong>Missing:</strong> ${recipe.missing.join(", ") || "nothing!"}
    `;

    const actions = document.createElement("div");
    actions.className = "recipe-actions";

    if (recipe.vegan)
      actions.innerHTML += `<span class="badge vegan">Vegan</span>`;
    if (recipe.diet === "vegetarian" && !recipe.vegan)
      actions.innerHTML += `<span class="badge veggie">Vegetarian</span>`;
    if (recipe.glutenFree)
      actions.innerHTML += `<span class="badge gluten-free">GF</span>`;

    if (recipe.nearMatch && recipe.coverage < 0.5) {
      actions.innerHTML += `<span class="badge">Almost Ready</span>`;
    }

    const viewBtn = document.createElement("button");
    viewBtn.className = "recipe-view-btn";
    viewBtn.textContent = "View steps";
    viewBtn.onclick = () => showRecipeDetail(recipe); // ← detail view

    actions.appendChild(viewBtn);


    content.appendChild(title);
    content.appendChild(meta);
    content.appendChild(ingredientsEl);
    content.appendChild(actions);

    // Pexels attribution (shows only when we have a local photo)
    if (photo && photo.photographer) {
      const attrib = document.createElement("div");
      attrib.className = "recipe-photo-attrib";
      const photographerName = photo.photographer;
      const photographerUrl = photo.photographer_url || "#";
      const pexelsUrl = photo.pexels_url || "https://www.pexels.com";
      attrib.innerHTML = `Photo by <a href="${photographerUrl}" target="_blank" rel="noopener noreferrer">${photographerName}</a> on <a href="${pexelsUrl}" target="_blank" rel="noopener noreferrer">Pexels</a>`;
      content.appendChild(attrib);
    }

    card.appendChild(thumb);
    card.appendChild(content);

    recipesContainer.appendChild(card);
  });
}

// ================= RECIPE DETAIL VIEW =================
function showRecipeDetail(recipe) {
  state.view = "detail";
  state.selectedRecipe = recipe;

  // sync state.portions with UI
  const selectedPortions = Number(portionsSelect?.value || state.portions || 2);
  state.portions = !Number.isNaN(selectedPortions) && selectedPortions > 0
    ? selectedPortions
    : 2;

  const portions = state.portions;

  recipeCountBadge.textContent = "1";
  recipesSubtitle.textContent = `Ingredients & steps for ${portions} portion${portions === 1 ? "" : "s"}.`;

  recipesContainer.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.className = "recipe-detail";

  // Back button
  const backBtn = document.createElement("button");
  backBtn.className = "ghost-btn back-to-recipes-btn";
  backBtn.textContent = "← Back to recipes";
  backBtn.onclick = () => {
    state.view = "list";
    state.selectedRecipe = null;
    recipeCountBadge.textContent = state.currentRecipes.length;
    recipesSubtitle.textContent =
      "Top matches first, followed by recipes you're almost ready to cook.";
    renderRecipes(state.currentRecipes);
  };

  // Title
  const title = document.createElement("h3");
  title.className = "recipe-detail-title";
  title.textContent = recipe.title;

  // Meta line (time, difficulty, badges)
  const meta = document.createElement("div");
  meta.className = "recipe-detail-meta";
  meta.innerHTML = `
    <span>${recipe.time} min</span>
    <span>${recipe.difficulty}</span>
    ${recipe.vegan ? '<span class="badge vegan">Vegan</span>' : ""}
    ${recipe.diet === "vegetarian" && !recipe.vegan ? '<span class="badge veggie">Vegetarian</span>' : ""}
    ${recipe.glutenFree ? '<span class="badge gluten-free">GF</span>' : ""}
  `;

  // INGREDIENTS BLOCK
  const ingredientsBlock = document.createElement("div");
  ingredientsBlock.className = "recipe-detail-section";

  const ingHeading = document.createElement("h4");
  ingHeading.textContent = `Ingredients for ${portions} portion${portions === 1 ? "" : "s"}`;

  const ingList = document.createElement("ul");
  ingList.className = "recipe-detail-ingredients-list";

  const baseServings = recipe.baseServings || 2;
  const factor = portions / baseServings;

  if (recipe.ingredientDetails && recipe.ingredientDetails.length) {
    recipe.ingredientDetails.forEach((item) => {
      const li = document.createElement("li");
      const scaled = item.amount * factor;
      const rounded = Math.round(scaled * 10) / 10; // 1 decimal place
      const amountText = Number.isInteger(rounded) ? rounded.toString() : rounded;
      li.textContent = `${amountText}${item.unit ? " " + item.unit : ""} ${item.name}`;
      ingList.appendChild(li);
    });
  } else {
    // fallback – just names
    recipe.ingredients.forEach((name) => {
      const li = document.createElement("li");
      li.textContent = name;
      ingList.appendChild(li);
    });
  }

  ingredientsBlock.appendChild(ingHeading);
  ingredientsBlock.appendChild(ingList);

  // STEPS BLOCK
  const stepsBlock = document.createElement("div");
  stepsBlock.className = "recipe-detail-section";

  const stepsHeading = document.createElement("h4");
  stepsHeading.textContent = "Steps";

  const stepsList = document.createElement("ol");
  stepsList.className = "recipe-detail-steps";

  if (recipe.steps && recipe.steps.length) {
    recipe.steps.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      stepsList.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "Step-by-step instructions coming soon.";
    stepsList.appendChild(li);
  }

  stepsBlock.appendChild(stepsHeading);
  stepsBlock.appendChild(stepsList);

  wrapper.appendChild(backBtn);
  wrapper.appendChild(title);

  const photo = getPhotoForRecipe(recipe);
  if (photo && photo.src) {
    const hero = document.createElement("div");
    hero.className = "recipe-detail-photo";
    hero.style.backgroundImage = `url('${photo.src}')`;

    const heroAttrib = document.createElement("div");
    heroAttrib.className = "recipe-photo-attrib detail";
    const photographerName = photo.photographer || "";
    const photographerUrl = photo.photographer_url || "#";
    const pexelsUrl = photo.pexels_url || "https://www.pexels.com";
    if (photographerName) {
      heroAttrib.innerHTML = `Photo by <a href="${photographerUrl}" target="_blank" rel="noopener noreferrer">${photographerName}</a> on <a href="${pexelsUrl}" target="_blank" rel="noopener noreferrer">Pexels</a>`;
      hero.appendChild(heroAttrib);
    }

    wrapper.appendChild(hero);
  }

  wrapper.appendChild(meta);
  wrapper.appendChild(ingredientsBlock);
  wrapper.appendChild(stepsBlock);

  recipesContainer.appendChild(wrapper);
}

// ================= DEMO MODE =================
function fillDemoFridge() {
  state.ingredients = new Set(["chicken", "rice", "tomato", "onion", "garlic"]);
  renderIngredientChips();
  generateRecipes();
}

// ================= EVENTS =================
document.addEventListener("DOMContentLoaded", () => {
  (async () => {
    await loadLocalPhotoIndex();
renderIngredientChips();
  renderRecipes([]);

  addIngredientBtn.onclick = addIngredientFromInput;
  ingredientInput.onkeydown = (e) => {
    if (e.key === "Enter") addIngredientFromInput();
  };

  document.querySelectorAll(".pill-btn").forEach((btn) => {
    btn.onclick = () => addIngredientFromQuickAdd(btn.dataset.ingredient);
  });

  clearIngredientsBtn.onclick = clearIngredients;
  demoFillBtn.onclick = fillDemoFridge;

  [dietSelect, timeSelect, complexitySelect].forEach((el) =>
    el.addEventListener("change", generateRecipes)
  );

  if (portionsSelect) {
    // initialise state from UI
    state.portions = Number(portionsSelect.value) || 2;

    portionsSelect.addEventListener("change", () => {
      const value = Number(portionsSelect.value);
      state.portions = !Number.isNaN(value) && value > 0 ? value : 2;

      if (state.view === "detail" && state.selectedRecipe) {
        // re-render the same recipe with new portions
        showRecipeDetail(state.selectedRecipe);
      } else if (state.view === "list" && state.currentRecipes.length) {
        // re-render list so subtitle / badges stay in sync (if you want)
        renderRecipes(state.currentRecipes);
      }
    });
  }
  })();

});


