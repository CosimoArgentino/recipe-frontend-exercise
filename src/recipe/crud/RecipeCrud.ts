import React from "react";
import httpClient from '../../http/Client'
import { RecipesContext } from "../../RecipeContext";
import { RecipeModel } from "../model/RecipeModel";

export const RecipesOp = () => {
    const { recipes, setRecipes } = React.useContext(RecipesContext);

    return {
        recipes,
        crud: {
            getRecipes: async () => {
                try {
                    setRecipes({});
                    const recipes = await httpClient.getRecipes() as RecipeModel[];
                    const recipesMap = recipes.reduce((map, recipe) => ({ ...map, [recipe.id]: recipe }), {});
                    setRecipes(recipesMap);
                    return recipesMap;
                }catch(error){
                    return error;
                }
            },
            addRecipe: async (recipe:RecipeModel) => {
                try {
                    const newRecipe = await httpClient.addRecipe(recipe) as RecipeModel;
                    setRecipes({ ...recipes, [newRecipe.id]: newRecipe });
                    return newRecipe;
                } catch(error) {
                    return error;
                }
            },
            updateRecipe: async (recipe:RecipeModel) => {
                try {
                    const updatedRecipe = await httpClient.updateRecipe(recipe) as RecipeModel;
                    setRecipes({ ...recipes, [recipe.id]: updatedRecipe });
                    return recipe;
                } catch(error) {
                    return error;
                }
            },
            deleteRecipe: async (id:string) => {
                try {
                    await httpClient.deleteRecipe(id);
                    const { [id]: deletedRecipe, ...remainingRecipes } = recipes;
                    setRecipes(remainingRecipes);
                } catch(error) {
                    return error;
                }
            }
        }
    }
}


