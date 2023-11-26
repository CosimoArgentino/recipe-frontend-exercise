import { RecipeModel } from '../model/RecipeModel';
import {useState, useEffect} from 'react';
import { Card, CardHeader, CardContent, CardActions, Button, Modal, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import RecipeForm from './RecipeForm';
import { style } from './style';

export default function Recipe({propRecipe, onEdit, onDelete}:{propRecipe:RecipeModel, onEdit:(recipe:RecipeModel)=>void, onDelete:(id:string)=>void}) {
  const [recipe, setRecipe] = useState<RecipeModel>(propRecipe);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setRecipe(propRecipe);
  })

  const onEditClick = () => {
    setIsModalOpen(true);
  }

  const onSaveClick = (recipe:RecipeModel) => {
    setIsModalOpen(false);
    onEdit(recipe);
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
        <Button size="small" color="primary" onClick={onEditClick}>
          Edit
        </Button>
        <Button size="small" color="primary" onClick={() => {onDelete(recipe.id)}}>
          Delete
        </Button>
      </CardActions>
      </Card>
      <Modal
        open={isModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <RecipeForm pRecipe={recipe} onSaveForm={onSaveClick} />
        </Box>
      </Modal>
    </>
  );
};