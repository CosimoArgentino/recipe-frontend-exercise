import {ButtonGroup, Button} from '@mui/material'
import { IngredientModel } from '../ingridient/IngredientModel';
import { RecipeModel } from './RecipeModel';
import { useHistory } from 'react-router-dom';
import { useEffect, useState, useLayoutEffect } from 'react';
import Recipe from './Recipe';
import { v4 as uuidv4 } from 'uuid';

function randomIngridient(){
    let ingredient:IngredientModel[] = [];
    for(let i=0;i<10;i++){
        ingredient.push({
            name: "boh"
        })
    }
    return ingredient;
}

function randomIngridients(){
    let ingredient:IngredientModel[] = [];
    for(let i=0;i<10;i++){
        ingredient.push({
            name: "asd"
        })
    }
    return ingredient;
}

function randomRecipess(){
    let recipes:RecipeModel[] = [];
    for (let i = 0; i<10; i++){
        recipes.push({
            id: uuidv4(),
            name: "asd",
            description: "asd",
            ingredients: randomIngridients(),

        })
    }
    return recipes;
}

function randomRecipes(){
    let recipes:RecipeModel[] = [];
    for (let i = 0; i<10; i++){
        recipes.push({
            id: uuidv4(),
            name: "Random",
            description: "Random",
            ingredients: randomIngridient(),

        })
    }
    return recipes;
}

export default function RecipeList() {

    const[recipes,setRecipes] = useState<RecipeModel[]>([]);

    useEffect(() => {
       fetchData();
    }, []);

    const fetchData = () =>{
        let rRecipes = randomRecipes();
        setRecipes(rRecipes);
    }

    const loadRecipe = () => {
        let rRecipes = randomRecipess();
        debugger;
        let oldRecipes = [...recipes];
        oldRecipes = rRecipes;
        setRecipes(oldRecipes);
    }

    const addRecipe = () => {

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
            {recipes.map((r) => {
                return <Recipe key={`recipe-${r.id}`} propRecipe={r}/>
            })}
        
        </>
    );
}