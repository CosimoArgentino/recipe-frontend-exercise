import { useLocation } from "react-router-dom";
import RecipeForm from "./RecipeForm";
import { RecipeModel } from "../model/RecipeModel";
import axios from "axios";
import { useState } from "react";

export default function EditRecipeWrapper(){
    const location = useLocation();

    const[recipe, setRecipe] = useState<RecipeModel>(location.state as RecipeModel)

    const onEdit = (recipe:RecipeModel) => {
        //axios.put()
    }

    return(
        <>
            <RecipeForm pRecipe={recipe} onSaveForm={onEdit}/>
        </>
    )
}