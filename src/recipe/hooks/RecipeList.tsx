import {ButtonGroup, Button, Box} from '@mui/material'
import { RecipeModel } from '../model/RecipeModel';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Recipe from './Recipe';
import axios from 'axios';
import { Modal } from '@mui/base';
import RecipeForm from './RecipeForm';
import { style } from './style';
export default function RecipeList() {

    type RecipesMap = Record<string, RecipeModel>;

    const axiosClient = axios.create({
        baseURL: 'http://127.0.0.1:8000/api',
        timeout: 5000
    });

    const[recipes, setRecipes] = useState<RecipesMap>({});
    const[recipe, setRecipe] = useState<RecipeModel>({name:'', description:'', ingredients:[], id:''});
    const[isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const fetchData = async () =>{
        const response = await axiosClient.get('/recipes/')
        return response.data;
    }

    const loadRecipe = async () => {
        const recipes = await fetchData() as RecipeModel[];
        const recipesMap = recipes.reduce((map, r) => ({ ...map, [r.id]: r }), {});
        setRecipes(recipesMap);
    }

    const onDelete = async (id:string) => {
        const response = await axiosClient.delete(`/recipes/${id}`);
        const { [id]: deletedRecipe, ...remainingRecipes } = recipes;
        setRecipes(remainingRecipes);
    }

    const onSave = async (recipe:RecipeModel) => {
        setIsModalOpen(false);
        const response = await axiosClient.post(`/recipes/`, recipe);
        const newRecipe = response.data as RecipeModel;
        setRecipes({ ...recipes, [newRecipe.id]: newRecipe });
    }
  
    const onEditClickHandler = async (recipe:RecipeModel) => {
        const response = await axiosClient.put(`/recipes/${recipe.id}/`, recipe);
        const editedRecipe = response.data as RecipeModel;
        setRecipes({ ...recipes, [recipe.id]: editedRecipe });
    }

    const onCloseModal = () => {

    }

    if(!recipes){
        return(<></>)
    }

    return (
        <>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={loadRecipe}>Load recipes</Button>
                <span />
                <Button onClick={()=>setIsModalOpen(true)}>Add recipe</Button>
            </ButtonGroup>
            <br />
            <br />
            <br />
            <div style={{display: 'flex'}}>
                {Object.values(recipes).map((r) => {
                    return <Recipe key={`recipe-${r.id}`} propRecipe={r} onDelete={onDelete} onEdit={onEditClickHandler}/>
                })}
            </div>
            <div>
            <Modal
                open={isModalOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <RecipeForm pRecipe={recipe} onSaveForm={onSave} />
                </Box>
            </Modal>
            </div>
        </>
    );
}