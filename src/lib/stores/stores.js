import { writable, derived } from "svelte/store";

function createCartStore() {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    
    addItem: (product, quantity) => {
      update(cart => {
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
          return cart.map(item =>
            item.id === product.id
            ? {...item, quantity: item.quantity + 1}
            : item
          )
        } else {
          return [...cart, {
            id: product.id,
            name: product.item_name,
            price: product.item_price,
            image: product.item_image,
            quantity,
          }];
        }
      });
    },

    removeItem: (productId) => {
      update((cart) => cart.filter(item => item.id !== productId));
    },
    
    updateQuantity: (productId, quantity) => {
      update(cart => {
        const existingItem = cart.find(item => item.id === productId);
        if (!existingItem) return cart;

        if (quantity <= 0) {
          return cart.filter((item) => item.id !== productId)
        }

        return cart.map(item =>
          item.id === productId
          ? { ...item, quantity }
          : item
        )
      });
    },
    
    clearCart: () => set([])
  }
}

export const cart = createCartStore();

export const cartTotal = derived(
  cart,
  $cart => $cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
);

export const cartItemCount = derived(
  cart,
  $cart => $cart.reduce((sum, item) => sum + item.quantity, 0)
);