import { render } from '@testing-library/angular';
import { ShoppingEditComponent } from './shopping-edit.component';

describe('AppComponent', () => {
  it('should create the app', async () => {
    await render(ShoppingEditComponent);
  });
});
