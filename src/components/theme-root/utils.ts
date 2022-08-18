import { Element, getElement, State } from '@stencil/core';
import { LCHPalette } from './lch-palette';
import { ThemeRoot } from './theme-root';

export type Theme = Awaited<ReturnType<typeof ThemeRoot['prototype']['getTheme']>>;

export const themeMap = new WeakMap<HTMLThemeRootElement, Theme>();

const defaultPrimary = LCHPalette.fromHex('#22c646');

export const defaultTheme: Theme = {
  neutral: LCHPalette.fromHex('#f2f2f2'),
  primary: defaultPrimary,
  secondary: new LCHPalette(
    (defaultPrimary.hue + 60) % 360,
    defaultPrimary.chroma,
    defaultPrimary.initialLightness,
  ),
  tertiary: new LCHPalette(
    (defaultPrimary.hue + 180) % 360,
    defaultPrimary.chroma,
    defaultPrimary.initialLightness,
  ),
};

/**
 * Lets you pull the theme object and listen to changes.
 *
 * Usage:
 * ```ts
 * class MyComponent {
 *   State() theme: Theme;
 *
 *   connectedCallback = ThemeListener.connectedCallback;
 *   disconnectedCallback = ThemeListener.disconnectedCallback;
 * }
 * ```
 */
export const ThemeListener = {
  connectedCallback(self: any) {
    if (!self) self = this;

    self.__handleThemeUpdate = (e: CustomEvent<Theme>) => {
      self.theme = e.detail;
    };
    let themeRoot = getElement(self).parentElement;
    while (themeRoot && themeRoot.tagName !== 'THEME-ROOT') {
      themeRoot = themeRoot.parentElement;
    }
    self.__themeRoot = (themeRoot as HTMLThemeRootElement) ?? undefined;
    self.__themeRoot.addEventListener('themeChange', self.__handleThemeUpdate);
    self.theme = self.themeRoot ? themeMap.get(self.__themeRoot) : defaultTheme;
  },
  disconnectedCallback(self: any) {
    if (!self) self = this;

    if (self.__themeRoot) {
      self.__themeRoot.removeEventListener('themeChange', self.__handleThemeUpdate);
    }
    self.__themeRoot = undefined;
  },
};
