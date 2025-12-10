<script>
	import ItemCard from '$lib/components/ItemCard.svelte';
  let { product } = $props();
</script>

<ItemCard
  primaryImage={product.item_image}
  secondaryImage={product.item_image_back}
/>

<div>
  <h1>hello</h1>
</div>