// Inventory items are an item key and a count
export function updateInventory(prev, items) {
  const newInventory = [...prev];
  for (let { key, count = 1 } of items) {
    const idx = newInventory.findIndex((o) => o.key === key);
    if (idx >= 0) {
      newInventory[idx] = {
        ...newInventory[idx],
        count: newInventory[idx].count + count,
      };
    } else {
      newInventory.push({ key, count });
    }
  }
  return newInventory;
}
