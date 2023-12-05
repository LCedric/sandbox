import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    {
      name: 'A Test Recipe',
      description: 'This is a test',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg?20170213105318',
    },
  ];

  constructor() {}

  getRecipes() {
    console.log('recipes');
    return this.recipes.slice();
  }
}
