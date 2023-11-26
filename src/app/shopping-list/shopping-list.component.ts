import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
  imports: [CommonModule, ShoppingEditComponent],
})
export class ShoppingListComponent {}
