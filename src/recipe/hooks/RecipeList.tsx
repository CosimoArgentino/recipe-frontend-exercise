import {ButtonGroup, Button, Box} from '@mui/material'
import { useHistory } from 'react-router-dom';
import Recipe from './Recipe';
import { RecipesOp } from '../crud/RecipeCrud';
export default function RecipeList() {

    const {recipes, crud: { getRecipes } } = RecipesOp();
    const history = useHistory();

    const fetchData = async () =>{
        try {
            await getRecipes();
        } catch (e) {
            console.log(e);
        }
    }

    const newRecipe = () => {
        history.push('/new');
    }

    if(!recipes){
        return(<></>)
    }

    return (
        <>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={fetchData}>Load recipes</Button>
                <span />
                <Button onClick={newRecipe}>Add recipe</Button>
            </ButtonGroup>
            <br />
            <br />
            <br />
            <div style={{display: 'flex'}}>
                {Object.values(recipes).map((r) => {
                    return <Recipe key={`recipe-${r.id}`} propRecipe={r}/>
                })}
            </div>
        </>
    );
}