import './data.js';
import './preview.js';
import './big-picture.js';
import './user-form.js';
import './scale-picture.js';
import './effects-picture.js';
import './messages.js';

import {renderSimilarList} from './preview.js';
import {setUserFormSubmit, closeUserModal} from './user-form.js';
import {getData} from './api.js';
import {setEventHendlers} from './big-picture.js';
import {showAlert} from './util.js';

getData((pictures) => {
  renderSimilarList(pictures);
  setEventHendlers(pictures);
}, showAlert);

setUserFormSubmit(closeUserModal);
