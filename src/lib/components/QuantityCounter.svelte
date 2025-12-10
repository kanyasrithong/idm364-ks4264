<script>
  import { cart } from '$lib/stores/stores';

  let {quantity} = $props();
</script>

<div>
  <button onclick={() => {
    quantity > 0 && quantity--
    }}>
    -</button>
  <h3 id="quantity">
    {quantity}
  </h3>
  <button onclick={() => quantity++}>+</button>
</div>

<style>
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  button {
    background-color: black;
    border-radius: 100px;
    color: white;
    border: none;
    height: 4rem;
    width: 4rem;
  }
</style>