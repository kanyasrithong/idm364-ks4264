<script>
  import { updateQuantity } from '$lib/stores/stores';

  let { quantity = 1, id, onChange } = $props();
  let localQuantity = $state(quantity);
</script>

<div>
  <button onclick={() => {
      if (localQuantity > 1) localQuantity--;
      if (id) updateQuantity(id, localQuantity);
      onChange?.(localQuantity);
    }}>
    -
  </button>
  <h3 id="quantity">
    {localQuantity}
  </h3>
  <button onclick={() => {
      if (localQuantity < 99) localQuantity++;
      if (id) updateQuantity(id, localQuantity);
      onChange?.(localQuantity);
    }}>
    +
  </button>
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