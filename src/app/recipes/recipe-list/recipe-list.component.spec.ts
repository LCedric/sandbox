import { render } from '@testing-library/angular';
import { RecipeListComponent } from './recipe-list.component';

describe('AppComponent', () => {
  it('should create the app', async () => {
    await render(RecipeListComponent);
  });
});
