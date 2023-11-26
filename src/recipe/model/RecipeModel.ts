import { IngredientModel } from "../../ingridient/model/IngredientModel"

export type RecipeModel = {
    id:string | undefined,
    name:string,
    description:string,
    ingredients:IngredientModel[]
}
