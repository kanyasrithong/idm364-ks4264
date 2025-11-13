<script>
	import favicon from '$lib/assets/favicon.svg';
	import Header from "$lib/components/Header.svelte";
	import '$lib/global.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header></Header>
{@render children?.()}
