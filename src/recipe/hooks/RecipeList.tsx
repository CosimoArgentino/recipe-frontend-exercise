import {ButtonGroup, Button} from '@mui/material'
import { RecipeModel } from '../model/RecipeModel';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Recipe from './Recipe';
import axios from 'axios';
import { Modal } from '@mui/base';
import RecipeForm from './RecipeForm';
export default function RecipeList() {

    type RecipesMap = Record<string, RecipeModel>;

    const axiosClient = axios.create({
        baseURL: 'http://127.0.0.1:8000/api',
        timeout: 5000
    });

    const[recipes, setRecipes] = useState<RecipesMap>({});
    const[isModalOpen, setIsModalOpen] = useState<boolean>(false);

    let history = useHistory();

    const fetchData = async () =>{
        const response = await axiosClient.get('/recipes/')
        return response.data;
    }

    const loadRecipe = async () => {
        const recipes = await fetchData() as RecipeModel[];
        const recipesMap = recipes.reduce((map, r) => ({ ...map, [r.id]: r }), {});
        setRecipes(recipesMap);
    }

    const onDelete = (recipe:RecipeModel) => {
        
    }

    const onSave = async (recipe:RecipeModel) => {
        const response = await axiosClient.post(`/recipes/`, recipe);
        const newRecipe = response.data as RecipeModel;
        setRecipes({ ...recipes, [newRecipe.id]: newRecipe });
    }
  
    const onEdit = async (recipe:RecipeModel) => {
        const response = await axiosClient.put(`/recipes/${recipe.id}`, recipe);
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
                    return <Recipe key={`recipe-${r.id}`} propRecipe={r} onDelete={onDelete} onEdit={onEdit}/>
                })}
            </div>
            <Modal
                open={isModalOpen}
                onClose={onCloseModal}
            >
                <RecipeForm pRecipe={{name: '', description: '', id: '', ingredients: []}} onSaveForm={onSave} />
            </Modal>
        </>
    );
}