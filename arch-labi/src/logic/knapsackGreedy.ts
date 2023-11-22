import { Item } from './Item';

export function knapsackGreedy(items: Item[], capacity: number): Item[] {
    items.sort((a, b) => b.value / b.weight - a.value / a.weight);
    const selectedItems: Item[] = [];
    let remainingCapacity = capacity;

    for (const item of items) {
        if (item.weight <= remainingCapacity) {
            selectedItems.push(item);
            remainingCapacity -= item.weight;
        }
    }

    return selectedItems;
}
