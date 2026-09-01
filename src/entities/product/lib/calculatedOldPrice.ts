export const DEFAULT_DISCOUNT_PERCENT = 10;

export const calculatedOldPrice = (
    currentPrice: number,
    discountPercent: number = DEFAULT_DISCOUNT_PERCENT
) : number => {
    return Math.round(currentPrice / (1 - discountPercent / 100));
}