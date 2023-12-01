import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecipeForm from './RecipeForm';

describe('RecipeForm', () => {
  const mockOnSaveForm = jest.fn();
  const mockRecipe = {
    id: '1',
    name: 'Test Recipe',
    description: 'Test Description',
    ingredients: [{ name: 'Ingredient 1' }, { name: 'Ingredient 2' }]
  };

  beforeEach(() => {
    render(<RecipeForm pRecipe={mockRecipe} onSaveForm={mockOnSaveForm} />);
  });

  it('renders correctly', () => {
    expect(screen.getByLabelText(/Recipe name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Comma separeted ingredients/i)).toBeInTheDocument();
  });

  it('updates input fields correctly', () => {
    const nameInput = screen.getByLabelText(/Recipe name/i) as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'Updated Recipe' } });
    expect(nameInput.value).toBe('Updated Recipe');

    const descriptionInput = screen.getByLabelText(/Description/i) as HTMLInputElement;
    fireEvent.change(descriptionInput, { target: { value: 'Updated Description' } });
    expect(descriptionInput.value).toBe('Updated Description');
  });

  it('calls onSaveForm with the updated recipe on form submission', () => {
    const saveButton = screen.getByText(/Save form/i);
    fireEvent.click(saveButton);
    expect(mockOnSaveForm).toHaveBeenCalledWith({
      id: mockRecipe.id,
      name: 'Test Recipe',
      description: 'Test Description',
      ingredients: [{ name: 'Ingredient 1' }, { name: 'Ingredient 2' }]
    });
  });
});
