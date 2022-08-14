import { Component, Prop, h } from '@stencil/core';

export type ButtonVariant = 'normal' | 'subtle' | 'primary' | 'secondary' | 'tertiary';

@Component({
  tag: 'input-button',
  styleUrl: 'input-button.scss',
})
export class MyComponent {
  @Prop() href?: string;
  @Prop() variant: ButtonVariant = 'normal';

  render() {
    const RootElement = this.href ? 'a' : 'button';
    return (
      <RootElement href={this.href} class="ui-button">
        <slot />
      </RootElement>
    );
  }
}
