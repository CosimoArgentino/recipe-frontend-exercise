import axios from "axios"
import RecipeForm from "./RecipeForm"
import { useState } from "react"
import { RecipeModel } from "../model/RecipeModel"

export default function NewRecipeWrapper(){

    const[recipe, setRecipe] = useState<RecipeModel>({name:'', description: '', ingredients: [], id: ''})

    const onSave = (recipe:RecipeModel) => {
        //axios.post()
    }

    return(
        <>
            <RecipeForm pRecipe={recipe} onSaveForm={onSave}/>
        </>
    )
}