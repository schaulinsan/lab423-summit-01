export function decorateTeaser(teaser) {
  teaser.classList.add('teaser');
  const [background, foreground] = [...teaser.children];

  background.className = 'background';
  // remove the video link and its wrapper
  const videoLink = background.querySelector('a');
  if (videoLink) {
    videoLink.closest('p').remove();
    // TOOD: play video after a timeout when hovering the teaser
  }
  // remove the wrapper around the picture, if any
  const backgroundImg = background.querySelector('picture');
  if (backgroundImg) {
    const backgroundImgPar = backgroundImg.closest('p');
    if (backgroundImgPar) {
      backgroundImgPar.insertAdjacentElement('afterend', backgroundImg);
      backgroundImgPar.remove();
    }
  }
  // add some classes for the pretitle and title to ease styling
  foreground.className = 'foreground';
  const heading = foreground.querySelector('h2,h3');
  if (heading) {
    const pretitle = heading.previousElementSibling;
    if (pretitle) pretitle.className = 'pretitle';
  }
}

export default function decorate(block) {
  const [background, foreground] = [...block.children].map((row) => row.firstElementChild);
  // remove the ancestor <div> and make background and foreground siblings
  background.parentElement.replaceWith(background);
  foreground.parentElement.replaceWith(foreground);
  decorateTeaser(block);
}
