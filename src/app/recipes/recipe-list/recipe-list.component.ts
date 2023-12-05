import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../recipe.service';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
  imports: [CommonModule, RecipeItemComponent],
})
export class RecipeListComponent implements OnInit {
  recipes = signal<Recipe[]>([]);

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes.set(this.recipeService.getRecipes());
  }
}
