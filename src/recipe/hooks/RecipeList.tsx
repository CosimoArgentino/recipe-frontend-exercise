import {ButtonGroup, Button} from '@mui/material'
import { RecipeModel } from '../model/RecipeModel';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Recipe from './Recipe';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
export default function RecipeList() {

    const httpClient = axios.create({
        baseURL: 'http://127.0.0.1:8000/api',
        timeout: 5000
    });

    const[recipes, setRecipes] = useState<RecipeModel[]>([]);

    let history = useHistory();

    const fetchData = async () =>{
        const response = await httpClient.get('/recipes/')
        return response.data;
    }

    const loadRecipe = async () => {
        const rRecipes = await fetchData() as RecipeModel[];
        let oldRecipes = [...recipes];
        oldRecipes = rRecipes;
        setRecipes(oldRecipes);
    }

    const addRecipe = () => {
        history.push({
            pathname: `/new`,
        });
    }

    const onDelete = (recipe:RecipeModel) => {

    }

    const onSave = (recipe:RecipeModel) => {
        //axios.post()
    }
  
    const onEdit = (recipe:RecipeModel) => {
      history.push({
        pathname:`/edit/${recipe.id}`, 
        state: recipe
        }
      )
    }

    if(!recipes){
        return(<></>)
    }

    return (
        <>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={loadRecipe}>Load recipes</Button>
                <span />
                <Button onClick={addRecipe}>Add recipe</Button>
            </ButtonGroup>
            <br />
            <br />
            <br />
            <div style={{display: 'flex'}}>
                {recipes.map((r) => {
                    return <Recipe key={`recipe-${r.id}`} propRecipe={r}/>
                })}
            </div>
        </>
    );
}