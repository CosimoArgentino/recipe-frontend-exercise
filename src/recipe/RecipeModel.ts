import { IngredientModel } from "../ingridient/IngredientModel"

export type RecipeModel = {
    id: string,
    name: string,
    description: string,
    ingredients: IngredientModel[]
}
