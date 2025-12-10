<script>
  import { cart } from "$lib/stores/stores";
  let { product, quantity = 1} = $props();

  function add (product) {
    cart.addItem(product, quantity)
  }
</script>

<button onclick={() => add(product)}>Add to Cart</button>

<style>
  button {
    background-color: black;
    border: none;
    border-radius: 100px;
    color: white;
    padding: 1rem 1.5rem;
    width: 100%;
  }
</style>