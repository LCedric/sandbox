import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
  imports: [CommonModule, ShoppingEditComponent],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    { name: 'Apple', amount: 5 },
    { name: 'Tomatoes', amount: 10 },
  ];

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
