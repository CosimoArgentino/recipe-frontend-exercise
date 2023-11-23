import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipeList from './recipe/RecipeList';

function App() {
  return (
    <>
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={RecipeList} />
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;


/*
<Route path="/new" component={RecipeCreate} />
          <Route path="/edit/:id" component={RecipeEdit} />
          <Route component={NotFound} />
          */
