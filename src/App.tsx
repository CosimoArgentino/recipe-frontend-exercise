import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipeList from './recipe/RecipeList';
import NewRecipeWrapper from './recipe/NewRecipeWrapper';
import EditRecipeWrapper from './recipe/EditRecipeWrapper';

function App() {
  return (
    <>
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={RecipeList} />
          <Route path="/new" component={NewRecipeWrapper} />
          <Route path="/edit/:id" component={EditRecipeWrapper} />
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;