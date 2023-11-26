import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipeList from './recipe/hooks/RecipeList';
import NewRecipeWrapper from './recipe/hooks/NewRecipeWrapper';
import EditRecipeWrapper from './recipe/hooks/EditRecipeWrapper';
import { useState } from 'react';
import { RecipesContext, RecipesMap } from './RecipeContext';

function App() {
  const [recipes, setRecipes] = useState<RecipesMap>(new Map());

  return (
    <>
      <RecipesContext.Provider value={{ recipes, setRecipes}}>
        <RecipeList />

      </RecipesContext.Provider>
    </>
  );
}

export default App;