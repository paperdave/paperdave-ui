import { Component, Host, h, Prop } from '@stencil/core';

export type RadioVariant = 'primary' | 'secondary' | 'tertiary';

// TODO: SSR support for this component. idk how that would work.

@Component({
  tag: 'input-radio',
  styleUrl: 'input-radio.scss',
})
export class InputRadio {
  @Prop() name?: string;
  @Prop({ reflect: true }) value?: string;
  @Prop({ mutable: true, reflect: true }) checked: boolean = false;
  @Prop() variant: RadioVariant = 'primary';

  render() {
    return (
      <Host>
        <label>
          <input type="radio" name={this.name} value={this.value} checked={this.checked} />
          <div class="visual">
            <div class="border" />
            <div class="border2" />
            <div class="inner" />
          </div>
          <slot />
        </label>
      </Host>
    );
  }
}
