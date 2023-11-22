import { Item } from './Item';

export function knapsackDynamic(items: Item[], capacity: number): Item[] {
    const n = items.length;
    const dp: number[][] = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        const currentItem = items[i - 1];
        for (let w = 1; w <= capacity; w++) {
            if (currentItem.weight <= w) {
                dp[i][w] = Math.max(currentItem.value + dp[i - 1][w - currentItem.weight], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    const selectedItems: Item[] = [];
    let w = capacity;
    for (let i = n; i > 0 && w > 0; i--) {
        if (dp[i][w] !== dp[i - 1][w]) {
            selectedItems.push(items[i - 1]);
            w -= items[i - 1].weight;
        }
    }

    return selectedItems;
}
