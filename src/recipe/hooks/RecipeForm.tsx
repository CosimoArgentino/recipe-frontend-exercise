import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { RecipeModel } from "../model/RecipeModel";
import { IngredientModel } from "../../ingridient/model/IngredientModel";
import { useHistory, useLocation } from "react-router-dom";

export default function RecipeForm({pRecipe, onSaveForm}:{pRecipe:RecipeModel, onSaveForm:(recipe:RecipeModel)=>void}) {

    const history = useHistory();

    const[recipe, setRecipe] = useState<RecipeModel>(pRecipe);
    const[name, setName] = useState<string>(recipe.name ? recipe.name : '');
    const[description, setDescription] = useState<string>(recipe.description ? recipe.description : '');
    const[ingredients, setIngredients] = useState<IngredientModel[]>(recipe.ingredients ? recipe.ingredients : []);

    const onSave = () => {
      let r:RecipeModel = {
        id: recipe.id ? recipe.id : undefined,
        name: name,
        description: description,
        ingredients: ingredients,
      }
      onSaveForm(r);
      history.push('/');
    }

    
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue={name}
          onChange={(e)=>(setName(e.target.value))}
        />
        </div>
        <div>
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue={description}
          onChange={(e)=>(setDescription(e.target.value))}
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Ingredients"
          defaultValue={ingredients?.map((i) =>{return i.name})}
        />
      </div>
    </Box>
    )
}