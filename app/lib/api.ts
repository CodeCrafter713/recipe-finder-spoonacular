import { Nutrient, Recipe, RecipeDetail, Step } from "../types/recipe";

const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
const BASE_URL = "https://api.spoonacular.com/recipes";

export async function findRecipesByIngredients(
  ingredients: string[]
): Promise<Recipe[]> {
  const ingredientString = ingredients.join(",+");
  const url = `${BASE_URL}/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredientString}&number=10`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch recipes");
    return await response.json();
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}

export async function getRecipeDetails(
  recipeId: number
): Promise<RecipeDetail | null> {
  const detailUrl = `${BASE_URL}/${recipeId}/information?apiKey=${API_KEY}&includeNutrition=true`;
  const instructionsUrl = `${BASE_URL}/${recipeId}/analyzedInstructions?apiKey=${API_KEY}`;

  try {
    const [detailResponse, instructionsResponse] = await Promise.all([
      await fetch(detailUrl),
      await fetch(instructionsUrl),
    ]);

    const details = await detailResponse.json();
    const instructions = await instructionsResponse.json();

    return {
      ...details,
      ingredients: details.extendedIngredients,
      instructions: instructions[0]?.steps?.map((step: Step) => step.step) || [],
      nutrition: {
        calories:
          details.nutrition?.nutrients.find((n: Nutrient) => n.name === "Calories")
            ?.amount || 0,
        protein:
          details.nutrition?.nutrients.find((n: Nutrient) => n.name === "Protein")
            ?.amount || 0,
        fat:
          details.nutrition?.nutrients.find((n: Nutrient) => n.name === "Fat")
            ?.amount || 0,
        carbs:
          details.nutrition?.nutrients.find(
            (n: Nutrient) => n.name === "Carbohydrates"
          )?.amount || 0,
      },
    };
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    return null;
  }
}
