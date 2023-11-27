import { RecipeModel } from '../model/RecipeModel';
import {useState, useEffect} from 'react';
import { Card, CardHeader, CardContent, CardActions, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';
import { RecipesOp } from '../crud/RecipeCrud';

export default function Recipe({propRecipe}:{propRecipe:RecipeModel}) {
  const [recipe, setRecipe] = useState<RecipeModel>(propRecipe);
  const {crud: { deleteRecipe } } = RecipesOp();
  const history = useHistory();

  useEffect(() => {
    setRecipe(propRecipe);
  })

  const onDelete = async () => {
    try{
      await deleteRecipe(recipe.id);
      history.push('/');
    }catch(e){
      console.log(e);
    }
  }

  return (
    <>
      <Card>
        <CardHeader
          title={recipe.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {recipe.ingredients.map((i) => {return `${i.name},`})}
          </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => {history.push(`/edit/${recipe.id}/`)}}>
          Edit
        </Button>
        <Button size="small" color="primary" onClick={onDelete}>
          Delete
        </Button>
      </CardActions>
      </Card>
    </>
  );
};