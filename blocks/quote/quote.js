import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const [quoteWrapper] = block.children;

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  moveInstrumentation(quoteWrapper.firstElementChild, blockquote);
  quoteWrapper.replaceChildren(blockquote);
}
