import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { RecipeModel } from "./RecipeModel";
import { IngredientModel } from "../ingridient/IngredientModel";
import { RecipeContext } from "../Context";

export default function NewEditRecipeForm({propRecipe}:{propRecipe:RecipeModel}) {

    const recipeCon:RecipeModel = React.useContext(RecipeContext);

    const[recipe, setRecipe] = useState<RecipeModel>(recipeCon);
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
          defaultValue={recipe?.name}
          onChange={(e)=>(setName(e.target.value))}
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue={recipe?.description}
          onChange={(e)=>(setDescription(e.target.value))}
        />
        <TextField
          id="outlined-password-input"
          label="Ingredients"
          defaultValue={recipe?.ingredients.map((i) =>{return i.name})}
        />
      </div>
    </Box>
    )
}