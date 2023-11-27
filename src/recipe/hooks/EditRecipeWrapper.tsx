import { useHistory, useLocation } from "react-router-dom";
import RecipeForm from "./RecipeForm";
import { RecipeModel } from "../model/RecipeModel";
import { RecipesOp } from "../crud/RecipeCrud";
import { useState } from "react";
import { useParams } from 'react-router-dom';

type EditRecipeParams = {
    id: string;
};

export default function EditRecipeWrapper(){
    const { id:recipeId } = useParams<EditRecipeParams>();
    const { recipes, crud: { updateRecipe, deleteRecipe } } = RecipesOp();
    const [recipe, setRecipe] = useState<RecipeModel>(structuredClone(recipes[recipeId as string]));
    const history = useHistory();

    const onEdit = async (recipe:RecipeModel) => {
        try {
            await updateRecipe(recipe);
        } catch (e) {
            console.log(e);
        }
    }

    return(
        <>
            <RecipeForm pRecipe={recipe} onSaveForm={onEdit}/>
        </>
    )
}