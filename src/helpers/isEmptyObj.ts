export const isEmptyObj = (obj: object): boolean => {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call({}, key)) {
      continue;
    } else {
      return false;
    }
  }

  return true;
};
