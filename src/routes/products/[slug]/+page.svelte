<script>
  import AddToCart from '$lib/components/AddToCart.svelte';
	import ItemCard from '$lib/components/ItemCard.svelte';
  import QuantityCounter from '$lib/components/QuantityCounter.svelte';

  let { data } = $props();
  let itemQuantity = $state(1);
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
    <QuantityCounter
      quantity={itemQuantity}
    />
    <AddToCart
      product={data.product}
      quantity={itemQuantity}
    />
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
