import axios from "axios"
import RecipeForm from "./RecipeForm"

export default function NewRecipeWrapper(){

    const onSave = () => {
        
    }

    return(
        <>
            <RecipeForm pRecipe={{name:'', description: '', ingredients: [], id: ''}} onSaveForm={onSave}/>
        </>
    )
}