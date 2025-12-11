<script>
  import { cart, addToCart } from "$lib/stores/stores";
  let { product, quantity = 1} = $props();

  function add () {
    if (!product) return;

    console.log("Adding product:", product);
    addToCart(product, quantity)
  }
</script>

<button onclick={() => add()}>Add to Cart</button>

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