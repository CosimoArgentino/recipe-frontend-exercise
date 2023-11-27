import { IngredientModel } from "../../ingridient/model/IngredientModel";

export function createIngredientsFromString(ingredientsAsString:string){
    let ingredients:IngredientModel[] = ingredientsAsString.split(',').map(i => {return {name: i.trim()}});
    return ingredients;
}

export function ingredientsToString(ingredients:IngredientModel[]){
    let ingredientsAsString:string = ingredients.map(ingredient => ingredient.name).join(', ');
    return ingredientsAsString;
}