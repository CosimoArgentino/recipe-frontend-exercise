import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipeList from './recipe/RecipeList';
import NewEditRecipeForm from './recipe/NewEditRecipe';

function App() {
  return (
    <>
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={RecipeList} />
          <Route path="/new" component={NewEditRecipeForm} />
          <Route path="/edit/:id" component={NewEditRecipeForm} />
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;