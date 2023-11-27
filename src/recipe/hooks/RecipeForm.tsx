import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { RecipeModel } from "../model/RecipeModel";
import { IngredientModel } from "../../ingridient/model/IngredientModel";
import { Button } from "@mui/base";
import { createIngredientsFromString, ingredientsToString } from "../utils/utils";

export default function RecipeForm({pRecipe, onSaveForm}:{pRecipe:RecipeModel, onSaveForm:(recipe:RecipeModel)=>void}) {
    
    const[recipe, setRecipe] = useState<RecipeModel>(pRecipe);
    const[name, setName] = useState<string>(recipe.name);
    const[description, setDescription] = useState<string>(recipe.description);
    const[ingredientsString, setIngredientsString] = useState<string>(ingredientsToString(recipe.ingredients));

    const onSave = () => {
      let ingredients:IngredientModel[] = createIngredientsFromString(ingredientsString);
      let r:RecipeModel = {
        id: recipe.id,
        name: name,
        description: description,
        ingredients: ingredients,
      }
      onSaveForm(r);
    }

    const onChangeIngredients = (ingredientsAsString:string) => {
      setIngredientsString(ingredientsAsString);
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
          label="Recipe name"
          defaultValue={name}
          onChange={(e)=>(setName(e.target.value))}
        />
        </div>
        <div>
        <TextField
          required
          label="Description"
          defaultValue={description}
          onChange={(e)=>(setDescription(e.target.value))}
        />
        </div>
        <div>
        <TextField
          required
          label="Comma separeted ingredients"
          defaultValue={ingredientsString}
          onChange={(e) => {onChangeIngredients(e.target.value)}}
        />
        </div>
        <Button
          onClick={onSave}>
            Save form
        </Button>
    </Box>
    )
}