<script lang="ts">
	import { Button, TextBox, ThemeRoot, Radio, LCHPalette } from '@paperdave/ui';
	import Checkbox from '@paperdave/ui/input-checkbox/Checkbox.svelte';
	import Switch from '@paperdave/ui/input-switch/Switch.svelte';
	import Link from '@paperdave/ui/link/Link.svelte';

	let background = '#eeeeee';
	let primary: string | undefined = undefined;
	let secondary: string | undefined = undefined;
	let tertiary: string | undefined = undefined;

	function randomizeColor() {
		background =
			'#' +
			Math.floor(Math.random() * 0xffffff)
				.toString(16)
				.padStart(6, '0');

		const primaryPal = LCHPalette.fromHex(background);
		console.log(primaryPal.chroma);
		primaryPal.chroma += 120;
		console.log(primaryPal.chroma);
		console.log('--');
		primary = primaryPal.hexOn(0);
	}

	let thing = '1';
</script>

<ThemeRoot {background} {primary}>
	<layout-container size="normal">
		<h1>@paperdave/ui</h1>

		<p>My own ui library for making web applications. It has four keys:</p>

		<ul>
			<li>
				Polished and good feeling to interact with, with the extreme attention to detail I am known
				for.
			</li>
			<li>Easily themeable and customizable, beyond dark and light modes.</li>
			<li>Simplistic and small, but large enough to cover most needs.</li>
			<li>"Modern" and "Fast", but those words are thrown around too much</li>
		</ul>

		<p>
			Its overall style can be described as a "Less Corporate" version of Material Design, with my
			own design ideals thrown in. We use simple LCH-based palettes over their HCT tonal ones.
			Components are built using Svelte, as that is my preferred framework. The architecture allows
			porting the components to any other framework that supports styling with scss.
		</p>

		<layout-link-row>
			<a href="https://npmjs.com/package/@paperdave/ui">View on npm</a>
			<a href="https://github.com/paperdave/ui">Source Code</a>
			<a href="https://paperdave.net">paperdave.net</a>
		</layout-link-row>

		<h2>Theme Controls</h2>

		<layout-button-row>
			<Button on:click={randomizeColor}>Randomize</Button>
			<input type="color" bind:value={background} />
			<input type="color" bind:value={primary} />
			<input type="color" bind:value={secondary} />
			<input type="color" bind:value={tertiary} />
		</layout-button-row>

		<h2>Button</h2>
		<layout-button-row>
			<Button>Button</Button>
			<Button variant="primary">Button</Button>
			<Button variant="secondary">Button</Button>
			<Button variant="tertiary">Button</Button>
			<Button variant="subtle">Button</Button>
			<Button disabled>Disabled</Button>
			<Button variant="primary" disabled>Disabled</Button>
		</layout-button-row>

		<h2>Text Box</h2>
		<TextBox label="Hello World" />

		<h2>Radio</h2>
		<layout-input-group>
			<Radio value="1" bind:group={thing}>Option 1</Radio>
			<Radio value="2" variant="secondary" bind:group={thing}>Option 2</Radio>
			<Radio value="3" variant="tertiary" bind:group={thing}>Option 2</Radio>
		</layout-input-group>

		<h2>Checkbox</h2>
		<layout-input-group>
			<Checkbox>Option 1</Checkbox>
			<Checkbox checked variant="secondary">Option 2</Checkbox>
			<Checkbox variant="tertiary">Option 3</Checkbox>
		</layout-input-group>

		<h2>Switch</h2>
		<layout-input-group>
			<Switch checked>Option 1</Switch>
			<Switch variant="secondary">Option 2</Switch>
			<Switch checked variant="tertiary">Option 3</Switch>
		</layout-input-group>
	</layout-container>
</ThemeRoot>

<style lang="scss">
	h1 {
		font-size: 4rem;
		font-weight: 800;
		margin: 0;
	}

	input[type='color'] {
		max-width: 40px;
	}
</style>
