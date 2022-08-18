import {
  Component,
  Host,
  h,
  Prop,
  EventEmitter,
  Event,
  Element,
  Watch,
  Listen,
} from '@stencil/core';
import { RadioVariant } from '../input-radio/input-radio';

let i = 0;

@Component({
  tag: 'input-radio-group',
  styleUrl: 'input-radio-group.scss',
})
export class InputRadioGroup {
  @Element() el: HTMLElement;

  @Prop() name?: string = `paperdave-${i++}`;
  @Prop({ mutable: true, reflect: true }) value?: string;
  @Prop() variant?: RadioVariant;

  @Event() change: EventEmitter<string>;

  @Listen('change', { capture: true })
  handleChange(event: Event) {
    if (!('detail' in event)) {
      event.stopImmediatePropagation();
      const input = event.target as HTMLInputElement;
      this.value = input.value;
    }
  }

  @Watch('value')
  watchValue(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.change.emit(newValue);
    }
  }

  // TODO: ths might not work for SSR, but idk how that works yet.
  componentWillRender() {
    for (const elem of Array.from(this.el.children) as HTMLInputRadioElement[]) {
      if (elem.tagName === 'INPUT-RADIO') {
        elem.checked = elem.value === this.value;
        elem.name = this.name;
      }
    }
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
