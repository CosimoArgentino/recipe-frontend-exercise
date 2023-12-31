import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipeList from './recipe/hooks/RecipeList';
import NewRecipeWrapper from './recipe/hooks/NewRecipeWrapper';
import EditRecipeWrapper from './recipe/hooks/EditRecipeWrapper';
import { useState } from 'react';
import { RecipesContext, RecipesMap } from './RecipeContext';
import NotFound from './recipe/hooks/404notFound';

function App() {
  const[recipes, setRecipes] = useState<RecipesMap>({});

  return (
    <>
      <BrowserRouter>
        <RecipesContext.Provider value={{ recipes, setRecipes }}>
          <Switch>
            <Route path="/" exact component={RecipeList} />
            <Route path="/new" component={NewRecipeWrapper} />
            <Route path="/edit/:id" component={EditRecipeWrapper} />
            <Route path="/404" component={NotFound} />
          </Switch>
        </RecipesContext.Provider>
      </BrowserRouter>
      </>
  );
}

export default App;