export { goTo };

import { screenDict } from './elements.js';
import { renderDict } from './render-dict.js';

function goTo(screen, id) {
  screenDict[screen].checked = true;
  goTo.current = screen;

  if (id) {
    renderDict[screen](id);
  }
}
