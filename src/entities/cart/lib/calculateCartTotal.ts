import type { CartItem } from "../model/types";

export const calculateCartTotal = (items: CartItem[]): number => {
    return items.reduce((total, item) => {
        const itemTotal = item.price * item.quantity;
        return total + itemTotal;
    }, 0);
};