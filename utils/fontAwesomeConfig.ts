import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';
import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import {faUtensils} from '@fortawesome/free-solid-svg-icons/faUtensils';

export const loadIcons = (): Library => {
  return library.add(fab, faPlus, faTrash, faMugSaucer, faUtensils);
};
