export function shuffle(elements: any[]): any[] {
  return elements
    .map((value) => ({ value, key: Math.random() }))
    .sort((q1, q2) => q1.key - q2.key)
    .map((item) => item.value);
}
