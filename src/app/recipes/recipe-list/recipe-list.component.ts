import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
  imports: [CommonModule, RecipeItemComponent],
})
export class RecipeListComponent {}
