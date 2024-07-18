export const LocalStorageSetItem = (key, value) => {
  localStorage.setItem(key, value);
};

export const LocalStorageGetItem = (key) => {
  return localStorage.getItem(key);
};
