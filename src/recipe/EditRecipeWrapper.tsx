import { useLocation } from "react-router-dom";
import RecipeForm from "./RecipeForm";
import { RecipeModel } from "./RecipeModel";

export default function EditRecipeWrapper(){
    const location = useLocation();

    const onEdit = (recipe:RecipeModel) => {

    }

    return(
        <>
            <RecipeForm pRecipe={location.state as RecipeModel} onSaveForm={onEdit}/>
        </>
    )
}