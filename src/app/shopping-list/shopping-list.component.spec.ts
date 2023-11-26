import { render } from '@testing-library/angular';
import { ShoppingListComponent } from './shopping-list.component';

describe('AppComponent', () => {
  it('should create the app', async () => {
    await render(ShoppingListComponent);
  });
});
