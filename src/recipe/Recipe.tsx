import { RecipeModel } from './RecipeModel';
import { IngredientModel } from '../ingridient/IngredientModel';
import React, {useState, useEffect} from 'react';
import { Card, CardHeader, Avatar, IconButton, CardContent, CardActions, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

export default function Recipe({propRecipe}:{propRecipe:RecipeModel}) {
  const [recipe, setRecipe] = useState<RecipeModel>(propRecipe);

  const onDelete = (recipe:RecipeModel) => {

  }

  const onEdit = (recipe:RecipeModel) => {

  }

  return (
    <>
      <Card>
        <CardHeader
          title={recipe.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {recipe.ingredients.map((i) => {return i.name})}
          </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => {onEdit(recipe)}}>
          Edit
        </Button>
        <Button size="small" color="primary" onClick={() => {onDelete(recipe)}}>
          Delete
        </Button>
      </CardActions>
      </Card>
    </>
  );
};