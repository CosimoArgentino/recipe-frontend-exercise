import React from 'react';
import { RecipeModel } from './recipe/model/RecipeModel';

export type RecipesMap = Map<string, RecipeModel>;

export interface IRecipesContext {
    recipes: RecipesMap;
    setRecipes(recipes: RecipesMap): void;
}

export const RecipesContext = React.createContext<IRecipesContext>({} as any);