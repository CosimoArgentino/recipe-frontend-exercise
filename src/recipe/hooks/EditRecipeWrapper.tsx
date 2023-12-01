import { useHistory, useLocation } from "react-router-dom";
import RecipeForm from "./RecipeForm";
import { RecipeModel } from "../model/RecipeModel";
import { RecipesOp } from "../crud/RecipeCrud";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

type EditRecipeParams = {
    id: string;
};

export default function EditRecipeWrapper(){
    const { id:recipeId } = useParams<EditRecipeParams>();
    const { recipes, crud: {getRecipes, updateRecipe} } = RecipesOp();
    const [recipe, setRecipe] = useState<RecipeModel | null>(null);
    const history = useHistory();

    useEffect(() => {
        const fetchRecipes = async () => {
            if (Object.keys(recipes).length === 0) {
                await getRecipes();
            }
        };

        fetchRecipes();
    }, [recipes]);

    useEffect(() => {
        if (recipes[recipeId]) {
            setRecipe(structuredClone(recipes[recipeId]));
        } else if (Object.keys(recipes).length !== 0) {
            history.push('/404');
        }
    }, [recipes, recipeId, history]);

    const onEdit = async (recipe:RecipeModel) => {
        try {
            await updateRecipe(recipe);
            history.push('/');
        } catch (e) {
            console.log(e);
        }
    }

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return(
        <>
            <RecipeForm pRecipe={recipe} onSaveForm={onEdit}/>
        </>
    )
}