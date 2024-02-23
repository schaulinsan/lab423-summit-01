import { createOptimizedPicture } from '../../scripts/aem.js';

export default async function decorate(block) {
  let index = block.querySelector('a')?.href;
  const children = [];
  if (index) {
    index = await fetch(index);
    if (index.ok) {
      index = await index.json();
      const lis = index.data.map(({ image, title, path }) => {
        const li = document.createElement('li');
        const picture = createOptimizedPicture(image);
        const a = document.createElement('a');
        a.href = path;
        a.textContent = title;
        li.append(picture, a);
        return li;
      });
      const ul = document.createElement('ul');
      ul.append(...lis);
      children.push(ul);
    }
  }

  block.replaceChildren(...children);
}
