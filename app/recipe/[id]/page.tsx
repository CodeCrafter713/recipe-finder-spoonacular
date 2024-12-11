import Image from "next/image";
import { Ingredient, RecipeDetail } from "../../types/recipe";
import { getRecipeDetails } from "@/app/lib/api";

type RecipeDetailProps = {
  params: {
    id: string;
  };
};

export default async function RecipeDetailPage({ params }: RecipeDetailProps) {
    const recipeId = Number(params.id);
  
    if (isNaN(recipeId)) {
      return (
        <div className="text-center text-gray-600">
          <h1 className="text-2xl font-bold">Invalid Recipe ID</h1>
          <p>Please check the URL and try again.</p>
        </div>
      );
    }
  
    const recipe: RecipeDetail | null = await getRecipeDetails(recipeId);
  
    if (!recipe) {
      return (
        <div className="text-center text-gray-600">
          <h1 className="text-2xl font-bold">Recipe not found</h1>
          <p>Please check the recipe ID and try again.</p>
        </div>
      );
    }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <Image
          src={recipe?.image || ''}
          alt={recipe?.title || ''}
          width={600}
          height={400}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">{recipe?.title || ''}</h1>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: recipe?.summary || '' }}
          />
          <h2 className="text-lg font-bold mb-2">Ingredients:</h2>
          <ul className="list-disc list-inside mb-4">
            {recipe?.extendedIngredients?.map((ingredient: Ingredient, index: number) => (
              <li key={index}>{ingredient.original}</li>
            ))}
          </ul>
          <h2 className="text-lg font-bold mb-2">Instructions:</h2>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: recipe?.instructions || '' }}
          />
          <div className="mt-4">
            <span className="text-sm text-gray-600">
              Ready in: {recipe?.readyInMinutes} minutes | Servings:{" "}
              {recipe?.servings}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
