import './preview.js';
import './big-picture.js';
import './user-form.js';
import './scale-picture.js';
import './effects-picture.js';
import './messages.js';

import {setUserFormSubmit, closeUserModal} from './user-form.js';
import {getData} from './api.js';
import {showAlert} from './util.js';
import {activeFilters} from './filters.js';

getData((pictures) => {
  activeFilters(pictures);
}, showAlert);

setUserFormSubmit(closeUserModal);
