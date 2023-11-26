import { render } from '@testing-library/angular';
import { RecipeItemComponent } from './recipe-item.component';

describe('AppComponent', () => {
  it('should create the app', async () => {
    await render(RecipeItemComponent);
  });
});
