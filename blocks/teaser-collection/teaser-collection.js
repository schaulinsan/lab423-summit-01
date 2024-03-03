import { decorateTeaser } from '../teaser/teaser.js';

export default function decorate(block) {
  [...block.children].forEach(decorateTeaser);
}
