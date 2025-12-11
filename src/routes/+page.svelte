<script>
	import ItemCard from "$lib/components/ItemCard.svelte";
  let { data } = $props();
</script>

<main>
  {#each data.products as product}
    <ItemCard
      title={product.item_name}
      primaryImage={product.item_image}
      secondaryImage={product.item_image_back}
      urlPath={product.item_slug}
      price={product.item_price}
    />
  {/each}
</main>

<style>
  main {
    box-sizing: border-box;
    display: grid;
    grid: repeat(4, auto) / repeat(3, minmax(0,1fr));
    gap: 10px;
    padding: var(--header-height) 0.5rem 0;
    width: 100vw;
  }
</style>
