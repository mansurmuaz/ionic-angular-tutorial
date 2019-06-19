import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

    private recipes: Recipe[] = [
        {
            id: 'r1',
            title: 'Menemen',
            imageUrl: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-turkish-menemen.jpg?w=1200&h=1200&crop=1',
            ingredients: ['tomato', 'pepper', 'egg', 'cheese']
        },
        {
            id: 'r2',
            title: 'Sucuklu Yumurta',
            imageUrl: 'http://sutis.com.tr/Upload/Menu/Buyuk/1432019-Sucuklu-Yumurta-1490.jpg',
            ingredients: ['egg', 'sucuk', 'salt']
        }
    ];

    constructor() { }

    getAllRecipes() {
        return [...this.recipes];
    }

    getRecipe(recipeId: string) {
        return {
            ...this.recipes.find( recipe => {
                return recipe.id === recipeId;
            })
        };
    }

    deleteRecipe(recipeId: string) {
        this.recipes = this.recipes.filter( recipe => {
            return recipe.id !== recipeId;
        });
    }
}
