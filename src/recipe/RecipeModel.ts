import { Ingredient } from "../ingridient/IngredientModel"

export type RecipeModel = {
    id: string,
    name: string,
    description: string,
    ingredients: Ingredient[]
}
