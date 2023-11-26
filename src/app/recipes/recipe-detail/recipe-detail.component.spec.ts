import { render } from '@testing-library/angular';
import { RecipeDetailComponent } from './recipe-detail.component';

describe('AppComponent', () => {
  it('should create the app', async () => {
    await render(RecipeDetailComponent);
  });
});
