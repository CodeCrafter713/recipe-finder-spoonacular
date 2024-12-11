export interface Recipe {
  id: number;
  title: string;
  image: string;
  missedIngredientCount: number;
  usedIngredientCount: number;
  likes: number;
  calories?: number;
  healthScore?: number;
  servings?: number;
  readyInMinutes?: number;
}

export interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
  original: string;
}

export interface RecipeDetail extends Recipe {
  ingredients: Ingredient[];
  instructions: string[];
  summary?: string;
  nutrition?: {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
  };
  extendedIngredients?: Ingredient[];
}

export interface Nutrient {
  name: string;
  amount: number;
}

interface StepItem {
  id: number,
  name: string,
  localizedName: string,
  image: string
}

export interface Step {
  number: number,
  step: string,
  ingredients: StepItem[],
  equipment: StepItem[],
}