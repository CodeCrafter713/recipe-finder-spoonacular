import Image from "next/image";
import Link from "next/link";
import { Recipe } from "../types/recipe";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipe/${recipe.id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2">{recipe.title}</h2>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Used Ingredients: {recipe.usedIngredientCount}</span>
            <span>Missed Ingredients: {recipe.missedIngredientCount}</span>
          </div>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-yellow-500">❤️ {recipe.likes} Likes</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
