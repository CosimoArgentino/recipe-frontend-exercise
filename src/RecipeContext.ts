import React from 'react';
import { RecipeModel } from './recipe/model/RecipeModel';

export type RecipesMap = Record<string, RecipeModel>;

export const RecipesContext = React.createContext<{recipes:RecipesMap; setRecipes(recipes:RecipesMap):void;}>({} as any);