import axios from "axios"
import RecipeForm from "./RecipeForm"
import { useState } from "react"
import { RecipeModel } from "../model/RecipeModel"
import { RecipesOp } from "../crud/RecipeCrud"
import { useHistory } from "react-router-dom"

export default function NewRecipeWrapper(){

    const[recipe, setRecipe] = useState<RecipeModel>({name:'', description: '', ingredients: [], id: ''})
    const {crud: { addRecipe } } = RecipesOp();
    const history = useHistory();

    const onSave = async (recipe:RecipeModel) => {
        try {
            await addRecipe(recipe);
            history.push('/');
        } catch (e) {
            console.log(e);
        }
    }

    return(
        <>
            <RecipeForm pRecipe={recipe} onSaveForm={onSave}/>
        </>
    )
}