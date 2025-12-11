<script>
  import { cart, cartTotal, cartItemCount } from '$lib/stores/stores';
  import CartItem from '$lib/components/CartItem.svelte';
  let cartItems = $derived($cart);
  let subtotal = $derived($cartTotal)

  $inspect(cartItems);
</script>

<main>
  <div id="cart-info">
    <h1>Your Cart</h1>
    <div id="cart-items">
      {#each cartItems as item}
      <CartItem
        image={item.image}
        title={item.name}
        price={item.price}
        quantity={item.quantity}
      />
      {/each}
    </div>
  </div>
  <div id="order-summary">
    <h2>Order Summary</h2>
    <div class="summary-section">
      <h3>Subtotal</h3>
      <h3>${subtotal}</h3>
    </div>
  </div>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    height: 100vh;
    padding:var(--header-height) 32px 32px;
  }

  #cart-items {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  #order-summary {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 3rem;
  }

  .summary-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>