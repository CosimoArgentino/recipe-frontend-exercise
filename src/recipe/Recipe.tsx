import { RecipeModel } from './RecipeModel';
import { Ingredient } from '../ingridient/IngredientModel';
import React, {useState, useEffect} from 'react';
import { Card, CardHeader, Avatar, IconButton, CardContent } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

export default function Recipe({propRecipe}:{propRecipe:RecipeModel}) {
  const [recipe, setRecipe] = useState<RecipeModel>(propRecipe);

  return (
    <>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={recipe.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {recipe.ingredients.map((i) => {return i.name})}
          </Typography>
      </CardContent>
      </Card>
    </>
  );
};