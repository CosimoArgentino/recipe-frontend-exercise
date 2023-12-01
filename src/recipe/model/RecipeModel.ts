import { IngredientModel } from "../../ingridient/model/IngredientModel"

export type RecipeModel = {
    id:string,
    name:string,
    description:string,
    ingredients:IngredientModel[]
}
