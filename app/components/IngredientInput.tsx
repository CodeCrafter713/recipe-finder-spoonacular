import React, { useState } from "react";

interface IngredientInputProps {
  onSearch: (ingredients: string[]) => void;
}

export default function IngredientInput({ onSearch }: IngredientInputProps) {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState("");

  const addIngredient = () => {
    if (
      currentIngredient.trim() &&
      !ingredients.includes(currentIngredient.trim())
    ) {
      setIngredients([...ingredients, currentIngredient.trim()]);
      setCurrentIngredient("");
    }
  };

  const removeIngredient = (ingredientToRemove: string) => {
    setIngredients(ingredients.filter((ing) => ing !== ingredientToRemove));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex mb-4">
        <input
          type="text"
          value={currentIngredient}
          onChange={(e) => setCurrentIngredient(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addIngredient()}
          placeholder="Enter an ingredient"
          className="flex-grow p-2 border rounded-l"
        />
        <button
          onClick={addIngredient}
          className="bg-blue-500 text-white p-2 rounded-r"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {ingredients.map((ing: string, index: number) => (
          <span
            key={index}
            className="bg-blue-100 px-2 py-1 rounded flex items-center"
          >
            {ing}
            <button
              onClick={() => removeIngredient(ing)}
              className="ml-2 text-red-500"
            >
              ×
            </button>
          </span>
        ))}
      </div>
      <button
        onClick={() => onSearch(ingredients)}
        disabled={ingredients.length === 0}
        className="mt-4 w-full bg-green-500 text-white p-2 rounded disabled:opacity-50"
      >
        Find Recipes
      </button>
    </div>
  );
}
