type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items, key) {
  const result: GroupsMap<T> = {};

  items.forEach(item => {
    const keyValue = String(item[key]);
    if (!result[keyValue]) {
      result[keyValue] = [];
    }

    result[keyValue].push(item);
  });

  return result;
}

