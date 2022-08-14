import { Component, Host, h, Prop } from '@stencil/core';
import { ColorArray } from './color-utils';
import { LCHPalette } from './lch-palette';

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

  render() {
    const neutralPal = LCHPalette.fromHex(this.background);
    const primaryPal = LCHPalette.fromHex(this.primary);
    const secondaryPal = this.secondary
      ? LCHPalette.fromHex(this.secondary)
      : new LCHPalette((primaryPal.hue + 60) % 360, primaryPal.chroma, primaryPal.initialLightness);
    const tertiaryPal = this.tertiary
      ? LCHPalette.fromHex(this.tertiary)
      : new LCHPalette(
          (primaryPal.hue + 180) % 360,
          primaryPal.chroma,
          primaryPal.initialLightness,
        );

    const primaryLightness = primaryPal.initialLightness!;
    const secondaryLightness = secondaryPal.initialLightness!;
    const tertiaryLightness = tertiaryPal.initialLightness!;

    const bgLightness = neutralPal.initialLightness!;

    return (
      <Host
        style={{
          '--bg': rgb(neutralPal.colorAt(bgLightness)),
          '--on-bg': rgb(neutralPal.colorOn(bgLightness)),
          '--pri': rgb(primaryPal.colorAt(primaryLightness)),
          '--on-pri': rgb(primaryPal.colorOn(primaryLightness)),
          '--on-bg-pri': rgb(primaryPal.colorOn(bgLightness)),
          '--sec': rgb(secondaryPal.colorAt(secondaryLightness)),
          '--on-sec': rgb(secondaryPal.colorOn(secondaryLightness)),
          '--on-bg-sec': rgb(secondaryPal.colorOn(bgLightness)),
          '--tri': rgb(tertiaryPal.colorAt(tertiaryLightness)),
          '--on-tri': rgb(tertiaryPal.colorOn(tertiaryLightness)),
          '--on-bg-tri': rgb(tertiaryPal.colorOn(bgLightness)),
        }}
      >
        <slot />
      </Host>
    );
  }
}
