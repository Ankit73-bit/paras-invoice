export const getName = (fullName) => {
  if (fullName === undefined || fullName === null) return null;
  const splitName = fullName.split(" ");
  return splitName[0];
};
