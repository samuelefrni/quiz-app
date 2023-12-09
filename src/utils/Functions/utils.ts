export const mixArray = (element: string[]) => {
  const randomSort = () => Math.random() - 0.5;
  element.sort(randomSort);
  return element;
};
