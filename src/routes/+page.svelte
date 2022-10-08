<script lang="ts">
	import { Button, TextBox, ThemeRoot, Radio, LCHPalette } from '@paperdave/ui';
	import Checkbox from '@paperdave/ui/input-checkbox/Checkbox.svelte';

	let background = '#eeeeee';
	let primary: string | undefined = undefined;

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

		<layout-button-row>
			<Button on:click={randomizeColor}>Randomize</Button>
			<input type="color" bind:value={background} />
			<input type="color" bind:value={primary} />
		</layout-button-row>

		<TextBox label="Hello World" />

		<layout-input-group>
			<Radio value="1" bind:group={thing}>Option 1</Radio>
			<Radio value="2" bind:group={thing}>Option 2</Radio>
		</layout-input-group>

		<layout-input-group>
			<Checkbox name="a" value="a">Hi</Checkbox>
			<Checkbox name="a" value="b" variant="secondary">Bye</Checkbox>
			<Checkbox name="a" value="c" variant="tertiary">Bye</Checkbox>
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
