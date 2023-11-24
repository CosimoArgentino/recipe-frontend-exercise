import { IngredientModel } from "../ingridient/IngredientModel"

export type RecipeModel = {
    id:string | undefined,
    name:string,
    description:string,
    ingredients:IngredientModel[]
}
