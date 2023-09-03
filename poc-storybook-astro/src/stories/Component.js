export const createComponent = () => {
  const container = document.createElement('div');

  container.insertAdjacentHTML("beforeend", "<!DOCTYPE html><h1>Astro - Index.astro</h1>");

  return container;
};