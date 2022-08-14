import { newSpecPage } from '@stencil/core/testing';
import { ThemeRoot } from '../theme-root';

describe('theme-root', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ThemeRoot],
      html: `<theme-root></theme-root>`,
    });
    expect(page.root).toEqualHtml(`
      <theme-root>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </theme-root>
    `);
  });
});
