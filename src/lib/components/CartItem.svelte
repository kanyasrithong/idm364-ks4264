<script>
  import { cart } from '$lib/stores/stores'
  import QuantityCounter from './QuantityCounter.svelte';
  let { image, title, price, quantity } = $props();
</script>

<div id="product-card">
  <img src="{image}" alt="{title}">
  <div id="product-details">
    <h2>{title}</h2>
    <h3>${price}</h3>
    <QuantityCounter
      quantity={quantity}
    />
  </div>
</div>

<style>
  #product-card {
    display: flex;
    flex-direction: row;
    gap: 4rem;

    border-bottom: 1px solid black;
    max-height: 180px;
    padding-bottom: 1rem;
  }

  #product-details {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  img {
    max-width: 240px;
    width: 100%;
    object-fit: scale-down;
  }
</style>
