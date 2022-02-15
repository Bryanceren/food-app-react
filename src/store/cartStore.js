import { configureStore, createSlice } from "@reduxjs/toolkit";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'counter',
    defaultCartState,
    reducers: {
        add(state, action) {
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItems;
            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.payload.amount,
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.payload);
            }
            const updatedTotalAmount =
                state.totalAmount + action.payload.price * action.payload.amount;
            state = { items: updatedItems, totalAmount: updatedTotalAmount };
        },
        remove(state, action) {
            const existingCarItemIndex = state.items.findIndex(
                (item) => item.id === action.id
              );
              const existingItem = state.items[existingCarItemIndex];
              const updatedTotalAmount = state.totalAmount - existingItem.price;
              let updatedItems;
              if (existingItem.amount === 1) {
                updatedItems = state.items.filter((item) => item.id !== action.id);
              } else {
                const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
                updatedItems = [...state.items];
                updatedItems[existingCarItemIndex] = updatedItem;
              }
          
              state = {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
              };
        },
    }
});

export const cartActions = cartSlice.actions;
export const store = configureStore({
    reducer: { cart: cartSlice.reducer }
});