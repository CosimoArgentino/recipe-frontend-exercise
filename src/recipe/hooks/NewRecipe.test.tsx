import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewRecipeWrapper from './NewRecipeWrapper';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

const mockAddRecipe = jest.fn();

jest.mock('../crud/RecipeCrud', () => ({
  RecipesOp: () => ({
    crud: {
      addRecipe: mockAddRecipe,
    },
  }),
}));

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const renderWithRouter = (component:any) => {
  const history = createMemoryHistory();
  return render(<Router history={history}>{component}</Router>);
};

describe('NewRecipeWrapper', () => {
  it('renders correctly', () => {
    const { getByLabelText } = renderWithRouter(<NewRecipeWrapper />);
    expect(getByLabelText(/Name/i)).toBeInTheDocument();
    expect(getByLabelText(/Description/i)).toBeInTheDocument();
  });
});
