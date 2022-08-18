import { Component, Host, h, Prop, Element, Event, EventEmitter } from '@stencil/core';
import { ColorArray } from './color-utils';
import { LCHPalette } from './lch-palette';
import { themeMap, Theme } from './utils';

const rgb = (c: ColorArray) => c.map(x => Math.round(x)).join(',');

@Component({
  tag: 'theme-root',
  styleUrl: 'theme-root.scss',
})
export class ThemeRoot {
  @Prop() inline: boolean = false;
  @Prop() background: string = '#f2f2f2';
  @Prop() primary: string = '#22c646';
  @Prop() secondary: string | undefined = undefined;
  @Prop() tertiary: string | undefined = undefined;
  @Prop() error: string = '#ff0000';

  @Event({
    bubbles: false,
    cancelable: false,
  })
  themeChange: EventEmitter<Theme>;

  @Element() el?: HTMLThemeRootElement;
  #waiting = false;

  #neutralPal: LCHPalette;
  #primaryPal: LCHPalette;
  #secondaryPal: LCHPalette;
  #tertiaryPal: LCHPalette;

  #calculateTheme() {
    this.#neutralPal = LCHPalette.fromHex(this.background);
    this.#primaryPal = LCHPalette.fromHex(this.primary);
    this.#secondaryPal = this.secondary
      ? LCHPalette.fromHex(this.secondary)
      : new LCHPalette(
          (this.#primaryPal.hue + 60) % 360,
          this.#primaryPal.chroma,
          this.#primaryPal.initialLightness,
        );
    this.#tertiaryPal = this.tertiary
      ? LCHPalette.fromHex(this.tertiary)
      : new LCHPalette(
          (this.#primaryPal.hue + 180) % 360,
          this.#primaryPal.chroma,
          this.#primaryPal.initialLightness,
        );
  }

  connectedCallback() {
    themeMap.set(this.el, this.getTheme());
  }

  componentWillRender() {
    this.#calculateTheme();
    this.themeChange.emit({
      neutral: this.#neutralPal,
      primary: this.#primaryPal,
      secondary: this.#secondaryPal,
      tertiary: this.#tertiaryPal,
    });
    this.el?.setAttribute('swap', '');
  }

  componentDidRender() {
    if (!this.#waiting) {
      this.#waiting = true;
      requestAnimationFrame(() => {
        this.#waiting = false;
        this.el?.removeAttribute('swap');
      });
    }
  }

  private getTheme() {
    if (!this.#neutralPal) {
      this.#calculateTheme();
    }
    return {
      neutral: this.#neutralPal,
      primary: this.#primaryPal,
      secondary: this.#secondaryPal,
      tertiary: this.#tertiaryPal,
    };
  }

  render() {
    return (
      <Host
        style={{
          '--bg': rgb(this.#neutralPal.colorAt(this.#neutralPal.initialLightness)),
          '--on-bg': rgb(this.#neutralPal.colorOn(this.#neutralPal.initialLightness)),
          '--pri': rgb(this.#primaryPal.colorAt(this.#primaryPal.initialLightness)),
          '--on-pri': rgb(this.#primaryPal.colorOn(this.#primaryPal.initialLightness)),
          '--on-bg-pri': rgb(this.#primaryPal.colorOn(this.#neutralPal.initialLightness)),
          '--sec': rgb(this.#secondaryPal.colorAt(this.#secondaryPal.initialLightness)),
          '--on-sec': rgb(this.#secondaryPal.colorOn(this.#secondaryPal.initialLightness)),
          '--on-bg-sec': rgb(this.#secondaryPal.colorOn(this.#neutralPal.initialLightness)),
          '--tri': rgb(this.#tertiaryPal.colorAt(this.#tertiaryPal.initialLightness)),
          '--on-tri': rgb(this.#tertiaryPal.colorOn(this.#tertiaryPal.initialLightness)),
          '--on-bg-tri': rgb(this.#tertiaryPal.colorOn(this.#neutralPal.initialLightness)),
        }}
      >
        <slot />
      </Host>
    );
  }
}
