/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonVariant } from "./components/input-button/input-button";
import { CheckboxVariant } from "./components/input-checkbox/input-checkbox";
import { RadioVariant } from "./components/input-radio/input-radio";
import { RadioVariant as RadioVariant1 } from "./components/input-radio/input-radio";
export namespace Components {
    interface InputButton {
        "href"?: string;
        "variant": ButtonVariant;
    }
    interface InputCheckbox {
        "checked": boolean;
        "variant": CheckboxVariant;
    }
    interface InputRadio {
        "checked": boolean;
        "name"?: string;
        "value"?: string;
        "variant": RadioVariant;
    }
    interface InputRadioGroup {
        "name"?: string;
        "value"?: string;
        "variant"?: RadioVariant1;
    }
    interface ThemeRoot {
        "background": string;
        "error": string;
        "inline": boolean;
        "primary": string;
        "secondary": string | undefined;
        "tertiary": string | undefined;
    }
}
export interface InputRadioGroupCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLInputRadioGroupElement;
}
declare global {
    interface HTMLInputButtonElement extends Components.InputButton, HTMLStencilElement {
    }
    var HTMLInputButtonElement: {
        prototype: HTMLInputButtonElement;
        new (): HTMLInputButtonElement;
    };
    interface HTMLInputCheckboxElement extends Components.InputCheckbox, HTMLStencilElement {
    }
    var HTMLInputCheckboxElement: {
        prototype: HTMLInputCheckboxElement;
        new (): HTMLInputCheckboxElement;
    };
    interface HTMLInputRadioElement extends Components.InputRadio, HTMLStencilElement {
    }
    var HTMLInputRadioElement: {
        prototype: HTMLInputRadioElement;
        new (): HTMLInputRadioElement;
    };
    interface HTMLInputRadioGroupElement extends Components.InputRadioGroup, HTMLStencilElement {
    }
    var HTMLInputRadioGroupElement: {
        prototype: HTMLInputRadioGroupElement;
        new (): HTMLInputRadioGroupElement;
    };
    interface HTMLThemeRootElement extends Components.ThemeRoot, HTMLStencilElement {
    }
    var HTMLThemeRootElement: {
        prototype: HTMLThemeRootElement;
        new (): HTMLThemeRootElement;
    };
    interface HTMLElementTagNameMap {
        "input-button": HTMLInputButtonElement;
        "input-checkbox": HTMLInputCheckboxElement;
        "input-radio": HTMLInputRadioElement;
        "input-radio-group": HTMLInputRadioGroupElement;
        "theme-root": HTMLThemeRootElement;
    }
}
declare namespace LocalJSX {
    interface InputButton {
        "href"?: string;
        "variant"?: ButtonVariant;
    }
    interface InputCheckbox {
        "checked"?: boolean;
        "variant"?: CheckboxVariant;
    }
    interface InputRadio {
        "checked"?: boolean;
        "name"?: string;
        "value"?: string;
        "variant"?: RadioVariant;
    }
    interface InputRadioGroup {
        "name"?: string;
        "onChange"?: (event: InputRadioGroupCustomEvent<string>) => void;
        "value"?: string;
        "variant"?: RadioVariant1;
    }
    interface ThemeRoot {
        "background"?: string;
        "error"?: string;
        "inline"?: boolean;
        "primary"?: string;
        "secondary"?: string | undefined;
        "tertiary"?: string | undefined;
    }
    interface IntrinsicElements {
        "input-button": InputButton;
        "input-checkbox": InputCheckbox;
        "input-radio": InputRadio;
        "input-radio-group": InputRadioGroup;
        "theme-root": ThemeRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "input-button": LocalJSX.InputButton & JSXBase.HTMLAttributes<HTMLInputButtonElement>;
            "input-checkbox": LocalJSX.InputCheckbox & JSXBase.HTMLAttributes<HTMLInputCheckboxElement>;
            "input-radio": LocalJSX.InputRadio & JSXBase.HTMLAttributes<HTMLInputRadioElement>;
            "input-radio-group": LocalJSX.InputRadioGroup & JSXBase.HTMLAttributes<HTMLInputRadioGroupElement>;
            "theme-root": LocalJSX.ThemeRoot & JSXBase.HTMLAttributes<HTMLThemeRootElement>;
        }
    }
}
