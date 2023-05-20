export const deepMap = <T extends { children?: T[] }, R extends { children?: R[] }>(
  list: T[],
  handle: (item: T) => R,
): R[] => {
  const result = [] as R[];
  for (const item of list) {
    const handled = handle(item);
    if (Array.isArray(item?.children) && item?.children?.length > 0)
      handled.children = deepMap(item.children, handle);
    result.push(handled);
  }
  return result;
};

export const deepFind = <T extends { children?: T[] }>(list: T[], handle: (item: T) => unknown) => {
  for (const item of list) {
    if (handle(item)) return item;
    if (Array.isArray(item.children) && item.children.length > 0) {
      const sub = deepFind(item.children || [], handle);
      if (sub) return sub;
    }
  }
};
