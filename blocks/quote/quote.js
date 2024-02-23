export default async function decorate(block) {
  const [quoteWrapper, authorWrapper] = block.children;
 
  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);

  let quotee = authorWrapper.textContent.trim();
  // request the /authors.json index
  let quotees = await fetch('/authors.json');
  if (quotees.ok) {
    // get the returned json as javascript object
    quotees = await quotees.json();
    // find the first entry that's title matches our quotee
    quotee = quotees.data.find(({ title }) => {
      return title.toLowerCase() === quotee.toLowerCase();
    })
    if (quotee) {
      const { path } = quotee;
      const a = document.createElement('a');
      a.href = path;
      a.append(...authorWrapper.firstElementChild.childNodes);
      authorWrapper.firstElementChild.replaceChildren(a);
    }
  }
}
