import { Component, Host, h, Prop } from '@stencil/core';

export type CheckboxVariant = 'primary' | 'secondary' | 'tertiary';

@Component({
  tag: 'input-checkbox',
  styleUrl: 'input-checkbox.scss',
})
export class InputCheckbox {
  @Prop() checked: boolean = false;
  @Prop() variant: CheckboxVariant = 'primary';

  render() {
    return (
      <Host>
        <label>
          <input type="checkbox" checked={this.checked} />
          <div class="visual">
            <svg viewBox="0 0 24 24">
              <path d="M4 12L9 17L19.4 6.2" fill="none" stroke="currentColor" stroke-width="2.7" />
            </svg>
            <div class="bg" />
          </div>
          <slot />
        </label>
      </Host>
    );
  }
}
