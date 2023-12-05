import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from './models/recipe.model';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
  imports: [CommonModule, RecipeListComponent, RecipeDetailComponent],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit, OnDestroy {
  private recipeSelectedSubscription!: Subscription;

  selectedRecipe = signal<Recipe>({ description: '', imagePath: '', name: '' });

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeSelectedSubscription =
      this.recipeService.recipeSelected.subscribe(recipe => {
        this.selectedRecipe.set(recipe);
      });
  }
  ngOnDestroy(): void {
    this.recipeSelectedSubscription.unsubscribe();
  }
}
