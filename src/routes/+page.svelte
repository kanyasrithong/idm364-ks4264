<script>
	import ItemCard from "$lib/components/ItemCard.svelte";

  let { data } = $props();
  $inspect(data);
</script>

<div>
  {#each data.products as product}
    <ItemCard
      title={product.item_name}
      primaryImage={product.item_image}
      secondaryImage={product.item_image_back}
      urlPath={product.item_url}
    />
  {/each}
</div>

<style>
  div {
    box-sizing: border-box;
    display: grid;
    grid: repeat(4, auto) / repeat(3, minmax(0,1fr));
    gap: 10px;
    padding: var(--header-height) 0.5rem 0;
    width: 100vw;
  }
</style>
