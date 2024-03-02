export default function decorate(block) {
  const [quoteWrapper] = block.children;

  const blockquote = document.createElement('blockquote');
  const p = quoteWrapper.querySelector('p');
  blockquote.append(...p.childNodes);
  p.replaceWith(blockquote);
}
