import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipes',
  standalone: true,
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
  imports: [CommonModule, RecipeListComponent, RecipeDetailComponent],
})
export class RecipesComponent {
  selectedRecipe!: Recipe;
}
