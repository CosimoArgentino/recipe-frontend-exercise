import { RecipeModel } from '../model/RecipeModel';
import { IngredientModel } from '../../ingridient/model/IngredientModel';
import React, {useState, useEffect} from 'react';
import { Card, CardHeader, Avatar, IconButton, CardContent, CardActions, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { useHistory } from "react-router-dom";

export default function Recipe({propRecipe}:{propRecipe:RecipeModel}) {
  const [recipe, setRecipe] = useState<RecipeModel>(propRecipe);

  let history = useHistory();

  const onDelete = (recipe:RecipeModel) => {

  }

  const onEdit = (recipe:RecipeModel) => {
    history.push({
      pathname:`/edit/${recipe.id}`, 
      state: recipe
      }
    )
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