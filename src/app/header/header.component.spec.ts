import { render } from '@testing-library/angular';
import { HeaderComponent } from './header.component';

describe('AppComponent', () => {
  it('should create the app', async () => {
    await render(HeaderComponent);
  });
});
