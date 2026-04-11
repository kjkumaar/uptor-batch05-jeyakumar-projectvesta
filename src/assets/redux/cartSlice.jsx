import { createSlice } from "@reduxjs/toolkit";

// 🔹 Load cart from localStorage
const storedCart = localStorage.getItem("cartItems");

const initialState = {
  items: storedCart ? JSON.parse(storedCart) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(p => p.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      // 🔹 Save to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    removeFromCart: (state, action) => {
      const id = action.payload;

      const item = state.items.find(p => p.id === id);

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(p => p.id !== id);
      }

      // 🔹 Save to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;