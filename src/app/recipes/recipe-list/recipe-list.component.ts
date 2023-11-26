import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
  imports: [CommonModule, RecipeItemComponent],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    {
      name: 'A Test Recipe',
      description: 'This is a test',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg?20170213105318',
    },
  ];

  constructor() {}
}
