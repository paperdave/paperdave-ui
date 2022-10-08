<script lang="ts">
	import './layout-flex.scss';

	export let center: boolean | undefined = undefined;
</script>

<layout-grid {center}>
	<slot />
</layout-grid>
