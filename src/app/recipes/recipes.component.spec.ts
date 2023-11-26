import { render } from '@testing-library/angular';
import { RecipesComponent } from './recipes.component';

describe('AppComponent', () => {
  it('should create the app', async () => {
    await render(RecipesComponent);
  });
});
