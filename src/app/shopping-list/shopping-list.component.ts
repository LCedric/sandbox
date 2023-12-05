import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
  imports: [CommonModule, ShoppingEditComponent],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private ingredientChangedSubscription!: Subscription;

  ingredients = signal<Ingredient[]>([]);

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients.set(this.shoppingListService.getIngredients());

    this.ingredientChangedSubscription =
      this.shoppingListService.ingredientsChanged.subscribe(ingredients => {
        this.ingredients.set(ingredients);
      });
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.shoppingListService.addIngredient(ingredient);
  }

  ngOnDestroy(): void {
    this.ingredientChangedSubscription.unsubscribe();
  }
}
