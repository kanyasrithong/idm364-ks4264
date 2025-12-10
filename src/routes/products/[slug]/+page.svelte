<script>
	import ItemCard from '$lib/components/ItemCard.svelte';
  import AddToCart from '$lib/components/AddToCart.svelte';
  let { data } = $props();
</script>

<main>
  <ItemCard
    primaryImage={data.product.item_image}
    secondaryImage={data.product.item_image_back}
  />
  <div id="product-details">
    <h1>{data.product.item_name}</h1>
    <h2>${data.product.item_price}</h2>
    <p>{data.product.item_description}</p>
    <AddToCart/>
  </div>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    height: 100vh;
    padding:var(--header-height) 32px 32px;
  }

  h2 {
    font-weight: 700;
  }

  p {
    width: 520px;
  }

  #product-details {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
</style>
