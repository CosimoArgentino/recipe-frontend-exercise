import React from "react";
import { RecipeModel } from "./recipe/RecipeModel";

export const RecipeContext = React.createContext<RecipeModel>({} as any);