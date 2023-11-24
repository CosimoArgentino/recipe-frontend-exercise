import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { RecipeModel } from "./RecipeModel";
import { IngredientModel } from "../ingridient/IngredientModel";
import { useLocation } from "react-router-dom";

export default function NewEditRecipeForm() {

    const location = useLocation();

    const[recipe, setRecipe] = useState<RecipeModel>(location.state as RecipeModel);
    const[name, setName] = useState<string>(recipe?.name);
    const[description, setDescription] = useState<string>(recipe?.description);
    const[ingredients, setIngredients] = useState<IngredientModel[]>(recipe?.ingredients);

    
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