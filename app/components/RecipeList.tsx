import RecipeCard from "./RecipeCard";
import { Recipe } from "../types/recipe";

// Recommendation system based on the ingredients and also likes
function sortRecipes(recipes: Recipe[]): Recipe[] {
  return recipes.sort((a, b) => {
    // Calculate the difference between used and missed ingredients
    const diffA = Math.abs(a.usedIngredientCount - a.missedIngredientCount);
    const diffB = Math.abs(b.usedIngredientCount - b.missedIngredientCount);

    if (diffA === diffB) {
      // If differences are equal, sort by likes (descending order)
      return b.likes - a.likes;
    }

    // Otherwise, sort by difference (ascending order)
    return diffA - diffB;
  });
}

export default function RecipeList({ recipes }: { recipes: Recipe[] }) {
  // Displaying message for no results
  if (recipes.length === 0) {
    return (
      <div className="text-center mt-8 text-gray-500">
        No recipes found. Try adding more ingredients!
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-8">
      {sortRecipes(recipes).map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
