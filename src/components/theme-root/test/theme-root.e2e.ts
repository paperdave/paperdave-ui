import { newE2EPage } from '@stencil/core/testing';

describe('theme-root', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<theme-root></theme-root>');

    const element = await page.find('theme-root');
    expect(element).toHaveClass('hydrated');
  });
});
