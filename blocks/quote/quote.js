import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const [quoteWrapper] = block.children;

  // get the paragraph
  const p = quoteWrapper.querySelector('p');
  // create a new <blockquote> we will wrap it in
  const blockquote = document.createElement('blockquote');
  // move the instrumentation from the paragraphs parent to the block quote (if any)
  moveInstrumentation(p.parentElement, blockquote);
  // replace the paragraph with the block quote
  p.parentElement.replaceWith(blockquote);
  // and append the p to the block quote again
  blockquote.append(p);
}
