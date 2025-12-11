import { writable, derived } from "svelte/store";

let initialCart = [];
if (typeof window !== "undefined") {
  try {
    const saved = localStorage.getItem("cart");
    initialCart = saved ? JSON.parse(saved) : [];
    
    if (!Array.isArray(initialCart)) {
      initialCart = [];
    }
  } catch (e) {
    console.error("Failed to load cart:", e);
    initialCart = [];
  }
}

export const cart = writable(initialCart);

if (typeof window !== "undefined") {
  cart.subscribe((items) => {
    localStorage.setItem("cart", JSON.stringify(items));
  });
}

export function addToCart (product, quantity) {
  cart.update((currentCart) => {
    const existingItem = currentCart.find(item => item.id === product.id);
    
    if (existingItem) {
      return currentCart.map(item =>
        item.id === product.id
        ? {...item, quantity: item.quantity + quantity}
        : item
      )
    } else {
      return [...currentCart, {
        id: product.id,
        name: product.item_name,
        price: product.item_price,
        image: product.item_image,
        quantity,
      }];
    }
  });
};

export function removeFromCart (productId) {
  cart.update((currentCart) => currentCart.filter(item => item.id !== productId));
};

export function updateQuantity (productId, quantity) {
  cart.update((currentCart) => {
    const existingItem = currentCart.find(item => item.id === productId);
    if (!existingItem) return currentCart;

    if (quantity <= 0) {
      return currentCart.filter((item) => item.id !== productId)
    }

    return currentCart.map(item =>
      item.id === productId
      ? { ...item, quantity }
      : item
    )
  });
};

export function clearCart () {cart.set([])};

export const cartTotal = derived(
  cart,
  $cart => $cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
);

export const cartItemCount = derived(
  cart,
  $cart => $cart.reduce((sum, item) => sum + item.quantity, 0)
);