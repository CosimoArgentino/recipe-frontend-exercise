import axios from 'axios';
import { RecipeModel } from '../recipe/model/RecipeModel';

const API_BASE_URL:string = process.env.REACT_APP_API_BASE_URL ?? 'http://127.0.0.1:8000/api';

export const CreateAxiosClient = (baseUrl: string) => {
    const http = axios.create({
        baseURL: baseUrl
    });

    return {
        getRecipes: async () => {
            try {
                const response = await http.get('/recipes/');
                return response.data as RecipeModel[];
            } catch (error) {
                return error;
            }
        },
        addRecipe: async (recipe:RecipeModel) => {
            try {
                const response = await http.post('/recipes/', recipe);
                return response.data as RecipeModel;
            } catch (error) {
                return error;
            }
        },
        updateRecipe: async (recipe:RecipeModel) => {
            try {
                const response = await http.put(`/recipes/${recipe.id}/`, recipe);
                return response.data as RecipeModel;
            } catch (error) {
                return error;
            }
        },
        deleteRecipe: async (id:string) => {
            try {
                await http.delete(`/recipes/${id}/`);
            } catch (error) {
                return error;
            }
        }
    }
};


export default CreateAxiosClient(API_BASE_URL);

