'use client';

import { useState } from 'react';
import { findRecipesByIngredients } from './lib/api';
import { Recipe } from './types/recipe';
import IngredientInput from './components/IngredientInput';
import RecipeList from './components/RecipeList';
import DietaryFilter from './components/DietaryFilter';

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [dietaryRestriction, setDietaryRestriction] = useState('');

  const handleIngredientSearch = async (ingredients: string[]) => {
    setLoading(true);
    try {
      const fetchedRecipes = await findRecipesByIngredients(ingredients);
      
      // Apply dietary filter if selected
      const filteredRecipes = dietaryRestriction 
        ? fetchedRecipes.filter(recipe => 
            recipe.title.toLowerCase().includes(dietaryRestriction.toLowerCase())
          )
        : fetchedRecipes;

      setRecipes(filteredRecipes);
    } catch (error) {
      console.error('Error finding recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Fridge-to-Table Recipe Finder</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <IngredientInput onSearch={handleIngredientSearch} />
          <DietaryFilter 
            onFilterChange={setDietaryRestriction}
          />
        </div>

        {loading ? (
          <div className="text-center mt-8">Loading recipes...</div>
        ) : (
          <RecipeList recipes={recipes} />
        )}
      </div>
    </main>
  );
}